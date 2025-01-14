import './_astro_actions_CzZ-tsCn.mjs';
import * as z from 'zod';
import { d as defineAction } from './server_BRXvSFOV.mjs';
import { d as db, u as user, p as product, a as productImage, g as getSession } from './server_B-dWfR7r.mjs';
import bcrypt from 'bcryptjs';
import { v4 } from 'uuid';
import { eq, inArray, count, sql } from '@astrojs/db/dist/runtime/virtual.js';
import { v2 } from 'cloudinary';

const loginUser = defineAction({
  accept: "form",
  input: z.object({
    email: z.string().email(),
    password: z.string().min(6)
  }),
  handler: async ({ email, password }, { cookies }) => {
    return { ok: true };
  }
});

const logout = defineAction({
  accept: "json",
  handler: async (_, { cookies }) => {
    return { ok: true };
  }
});

const registerUser = defineAction({
  accept: "form",
  input: z.object({
    name: z.string().min(3),
    email: z.string().email(),
    password: z.string().min(6),
    role_id: z.string().default("user"),
    remember_me: z.boolean().optional()
  }),
  handler: async (input) => {
    const hashedPass = bcrypt.hashSync(input.password);
    const userToRegister = {
      ...input,
      id: v4(),
      password: hashedPass
    };
    const newUser = await db.insert(user).values(userToRegister).returning();
    return newUser;
  }
});

const loadProductsFromCart = defineAction({
  accept: "json",
  //input: z.string(),
  handler: async (_, { cookies }) => {
    const cart = cookies.get("cart")?.json() ?? [];
    if (cart.length === 0) return [];
    const productsIds = cart.map((item) => item.productId);
    const dbProducts = await db.select().from(product).innerJoin(productImage, eq(product.id, productImage.productId)).where(inArray(product.id, productsIds));
    return cart.map((item) => {
      const dbProduct = dbProducts.find((p) => p.product.id === item.productId);
      if (!dbProduct) {
        throw new Error(`Product with id ${item.productId} not found`);
      }
      const { title, price, slug } = dbProduct.product;
      const image = dbProduct.productImage.image;
      return {
        productId: item.productId,
        title,
        size: item.size,
        quantity: item.quantity,
        image: image.startsWith("http") ? image : `${"http://localhost:4321"}/images/products/${image}`,
        price,
        slug
      };
    });
  }
});

v2.config({
  cloud_name: "carofedi",
  api_key: "159322392259712",
  api_secret: "rBIQZQ5ZBdYj_MP3kb11DLZbrj0"
});
class ImageUpload {
  static async Upload(file) {
    try {
      const buffer = await file.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString("base64");
      const imageType = file.type.split("/")[1];
      const resp = await v2.uploader.upload(
        `data:image/${imageType};base64,${base64Image}`,
        {
          folder: "astro-store-sitemap"
        }
      );
      return resp.secure_url;
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error));
    }
  }
  // To delete an image or images
  static async Delete(image) {
    try {
      const folderName = "astro-store-products";
      const imgName = image.split("/").pop() ?? "";
      const imgId = `${folderName}/${imgName.split(".")[0]}`;
      const resp = await v2.uploader.destroy(imgId);
      console.log("🚀 ~ ImageUpload ~ Delete ~ resp:", resp);
      return true;
    } catch (error) {
      console.log("🚀 ~ ImageUpload ~ Delete ~ error:", error);
      return false;
    }
  }
}

const MAX_FILE_SIZE = 5 * 1024 * 1024;
const ACCEPTED_IMAGE_TYPES = [
  "image/jpg",
  "image/jpeg",
  "image/png",
  "image/webp",
  "image/svg+xml",
  "image/gif"
];
const createUpdateProduct = defineAction({
  accept: "form",
  input: z.object({
    id: z.string().optional(),
    description: z.string(),
    gender: z.string(),
    price: z.number(),
    sizes: z.string(),
    slug: z.string(),
    stock: z.number(),
    tags: z.string(),
    title: z.string(),
    type: z.string(),
    imageFiles: z.array(
      z.instanceof(File).refine((file) => file.size <= MAX_FILE_SIZE, "Max image size accepted 5MB").refine((file) => {
        if (file.size === 0) return true;
        return ACCEPTED_IMAGE_TYPES.includes(file.type);
      }, `Only suported image files are valid`)
    ).optional()
  }),
  handler: async (form, { request }) => {
    const session = await getSession(request);
    const user = session?.user;
    if (!user) {
      throw new Error("Unauthorized");
    }
    const { id = v4(), imageFiles, ...rest } = form;
    rest.slug = rest.slug.toLowerCase().replaceAll(" ", "-").trim();
    const productToCreate = {
      id,
      user: user.id,
      ...rest
    };
    const queries = [];
    if (!form.id) {
      queries.push(
        db.insert(product).values(productToCreate)
      );
    } else {
      queries.push(
        db.update(product).set(productToCreate).where(eq(product.id, id))
      );
    }
    const secureUrls = [];
    if (form.imageFiles && form.imageFiles.length > 0 && form.imageFiles[0].size > 0) {
      const urls = await Promise.all(
        form.imageFiles.map((file) => ImageUpload.Upload(file))
      );
      secureUrls.push(...urls);
    }
    secureUrls.forEach((imgUrl) => {
      const imgObj = {
        id: v4(),
        image: imgUrl,
        productId: productToCreate.id
      };
      queries.push(db.insert(productImage).values(imgObj));
    });
    await db.batch(queries);
    return productToCreate;
  }
});

const deleteProductImg = defineAction({
  accept: "json",
  input: z.string(),
  handler: async (imageId, { request }) => {
    const session = await getSession(request);
    const user = session?.user;
    if (!user) {
      throw new Error("Unauthorized");
    }
    const [productImg] = await db.select().from(productImage).where(
      eq(productImage.id, imageId)
    );
    if (!productImg) {
      throw new Error(`Image with id ${imageId} not found`);
    }
    await db.delete(productImage).where(
      eq(productImage.id, imageId)
    );
    if (productImg.image.includes("http")) {
      await ImageUpload.Delete(productImg.image);
    }
    return { ok: true };
  }
});

const newProduct = {
  id: "",
  description: "New description",
  gender: "men",
  price: 35,
  sizes: "S,M,L",
  slug: "new_product",
  stock: 12,
  tags: "men,new,shirt",
  title: "New Product",
  type: "shirts"
};
const getProductBySlug = defineAction({
  accept: "json",
  input: z.string(),
  handler: async (slug) => {
    if (slug === "new") {
      return {
        product: newProduct,
        images: []
      };
    }
    const [theProduct] = await db.select().from(product).where(eq(product.slug, slug));
    if (!theProduct) {
      throw new Error(`Product with ${slug} not found`);
    }
    const images = await db.select().from(productImage).where(eq(productImage.productId, theProduct.id));
    return {
      product: theProduct,
      images
      // images: images.map(img => img.image)
    };
  }
});

const getProductByPage = defineAction({
  accept: "json",
  input: z.object({
    page: z.number().optional().default(1),
    limit: z.number().default(12)
  }),
  handler: async ({ page, limit }) => {
    page = page <= 0 ? 1 : page;
    const [totalRecords] = await db.select({ count: count() }).from(product);
    const totalPages = Math.ceil(totalRecords.count / limit);
    if (page > totalPages) {
      return {
        products: [],
        totalPages
      };
    }
    const productsQuery = sql`
    SELECT a.*,
    (SELECT GROUP_CONCAT(image, ',') 
    FROM (SELECT image 
         FROM ${productImage} 
         WHERE productId = a.id 
         LIMIT 2) AS limited_images) AS images
    FROM ${product} a
    LIMIT 12 OFFSET ${(page - 1) * limit};
    `;
    const { rows } = await db.run(productsQuery);
    const products = rows.map((product2) => {
      return {
        ...product2,
        images: product2.images ? product2.images : "no-image.png"
      };
    });
    return {
      products,
      totalPages
    };
  }
});

const server = {
  /**--- Auth ---*/
  loginUser,
  logout,
  registerUser,
  /**--- Products ---*/
  getProductByPage,
  getProductBySlug,
  /**--- Cart ---*/
  loadProductsFromCart,
  /**--- Admin ---*/
  // Products
  createUpdateProduct,
  deleteProductImg
};

export { server };
