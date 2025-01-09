import type { ProductWithImages } from '@/interfaces';
import { defineAction } from 'astro:actions';
import { count, db, eq, product, productImage, sql } from 'astro:db';
import { z } from 'astro:schema';


export const getProductByPage = defineAction({
  accept: 'json',
  input: z.object({
    page: z.number().optional().default(1),
    limit: z.number().default(12)
  }),
  handler: async ({ page, limit }) => {

    //TODO: Evaluate that the page shouldn't be a negative number.
    page = page <= 0 ? 1 : page

    //TODO: Evaluate how many page we have.
    // First, we need to know how many products there are? 
    const [totalRecords] = await db.select({ count: count() }).from(product);
    // Next, we use a math operation to calculate the number of pages based on the total number of products.
    const totalPages = Math.ceil(totalRecords.count / limit)
    // Then, we may evaluate wath to do if the page given is major that the totalPages
    if (page > totalPages) {
      return {
        products: [] as ProductWithImages[],
        totalPages: totalPages
      }
    }

    //* This is the one way to query that we are going to use to get the products.*//

    // const products = await db
    //   .select()
    //   .from(product)
    //   .innerJoin(productImage, eq(product.id, productImage.productId))
    //   .limit(limit)
    //   .offset((page - 1) * 12)


    /**
     * This is the second way (best way) to query that we are going to use to get the products.
     * @remarks
     * Retrieves a paginated list of products along with their associated images.
     * 
     * The query selects all columns from the `product` table and includes a subquery
     * that concatenates up to two images per product into a single string, separated by commas.
     * 
     * @param {number} page - The current page number for pagination.
     * @param {number} limit - The number of products to display per page.
     * 
     * @returns {Promise<Array>} A promise that resolves to an array of products, each with a maximum of two associated images.
     */
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

    const { rows } = await db.run(productsQuery) // Notice that rows don't have a strict typed schema, so we need to create an interface to give it a type. The path is src/interfaces/product-with-image.interface.ts

    /**
     * Maps through the rows of products and returns an array of products with images.
     * If a product does not have an image, it assigns a default image 'no-image.png'.
     *
     * @returns {ProductWithImages[]} - An array of products with images.
     */
    const products = rows.map(product => {

      return {
        ...product,
        images: product.images ? product.images : 'no-image.png'
      }

    }) as unknown as ProductWithImages[];


    return {
      products: products,
      totalPages: totalPages,

    }
  }
})