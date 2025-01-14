/* empty css                                     */
import { g as createComponent, r as renderTemplate, k as renderComponent, m as maybeRenderHead } from '../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_CNRUd_IR.mjs';
/* empty css                               */
export { renderers } from '../renderers.mjs';

const prerender = false;
const $$404 = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, { "title": "Error page", "data-astro-cid-zetdm5md": true }, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div data-astro-cid-zetdm5md> <img src="https://i.ibb.co/W6tgcKQ/softcodeon.gif" data-astro-cid-zetdm5md> <h1 class="error-text" data-astro-cid-zetdm5md>
Whoops, We can't seem to find the resource you're looking for.
</h1> <p class="text" data-astro-cid-zetdm5md>
Please check that the Web site address is spelled correctly.Or,
</p> <div class="btn1" data-astro-cid-zetdm5md> <a class="error" href="/" data-astro-cid-zetdm5md>Go to Homepage</a> </div> </div>  ` })}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/404.astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/404.astro";
const $$url = "/404";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$404,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
