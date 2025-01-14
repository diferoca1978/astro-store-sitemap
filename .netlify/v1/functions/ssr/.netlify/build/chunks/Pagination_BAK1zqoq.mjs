import { f as createAstro, g as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const $$Pagination = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Pagination;
  const { totalPages } = Astro2.props;
  const url = Astro2.url;
  const pageParam = Number(url.searchParams.get("page") ?? 1);
  const currentPage = Math.max(
    pageParam > totalPages ? totalPages : pageParam,
    1
  );
  const path = url.pathname;
  return renderTemplate`${maybeRenderHead()}<div class="flex justify-between my-28"> <a${addAttribute(`${path}?page=${Math.max(currentPage - 1, 1)}`, "href")} class="bg-slate-900/90 text-slate-100 px-4 py-2 rounded-lg">
Previous
</a> <span>page ${pageParam} of ${totalPages}</span> <a${addAttribute(`${path}?page=${Math.min(currentPage + 1, totalPages)}`, "href")} class="bg-slate-900/90 text-slate-100 px-4 py-2 rounded-lg">
Next
</a> </div>`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/Pagination.astro", void 0);

export { $$Pagination as $ };
