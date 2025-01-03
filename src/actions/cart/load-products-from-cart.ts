import type { CartItem } from '@/interfaces';
import { defineAction } from 'astro:actions';
import { db, eq, inArray, product, productImage } from 'astro:db';
import { z } from 'astro:schema';


export const loadProductsFromCart = defineAction({
  accept: 'json',
  //input: z.string(),
  handler: async (_, { cookies }) => {

    const cart = cookies.get('cart')?.json() as CartItem[] ?? [];

    if (cart.length === 0) return []

    // Load Products

    const productsIds = cart.map(item => item.productId)

    const dbProducts = await db
      .select()
      .from(product)
      .innerJoin(productImage, eq(product.id, productImage.productId))
      .where(inArray(product.id, productsIds))

    return cart.map((item) => {

      const dbProduct = dbProducts.find(p => p.product.id === item.productId);
      if (!dbProduct) {
        throw new Error(`Product with id ${item.productId} not found`)
      }

      const { title, price, slug } = dbProduct.product
      const image = dbProduct.productImage.image

      return {
        productId: item.productId,
        title: title,
        size: item.size,
        quantity: item.quantity,
        image: image.startsWith('http') ? image : `${import.meta.env.PUBLIC_URL}/images/products/${image}`,
        price: price,
        slug: slug
      }

    })
  }
})