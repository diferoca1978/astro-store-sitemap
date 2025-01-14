/* empty css                                        */
import { f as createAstro, g as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead, i as addAttribute } from '../../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../../chunks/Layout_CYsLghR_.mjs';
import { a as actions } from '../../chunks/_astro_actions_POsePjrc.mjs';
import { $ as $$Pagination } from '../../chunks/Pagination_BAK1zqoq.mjs';
import 'js-cookie';
import { F as Formatter } from '../../chunks/formatter_COXD278a.mjs';
import { $ as $$ProductImage } from '../../chunks/ProductImage_DMsIu7hr.mjs';
export { renderers } from '../../renderers.mjs';

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const prerender = false;
const $$Dashboard = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Dashboard;
  const searchParams = Astro2.url.searchParams;
  const pageParam = Number(searchParams.get("page") ?? 1);
  const { data, error } = await Astro2.callAction(actions.getProductByPage, {
    page: pageParam
  });
  if (error) {
    return Astro2.redirect("/");
  }
  const { products, totalPages } = data;
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": " Admin dashboard" }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<h1>Dashboard</h1> <p>Product list</p> <div class="flex justify-end"> <a href="/admin/products/new" class="bg-blue-500 text-center text-slate-100 rounded-lg p-2 hover:bg-blue-700 transition-all">Create new product</a> </div> <table class="w-full mt-3"> <thead> <tr> <th>Image</th> <th>Name</th> <th>Price</th> <th>Stock</th> </tr> </thead> <tbody> ${products.map((product) => renderTemplate`<tr>  <td class="text-center border"> ${renderComponent($$result2, "ProductImage", $$ProductImage, { "src": product.images.split(",")[0], "alt": product.title, "className": "w-16 h-16" })} </td> <td class="border p-2"> <a class="hover:underline"${addAttribute(`/admin/products/${product.slug}`, "href")}> ${product.title} </a> </td> <td class="text-center border"> ${Formatter.currency(product.price)} </td> <td class="text-center border">${product.stock}</td> </tr>`)} </tbody> </table> ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages })} ` })}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/dashboard.astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/dashboard.astro";
const $$url = "/admin/dashboard";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Dashboard,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
