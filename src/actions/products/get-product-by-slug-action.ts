import { defineAction } from 'astro:actions';
import { db, eq, product, productImage } from 'astro:db';
import { z } from 'astro:schema';


export const getProductBySlug = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (slug) => {

    const [theProduct] = await db
      .select()
      .from(product)
      .where(eq(product.slug, slug)) // Here we're using destructuring to get the product because currently the where clausule retreive an array of products.

    if (!theProduct) {
      throw new Error(`Product with ${slug} not found`);
    }

    const images = await db.select().from(productImage).where(eq(productImage.productId, theProduct.id));

    return {
      product: theProduct,
      images: images.map(img => img.image)
    };
  }
})