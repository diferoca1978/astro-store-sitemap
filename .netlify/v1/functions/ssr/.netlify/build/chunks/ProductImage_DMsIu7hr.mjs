import { f as createAstro, g as createComponent, r as renderTemplate, m as maybeRenderHead, i as addAttribute } from './astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import 'clsx';

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const $$ProductImage = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$ProductImage;
  const { src, alt, className } = Astro2.props;
  const currentImage = src.startsWith("http") ? src : `/images/products/${src}`;
  return renderTemplate`${maybeRenderHead()}<img${addAttribute(currentImage, "src")}${addAttribute(alt, "alt")}${addAttribute([className], "class:list")}>`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/products/ProductImage.astro", void 0);

export { $$ProductImage as $ };
