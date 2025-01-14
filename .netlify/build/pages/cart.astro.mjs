/* empty css                                     */
import { f as createAstro, g as createComponent, r as renderTemplate, k as renderComponent, l as renderScript, m as maybeRenderHead, i as addAttribute, n as Fragment } from '../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CNRUd_IR.mjs';
import 'js-cookie';
import { F as Formatter } from '../chunks/formatter_COXD278a.mjs';
import { a as actions } from '../chunks/_astro_actions_CzZ-tsCn.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const { data: products, error } = await Astro2.callAction(
    actions.loadProductsFromCart,
    {}
  );
  if (error || !products) {
    return Astro2.redirect("/");
  }
  const total = products.reduce(
    (acc, product) => acc + product.price * product.quantity,
    0
  );
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "ShoopingCart" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1 class="bg-gradient-to-tl from-sky-500 via-blue-700 to-sky-200 bg-clip-text text-transparent">
Cart
</h1> <section class="grid grid-cols-1 sm:grid-cols-2"> <!-- Products --> <div class="order-2 sm:order-1"> ${products.length > 0 && renderTemplate`<h2>Products</h2>`} ${products.length > 0 ? products.map((product) => renderTemplate`<div class="flex gap-4 mt-4 items-center mb-4"> <img${addAttribute(product.image, "src")}${addAttribute(product.title, "alt")} class="w-20 h-20"> <div class="flex items-center gap-2"> <div> <a${addAttribute(`/products/${product.slug}`, "href")} class="hover:underline"> ${product.title} </a> <p>$${product.price}</p> <p>
Size: <span class="font-semibold">${product.size}</span> </p> <p>
Quantity:
<span class="font-semibold">${product.quantity}</span> </p> </div> <div> <button${addAttribute(product.productId, "data-id")}${addAttribute(product.size, "data-size")} class="btn-delete bg-sky-500 hover:bg-red-600 p-0.5 rounded-full"> <svg xmlns="http://www.w3.org/2000/svg"${addAttribute(24, "width")}${addAttribute(24, "height")} viewBox="0 0 24 24"> <path fill="#fff" d="M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z"></path> </svg> </button> </div> </div> </div>`) : renderTemplate`<h2> ${renderComponent($$result2, "Fragment", Fragment, {}, { "default": ($$result3) => renderTemplate` <div class="text-center text-3xl p-5"> <p>The cart</p> <p>is empty !! </p> </div> ` })} </h2>`} ${products.length === 0 ? (
    // The anchor tag sets the href attribute to "javascript:history.back()", which allows the user
    //  to navigate back to previous page in their browser history when the link is clicked.
    renderTemplate`<a href="/" class="hover:underline text-sky-500 text-lg capitalize">
Back to add products
</a>`
  ) : renderTemplate`<a href="javascript:history.back()" class="text-sky-500 text-lg capitalize hover:underline">
Continue shopping
</a>`} </div> <!-- Total --> <div class="bg-black h-[330px] text-white p-6 rounded-lg shadow-lg order-1 ml-2 mt-2"> <h2 class="text-lg font-semibold mb-4">Total summary</h2> <div class="flex justify-between text-gray-400 mb-2"> <span>Delivery</span> <span>Free</span> </div> <div class="flex justify-between text-gray-400 mb-4"> <span>SubTotal </span> <span>${Formatter.currency(total)}</span> </div> <div class="flex justify-between text-gray-400 mb-4"> <span>Tax</span> <span>${Formatter.currency(total * 0.15)}</span> </div> <div class="flex justify-between text-xl font-bold"> <span>Total</span> <span>${Formatter.currency(total * 1.15)}</span> </div> <button class="mt-10 w-full bg-blue-700 text-gray-300 py-3 rounded-lg hover:bg-gray-600 transition-all">
PAY
</button> </div> </section> ` })} ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/cart/index.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/cart/index.astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/cart/index.astro";
const $$url = "/cart";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
