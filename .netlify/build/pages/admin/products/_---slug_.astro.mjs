/* empty css                                           */
import { f as createAstro, g as createComponent, r as renderTemplate, k as renderComponent, l as renderScript, m as maybeRenderHead, i as addAttribute } from '../../../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$ProductImage } from '../../../chunks/ProductImage_DMsIu7hr.mjs';
import { $ as $$ProductSlideShow } from '../../../chunks/ProductSlideShow_D5g-UT6G.mjs';
import { $ as $$Layout } from '../../../chunks/Layout_CYsLghR_.mjs';
import { a as actions } from '../../../chunks/_astro_actions_POsePjrc.mjs';
/* empty css                                        */
export { renderers } from '../../../renderers.mjs';

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const prerender = false;
const $$ = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$;
  const { slug } = Astro2.params;
  const { data, error } = await Astro2.callAction(
    actions.getProductBySlug,
    slug ?? ""
  );
  if (error) {
    return Astro2.redirect("/404");
  }
  const { product, images } = data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Product maintenance", "data-astro-cid-w7mueznz": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 data-astro-cid-w7mueznz>${product.title}</h1> <a href="javascript:history.back()" class="text-blue-500" data-astro-cid-w7mueznz>← Back</a> <form class="grid grid-cols-1 sm:grid-cols-2 gap-4" data-astro-cid-w7mueznz> <!-- The input below is used to send the id, so we can update a product --> <input type="hidden" name="id"${addAttribute(product.id, "value")} data-astro-cid-w7mueznz> <!-- General specs --> <div class="mt-2" data-astro-cid-w7mueznz> <h2 class="text-lg font-semibold" data-astro-cid-w7mueznz>Generasl specs</h2> <!-- Title --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="title" class="block" data-astro-cid-w7mueznz>Title</label> <input type="text" id="title" name="title"${addAttribute(product.title, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Slug --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="slug" class="block" data-astro-cid-w7mueznz>Slug</label> <input type="text" id="slug" name="slug"${addAttribute(product.slug, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Description --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="description" class="block" data-astro-cid-w7mueznz>Descriptión</label> <textarea id="description" name="description" class="w-full p-2 border border-gray-300 rounded" rows="8" data-astro-cid-w7mueznz>${product.description}</textarea> </div> <div class="grid grid-cols-1 sm:grid-cols-2 gap-5" data-astro-cid-w7mueznz> <!-- Price --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="price" class="block" data-astro-cid-w7mueznz>Price</label> <input type="number" id="price" name="price"${addAttribute(product.price, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <!-- Inventory --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="stock" class="block" data-astro-cid-w7mueznz>inventory</label> <input type="number" id="stock" name="stock"${addAttribute(product.stock, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> </div> <!-- Labels --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="tags" class="block" data-astro-cid-w7mueznz>Etiquetas <small class="text-gray-500" data-astro-cid-w7mueznz>(Separated by coma)</small></label> <input type="text" id="tags" name="tags"${addAttribute(product.tags, "value")} class="w-full p-2 border border-gray-300 rounded" data-astro-cid-w7mueznz> </div> <div class="grid grid-cols-2 gap-4" data-astro-cid-w7mueznz> <!-- Gender --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="gender" class="block" data-astro-cid-w7mueznz>Sex</label> <select class="w-full p-2 border border-gray-300 rounded" name="gender" data-astro-cid-w7mueznz> <option value="" data-astro-cid-w7mueznz>[ Select ]</option> ${["men", "women", "unisex", "kid"].map((gender) => renderTemplate`<option${addAttribute(gender, "value")} class="capitalize"${addAttribute(gender === product.gender, "selected")} data-astro-cid-w7mueznz> ${gender.toUpperCase()} </option>`)} </select> </div> <!-- Type --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="tags" class="block" data-astro-cid-w7mueznz>Tipo</label> <select class="w-full p-2 border border-gray-300 rounded" name="type" data-astro-cid-w7mueznz> <option value="" data-astro-cid-w7mueznz>[ Select ]</option> ${["shirts", "shirt", "pants", "hats", "hoodies"].map((type) => renderTemplate`<option${addAttribute(type, "value")} class="capitalize"${addAttribute(type === product.type, "selected")} data-astro-cid-w7mueznz> ${type.toUpperCase()} </option>`)} </select> </div> </div> <!-- Sizes --> <!--  This combination of inline event handling and conditional class assignment allows for dynamic and interactive UI elements. When a user clicks on the element, it toggles the 'active' class, and the initial class state is determined by whether the size is part of the product.sizes array. --> <div class="mb-4" data-astro-cid-w7mueznz> <label for="sizes" class="block" data-astro-cid-w7mueznz>Sizes</label> <div class="flex" data-astro-cid-w7mueznz> ${["XS", "S", "M", "L", "XL", "XXL"].map((size) => renderTemplate`<button type="button" onclick="this.classList.toggle('active')"${addAttribute([
    "btn-size",
    product.sizes.split(",").includes(size) ? "active" : ""
  ], "class:list")} data-astro-cid-w7mueznz> ${size} </button>`)} </div> </div> </div> <!-- Images --> <div data-astro-cid-w7mueznz> <!-- File upload --> <div class="mt-4" data-astro-cid-w7mueznz> <!-- Save  --> <div class="flex justify-end" data-astro-cid-w7mueznz> <button class="bg-blue-500 mb-5 p-2 rounded text-white" data-astro-cid-w7mueznz>Save product</button> </div> <!-- File input --> <div class="flex items-center justify-center w-full" data-astro-cid-w7mueznz> <label for="file-upload" class="flex flex-col items-center justify-center w-full h-52 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:bg-gray-100" id="drop-zone" data-astro-cid-w7mueznz> <div class="flex flex-col items-center justify-center pt-5 pb-6" data-astro-cid-w7mueznz> <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 48 48" data-astro-cid-w7mueznz><rect width="48" height="48" fill="none" data-astro-cid-w7mueznz></rect><path fill="none" stroke="#2897fd" stroke-linecap="round" stroke-linejoin="round" d="M4.5 11.5a3 3 0 0 1 3-3h8.718a4 4 0 0 1 2.325.745l4.914 3.51a4 4 0 0 0 2.325.745H40.5a3 3 0 0 1 3 3v20a3 3 0 0 1-3 3h-33a3 3 0 0 1-3-3z" data-astro-cid-w7mueznz></path><path fill="none" stroke="#2897fd" stroke-linecap="round" stroke-linejoin="round" d="M24 33.5v-14m6.167 6.167L24 19.5l-6.167 6.167" data-astro-cid-w7mueznz></path></svg> <p class="mb-2 text-sm text-gray-500" id="lbl-selected-files" data-astro-cid-w7mueznz> <span class="font-semibold" data-astro-cid-w7mueznz>Click here </span> or drag the files
</p> <p class="text-xs text-gray-500" data-astro-cid-w7mueznz>
SVG, PNG, JPG or GIF (max. 800x400px)
</p> </div> <!-- class="hidden" --> <!-- accept only images --> <input id="file-upload" name="imageFiles" type="file" accept="image/*" multiple class="hidden" data-astro-cid-w7mueznz> </label> </div> <!-- Slideshow --> ${renderComponent($$result2, "ProductSlideShow", $$ProductSlideShow, { "images": images.map((img) => img.image), "data-astro-cid-w7mueznz": true })} <table class="w-full border mb-5" data-astro-cid-w7mueznz> <thead data-astro-cid-w7mueznz> <tr data-astro-cid-w7mueznz> <th data-astro-cid-w7mueznz>Image</th> <th data-astro-cid-w7mueznz>Delete</th> </tr> </thead> <tbody data-astro-cid-w7mueznz> ${images.map(({ image, id }) => renderTemplate`<tr class="border"${addAttribute(id, "id")} data-astro-cid-w7mueznz> <td class="flex justify-center" data-astro-cid-w7mueznz> ${renderComponent($$result2, "ProductImage", $$ProductImage, { "src": image, "alt": product.title, "className": "w-16 h-16 rounded", "data-astro-cid-w7mueznz": true })} </td> <td class="text-center" data-astro-cid-w7mueznz> <button type="button"${addAttribute(id, "data-id")} class="btn-delete-image" data-astro-cid-w7mueznz>
X
</button> </td> </tr>`)} </tbody> </table> </div> </div> </form>  ` })} ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/products/[...slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/products/[...slug].astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/products/[...slug].astro";
const $$url = "/admin/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
