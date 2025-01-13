import { ImageUpload } from '@/utils/image-upload';
import { defineAction } from 'astro:actions';
import { db, eq, productImage } from 'astro:db';
import { z } from 'astro:schema';
import { getSession } from 'auth-astro/server';


export const deleteProductImg = defineAction({
  accept: 'json',
  input: z.string(),
  handler: async (imageId, { request }) => {

    const session = await getSession(request);
    const user = session?.user

    if (!user) {
      throw new Error('Unauthorized')
    }

    const [productImg] = await db.select().from(productImage).where(
      eq(productImage.id, imageId)
    )

    if (!productImg) {
      throw new Error(`Image with id ${imageId} not found`)
    }

    const deleted = await db.delete(productImage).where(
      eq(productImage.id, imageId)
    )

    if (productImg.image.includes('http')) {
      await ImageUpload.Delete(productImg.image)
    }

    return { ok: true }
  }
})