import { f as createAstro, g as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute, l as renderScript } from './astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                          */

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const $$ProductSlideShow = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductSlideShow;
  const { images } = Astro2.props;
  const fullImage = images.map(
    (img) => img.startsWith("http") ? img : `${"http://localhost:4321"}/images/products/${img}`
  );
  return renderTemplate`${maybeRenderHead()}<div class="swiper mySwiper mt-10 col-span-1 sm:col-span-2" data-astro-cid-joyz6o6m> <!-- Additional required wrapper --> <div class="swiper-wrapper" data-astro-cid-joyz6o6m> <!-- Slides --> ${fullImage.map((image) => renderTemplate`<div class="swiper-slide" data-astro-cid-joyz6o6m> <img${addAttribute(image, "src")} alt="Product image" class="w-full h-auto px-10" data-astro-cid-joyz6o6m> </div>`)} </div> <!-- If we need pagination --> <div class="swiper-pagination" data-astro-cid-joyz6o6m></div> </div>  ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/products/ProductSlideShow.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/products/ProductSlideShow.astro", void 0);

export { $$ProductSlideShow as $ };
