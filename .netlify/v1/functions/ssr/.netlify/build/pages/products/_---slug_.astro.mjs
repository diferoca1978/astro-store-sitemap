/* empty css                                        */
import { f as createAstro, g as createComponent, r as renderTemplate, k as renderComponent, l as renderScript, m as maybeRenderHead, i as addAttribute } from '../../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$ProductSlideShow } from '../../chunks/ProductSlideShow_D5g-UT6G.mjs';
import { $ as $$Layout } from '../../chunks/Layout_CNRUd_IR.mjs';
import { a as actions } from '../../chunks/_astro_actions_CzZ-tsCn.mjs';
/* empty css                                     */
export { renderers } from '../../renderers.mjs';

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
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "data-astro-cid-uq5bhyez": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="grid grid-cols-1 md:grid-cols-3 w-full" data-astro-cid-uq5bhyez> ${renderComponent($$result2, "ProductSlideShow", $$ProductSlideShow, { "images": images.map((img) => img.image), "data-astro-cid-uq5bhyez": true })} <section class="pl-5 md:pl-0" data-astro-cid-uq5bhyez> <h1 class="text-3xl font-bold" data-astro-cid-uq5bhyez>${product.title}</h1> <h2 class="text-2xl font-bold" data-astro-cid-uq5bhyez>$${product.price}</h2> <h3 class="text-2xl font-bold mt-10" data-astro-cid-uq5bhyez>Sizes</h3> <ul class="flex gap-3" data-astro-cid-uq5bhyez> ${product.sizes.split(",").map((size) => renderTemplate`<li class="cursor-pointer"${addAttribute(size, "data-size")} data-astro-cid-uq5bhyez> ${size} </li>`)} </ul> <h3 class="text-3xl font-semibold mt-5" data-astro-cid-uq5bhyez>Quantity</h3> <div class="mt-2" data-astro-cid-uq5bhyez> <button id="decrement-button" class="p-1 text-center items-center text-3xl hover:font-bold" data-astro-cid-uq5bhyez>-</button> <input type="number" min="1" value="1" class="w-14 text-center p-2 border rounded-lg" data-astro-cid-uq5bhyez> <button id="increment-button" class="p-1 text-center items-center text-2xl hover:font-bold" data-astro-cid-uq5bhyez>+</button> <button id="addCart-button" class="bg-slate-800 p-2 text-center rounded-md border hover:border hover:border-sky-400 hover:shadow-lg disabled:bg-gray-400" data-astro-cid-uq5bhyez><span class="mx-4 text-slate-100" data-astro-cid-uq5bhyez>Add to Cart</span></button> <h3 class="mt-7 font-semibold" data-astro-cid-uq5bhyez>Description</h3> <p class="prose md:prose-md mt-2 mb-10" data-astro-cid-uq5bhyez>${product.description}</p> </div> <input type="hidden" id="product-id"${addAttribute(product.id, "value")} data-astro-cid-uq5bhyez> </section> </div> ` })}  ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/products/[...slug].astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/products/[...slug].astro";
const $$url = "/products/[...slug]";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
