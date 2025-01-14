/* empty css                                     */
import { f as createAstro, g as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { a as actions } from '../chunks/_astro_actions_POsePjrc.mjs';
import { $ as $$Layout } from '../chunks/Layout_CYsLghR_.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import 'js-cookie';
import { useState } from 'react';
import { $ as $$Pagination } from '../chunks/Pagination_BAK1zqoq.mjs';
export { renderers } from '../renderers.mjs';

const ProductCard = ({ product }) => {
  const images = product.images.split(",").map((image) => {
    return image.startsWith("http") ? image : `${"http://localhost:4321"}/images/products/${image}`;
  });
  const [currentImage, setCurrentImage] = useState(images[0]);
  return /* @__PURE__ */ jsxs("a", { href: `/products/${product.slug}`, children: [
    /* @__PURE__ */ jsx(
      "img",
      {
        src: currentImage,
        alt: product.title,
        className: "h-80 object-contain rounded-lg",
        onMouseOver: () => setCurrentImage(images[1] ?? images[0]),
        onMouseLeave: () => setCurrentImage(images[0])
      }
    ),
    /* @__PURE__ */ jsx("h3", { children: product.title }),
    /* @__PURE__ */ jsxs("p", { children: [
      "$",
      product.price
    ] })
  ] });
};

const ProductList = ({ products }) => {
  return /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 place-items-center", children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id)) });
};

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const prerender = false;
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const searchParams = Astro2.url.searchParams;
  const pageParam = Number(searchParams.get("page") ?? 1);
  const { data, error } = await Astro2.callAction(actions.getProductByPage, {
    page: pageParam
  });
  if (error) {
    return Astro2.redirect("/");
  }
  const { products, totalPages } = data;
  if (data.products.length === 0) {
    return Astro2.redirect(`/?page=${totalPages}`);
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="container pt-10 pb-10"> <h1 class="text-3xl font-bold mb-5">Astro store</h1> ${renderComponent($$result2, "ProductList", ProductList, { "products": products, "client:idle": true, "client:component-hydration": "idle", "client:component-path": "@/components", "client:component-export": "ProductList" })} ${renderComponent($$result2, "Pagination", $$Pagination, { "totalPages": totalPages })} </div> ` })}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/index.astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
