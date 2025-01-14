import { f as createAstro, g as createComponent, r as renderTemplate, i as addAttribute, l as renderScript, m as maybeRenderHead, k as renderComponent, o as createTransitionScope, p as renderHead, q as renderSlot } from './astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import 'clsx';
/* empty css                             */
import { $ as $$Icon } from './Icon_CiSoxhat.mjs';
import { jsx, Fragment, jsxs } from 'react/jsx-runtime';
import { atom } from 'nanostores';
import Cookies from 'js-cookie';
import { useStore } from '@nanostores/react';
import { useEffect } from 'react';

const $$Astro$3 = createAstro("https://sitemap-astro-store.netlify.app/");
const $$ClientRouter = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$ClientRouter;
  const { fallback = "animate" } = Astro2.props;
  return renderTemplate`<meta name="astro-view-transitions-enabled" content="true"><meta name="astro-view-transitions-fallback"${addAttribute(fallback, "content")}>${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro/components/ClientRouter.astro", void 0);

const itemsInCart = atom(0);

class CartCookiesClient {
  static getCart() {
    const cart = JSON.parse(Cookies.get("cart") ?? "[]");
    return cart;
  }
  static addItem(cartItem) {
    const cart = CartCookiesClient.getCart();
    const itemInCar = cart.find(
      (item) => item.productId === cartItem.productId && item.size === cartItem.size
    );
    if (itemInCar) {
      itemInCar.quantity += cartItem.quantity;
    } else {
      cart.push(cartItem);
    }
    Cookies.set("cart", JSON.stringify(cart));
    return cart;
  }
  static removeItem(productId, size) {
    const cart = CartCookiesClient.getCart();
    const updatedCart = cart.filter(
      (item) => !(item.productId === productId && item.size === size)
    );
    Cookies.set("cart", JSON.stringify(updatedCart));
    return updatedCart;
  }
}

const CartCounter = () => {
  const $itemsInCart = useStore(itemsInCart);
  useEffect(() => {
    const cart = CartCookiesClient.getCart();
    itemsInCart.set(cart.length);
  }, []);
  return /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsxs("a", { href: "/cart", className: "relative inline-block", children: [
    $itemsInCart > 0 && /* @__PURE__ */ jsx("span", { className: "absolute -top-2 left-3 flex justify-center bg-sky-700 items-center text-white rounded-full w-5 h-5 ", children: $itemsInCart }),
    /* @__PURE__ */ jsx("svg", { xmlns: "http://www.w3.org/2000/svg", width: 26, height: 26, viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { fill: "#E5E5E5", d: "M17 18a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63l-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2a2 2 0 0 1-2 2a2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7l2.78-5H6.14l2.36 5z" }) })
  ] }) });
};

const $$Astro$2 = createAstro("https://sitemap-astro-store.netlify.app/");
const $$FloatNavBar = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$FloatNavBar;
  const { isLoggedIn, isAdmin } = Astro2.locals;
  return renderTemplate`<!-- ========== HEADER ========== -->${maybeRenderHead()}<header class="sticky top-4 inset-x-0 flex flex-wrap md:justify-start md:flex-nowrap z-50 w-full text-sm"> <nav class="relative mx-2 w-full rounded-[36px] bg-slate-900 border border-yellow-100/40 bg-yellow-50/60 px-4 py-3 backdrop-blur-md dark:border-neutral-700/40 dark:bg-slate-900/90 dark:backdrop-blur-md md:flex md:items-center md:justify-between md:px-6 md:py-0 lg:px-8 xl:max-xl" aria-label="Global"> <div class="px-4 md:px-0 flex justify-between items-center"> <!-- Logo --> <div class="flex items-center justify-center"> <a class="text-xl md:text-2xl" href="/" aria-label="Preline"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo" })} </a> </div> <!-- End Logo --> <div class="md:hidden"> <!-- Toggle Button --> <button type="button" class="hs-collapse-toggle flex justify-center items-center size-6 border border-gray-200 text-gray-500 rounded-full hover:bg-gray-200 focus:outline-none focus:bg-gray-200 dark:border-neutral-700 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:focus:bg-neutral-700" id="hs-navbar-header-floating-collapse" aria-expanded="false" aria-controls="hs-navbar-header-floating" aria-label="Toggle navigation" data-hs-collapse="#hs-navbar-header-floating"> <svg class="hs-collapse-open:hidden shrink-0 size-5" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="3" x2="21" y1="6" y2="6"></line><line x1="3" x2="21" y1="12" y2="12"></line><line x1="3" x2="21" y1="18" y2="18"></line></svg> <svg class="hs-collapse-open:block hidden shrink-0 size-6" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> </button> <!-- End Toggle Button --> </div> </div> <div id="hs-navbar-header-floating" class="hidden hs-collapse overflow-hidden transition-all duration-300 basis-full grow md:block" aria-labelledby="hs-navbar-header-floating-collapse"> <div class="flex flex-col md:flex-row md:items-center md:justify-end gap-2 md:gap-3 mt-3 md:mt-0 py-2 md:py-0 md:ps-7"> ${renderComponent($$result, "CartCounter", CartCounter, { "client:load": true, "client:component-hydration": "load", "client:component-path": "@/components", "client:component-export": "CartCounter", "data-astro-transition-persist": createTransitionScope($$result, "yjo3zksq") })} <a class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-gray-800 font-medium text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="/" aria-current="page">Home</a> <a class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="/">Products</a> ${isAdmin && renderTemplate`<a class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="/admin/dashboard">
Admin
</a>`} ${!isLoggedIn ? renderTemplate`<a class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" href="/login">
Sign In
</a>` : renderTemplate`<a class="py-0.5 md:py-3 px-4 md:px-1 border-s-2 md:border-s-0 md:border-b-2 border-transparent text-gray-500 hover:text-gray-800 focus:outline-none dark:text-neutral-400 dark:hover:text-neutral-200" id="logout" href="#">
Log Out
</a>`} </div> </div> </nav> </header> <!-- ========== END HEADER ========== --> ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/FloatNavBar.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/FloatNavBar.astro", "self");

const $$Astro$1 = createAstro("https://sitemap-astro-store.netlify.app/");
const $$Footer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$Footer;
  return renderTemplate`${maybeRenderHead()}<footer class="w-full items-center bg-slate-900 py-5 px-4"> <!-- Content --> <div class="flex flex-col justify-center items-center"> <!-- Logo & brand --> <div> <a href="/" class="flex flex-col justify-center items-center"> ${renderComponent($$result, "Icon", $$Icon, { "name": "logo", "class": "h-6 w-6" })} <span class="text-2xl font-semibold whitespace-nowrap dark:text-slate-100">Store</span> </a> </div> <!-- Link --> <div> <h3 class="dark:text-slate-100">
We're part of the <span class="text-sky-600 hover:underline cursor-pointer">Astro</span> family
</h3> </div> <!-- Social  --> <div class="flex justify-center items-center space-x-4 mt-4"> <a href="#"> ${renderComponent($$result, "Icon", $$Icon, { "name": "instagram", "class": "w-6 h-6 dark:text-slate-100 hover:text-slate-400" })} </a> <a href="#"> ${renderComponent($$result, "Icon", $$Icon, { "name": "facebook", "class": "w-6 h-6 dark:text-slate-100 hover:text-slate-400" })} </a> <a href="#"> ${renderComponent($$result, "Icon", $$Icon, { "name": "x-twitter", "class": "w-5 h-5 dark:text-slate-100 hover:text-slate-400" })} </a> </div> </div> <span class="text-xs dark:text-slate-500">@ 2024 Personal Labs.</span> </footer>`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/Footer.astro", void 0);

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  const { title } = Astro2.props;
  return renderTemplate`<html lang="en"> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="sitemap" href="/sitemap-index.xml"><link rel="icon" type="image/svg+xml" href="/favicon.svg"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>${title}</title>${renderComponent($$result, "ClientRouter", $$ClientRouter, {})}${renderHead()}</head> <body> <!-- <NavBar2 /> --> ${renderComponent($$result, "FloatNavBar", $$FloatNavBar, {})} <main class="min-h-screen max-w-6xl m-auto px-4 mt-10"> ${renderSlot($$result, $$slots["default"])} </main> ${renderComponent($$result, "Footer", $$Footer, {})} ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts")}</body></html>`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
