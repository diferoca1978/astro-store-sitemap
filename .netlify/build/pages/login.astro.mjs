/* empty css                                     */
import { g as createComponent, r as renderTemplate, m as maybeRenderHead, k as renderComponent, l as renderScript } from '../chunks/astro/server_G_32Yixg.mjs';
import 'kleur/colors';
import { $ as $$Icon } from '../chunks/Icon_DNAGLm3o.mjs';
export { renderers } from '../renderers.mjs';

const $$SignIn = createComponent(async ($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<section class="h-screen flex justify-center items-center bg-gray-100 backdrop-blur-md dark:backdrop-blur-md"> <div class="w-full max-w-xs bg-white rounded-xl shadow-lg p-5 space-y-4 dark:bg-neutral-900 dark:border dark:border-gray-300"> <!-- Title / Sign in with google --> <div class="flex flex-col space-y-4"> <h1 class="text-3xl font-bold dark:text-white">Login</h1> <span class="text-sm text-gray-500 dark:text-gray-300">Don't have an account?
<a href="/register" class="text-sky-500 hover:underline">Sign up here</a> </span> <button type="button" id="btn-google" class="w-full flex justify-center items-center space-x-2 bg-gray-50 border border-gray-200 py-2 px-1 rounded-lg shadow-md hover:bg-gray-100 hover:border hover:border-gray-300 dark:bg-neutral-900 dark:text-gray-300 dark:border-gray-600 dark:hover:bg-neutral-800"> ${renderComponent($$result, "Icon", $$Icon, { "name": "google" })} <span>Sign in with Google</span> </button> </div> <!-- OR divider --> <div class="flex justify-center items-center space-x-4"> <hr class="flex-1 border-t border-gray-300"> <span class="text-gray-500 text-sm font-medium uppercase dark:text-gray-200">or</span> <hr class="flex-1 border-t border-gray-300"> </div> <!-- Form  --> <form class="flex flex-col space-y-4"> <!-- Form group --> <div class="flex flex-col space-y-1"> <label for="email" class="dark:text-gray-200">Email address</label> <input type="email" name="email" required class="w-full inline-flex justify-center placeholder:text-gray-300 border border-gray-200 rounded-md py-2 px-3 dark:text-gray-300 focus:dark:text-gray-300 focus:outline-none focus:border focus:border-sky-500 dark:bg-neutral-900 dark:border-gray-600"> </div> <div class="flex flex-col space-y-1"> <label for="password" class="dark:text-gray-200">Password</label> <input type="password" name="password" required class="w-full inline-flex justify-center placeholder:text-gray-300 border border-gray-200 rounded-md py-2 px-3 focus:dark:text-gray-300 focus:outline-none focus:border focus:border-sky-500 dark:bg-neutral-900 dark:border-gray-600 dark:text-gray-300"> </div> <!-- Checkbox --> <div> <div class="flex items-center"> <input id="remember-me" type="checkbox" class="shrink-0 border-gray-200 text-sky-600 focus:ring-sky-600 dark:bg-neutral-800 dark:focus:ring-offset-sky-50"> <span class="ms-3 text-sm dark:text-gray-200">Remember me</span> </div> </div> <div> <button type="submit" id="btn-submit" class="disabled w-full flex justify-center items-center space-x-2 bg-gray-50 border border-gray-200 py-2 px-1 rounded-lg shadow-md hover:bg-gray-100 hover:border hover:border-gray-300 dark:bg-neutral-900 dark:text-white dark:border-gray-600 dark:hover:bg-neutral-800"> <span class="font-medium">Sign in</span> </button> </div> </form> </div> </section> ${renderScript($$result, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/forms/SignIn.astro?astro&type=script&index=0&lang.ts")}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/components/forms/SignIn.astro", void 0);

const prerender = false;
const $$Login = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "SignIn", $$SignIn, {})}`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/login.astro", void 0);

const $$file = "/home/diego/Astro-Projects/astro-store-sitemap/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
