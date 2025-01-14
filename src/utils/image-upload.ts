import { v2 as cloudinary } from "cloudinary";


cloudinary.config({
  cloud_name: import.meta.env.CLOUDINARY_CLOUD_NAME,
  api_key: import.meta.env.CLOUDINARY_API_KEY,
  api_secret: import.meta.env.CLOUDINARY_API_SECRET,
})

/**
   * Uploads an image file to a cloud storage service.
   * 
   * @param file - The image file to be uploaded.
   * @returns A promise that resolves when the image upload is complete.
   * 
   * @remarks
   * The `uploadImage` method converts the image file to a base64 string and extracts the image type.
   * Note that the `upload` method of the cloud storage service currently expects a string, not a File object.
   */

export class ImageUpload {
  static async Upload(file: File) {
    try {
      const buffer = await file.arrayBuffer();
      const base64Image = Buffer.from(buffer).toString('base64');
      const imageType = file.type.split('/')[1];


      const resp = await cloudinary.uploader.upload(
        `data:image/${imageType};base64,${base64Image}`, {
        folder: 'astro-store-sitemap'
      }
      );

      return resp.secure_url
    } catch (error) {
      console.log(error);
      throw new Error(JSON.stringify(error))
    }
  }

  // To delete an image or images

  static async Delete(image: string) {

    try {
      const folderName = 'astro-store-products';
      const imgName = image.split('/').pop() ?? '';
      const imgId = `${folderName}/${imgName.split('.')[0]}`

      const resp = await cloudinary.uploader.destroy(imgId)
      console.log("🚀 ~ ImageUpload ~ Delete ~ resp:", resp)

      return true;
    } catch (error) {
      console.log("🚀 ~ ImageUpload ~ Delete ~ error:", error)
      return false;

    }


  }
}