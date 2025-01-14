import '@astrojs/internal-helpers/path';
import 'cookie';
import 'kleur/colors';
import './chunks/shared_C-C9DgmR.mjs';
import 'es-module-lexer';
import { v as NOOP_MIDDLEWARE_HEADER, w as decodeKey } from './chunks/astro/server_G_32Yixg.mjs';
import 'clsx';
import 'html-escaper';

const NOOP_MIDDLEWARE_FN = async (_ctx, next) => {
  const response = await next();
  response.headers.set(NOOP_MIDDLEWARE_HEADER, "true");
  return response;
};

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/diego/Astro-Projects/astro-store-sitemap/","adapterName":"@astrojs/netlify","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"robots.txt","links":[],"scripts":[],"styles":[],"routeData":{"route":"/robots.txt","isIndex":false,"type":"endpoint","pattern":"^\\/robots\\.txt\\/?$","segments":[[{"content":"robots.txt","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/robots.txt.ts","pathname":"/robots.txt","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_actions/[...path]","pattern":"^\\/_actions(?:\\/(.*?))?$","segments":[[{"content":"_actions","dynamic":false,"spread":false}],[{"content":"...path","dynamic":true,"spread":true}]],"params":["...path"],"component":"node_modules/astro/dist/actions/runtime/route.js","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"inline","content":"[data-astro-cid-zetdm5md]{padding:0;margin:0;background:#f0f0f0}img[data-astro-cid-zetdm5md]{display:block;margin-left:auto;margin-right:auto}.btn1[data-astro-cid-zetdm5md]{text-align:center}.text[data-astro-cid-zetdm5md]{text-align:center;font-size:20px;margin-bottom:40px}.error-text[data-astro-cid-zetdm5md]{text-align:center;padding:20px;font-family:Cursive}.error[data-astro-cid-zetdm5md]{font-family:Roboto,sans-serif;font-size:1.5rem;text-decoration:none;padding:15px;background:#0e84f3;color:#fff;border-radius:10px}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/404","isIndex":false,"type":"page","pattern":"^\\/404\\/?$","segments":[[{"content":"404","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/404.astro","pathname":"/404","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/admin/dashboard","isIndex":false,"type":"page","pattern":"^\\/admin\\/dashboard\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"dashboard","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin/dashboard.astro","pathname":"/admin/dashboard","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"external","src":"/_astro/_slug_.BJqWAetO.css"},{"type":"inline","content":".btn-size[data-astro-cid-w7mueznz],.btn-delete-image[data-astro-cid-w7mueznz]{margin-right:1rem;height:2.5rem;width:2.5rem;cursor:pointer;border-radius:.25rem;border-width:1px;--tw-border-opacity: 1;border-color:rgb(209 213 219 / var(--tw-border-opacity, 1));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}.btn-size[data-astro-cid-w7mueznz]:hover,.btn-delete-image[data-astro-cid-w7mueznz]:hover{--tw-bg-opacity: 1;background-color:rgb(147 197 253 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}.active[data-astro-cid-w7mueznz]{--tw-bg-opacity: 1;background-color:rgb(59 130 246 / var(--tw-bg-opacity, 1));--tw-text-opacity: 1;color:rgb(255 255 255 / var(--tw-text-opacity, 1))}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/admin/products/[...slug]","isIndex":false,"type":"page","pattern":"^\\/admin\\/products(?:\\/(.*?))?\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}],[{"content":"products","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/admin/products/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/api/auth/[...auth]","pattern":"^\\/api\\/auth(?:\\/(.*?))?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"auth","dynamic":false,"spread":false}],[{"content":"...auth","dynamic":true,"spread":true}]],"params":["...auth"],"component":"node_modules/auth-astro/src/api/[...auth].ts","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"external","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/cart","isIndex":true,"type":"page","pattern":"^\\/cart\\/?$","segments":[[{"content":"cart","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/cart/index.astro","pathname":"/cart","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"external","src":"/_astro/_slug_.BJqWAetO.css"},{"type":"inline","content":"input[data-astro-cid-uq5bhyez][type=number]::-webkit-inner-spin-button,input[data-astro-cid-uq5bhyez][type=number]::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.selected-size[data-astro-cid-uq5bhyez]{border-radius:9999px;border-width:1px;--tw-border-opacity: 1;border-color:rgb(3 105 161 / var(--tw-border-opacity, 1));padding:.25rem;--tw-text-opacity: 1;color:rgb(3 105 161 / var(--tw-text-opacity, 1));transition-property:all;transition-timing-function:cubic-bezier(.4,0,.2,1);transition-duration:.15s}\n.astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/products/[...slug]","isIndex":false,"type":"page","pattern":"^\\/products(?:\\/(.*?))?\\/?$","segments":[[{"content":"products","dynamic":false,"spread":false}],[{"content":"...slug","dynamic":true,"spread":true}]],"params":["...slug"],"component":"src/pages/products/[...slug].astro","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"}],"routeData":{"route":"/register","isIndex":false,"type":"page","pattern":"^\\/register\\/?$","segments":[[{"content":"register","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/register.astro","pathname":"/register","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/dashboard.DKKPLXdt.css"},{"type":"inline","content":".astro-route-announcer{position:absolute;left:0;top:0;clip:rect(0 0 0 0);clip-path:inset(50%);overflow:hidden;white-space:nowrap;width:1px;height:1px}@keyframes astroFadeInOut{0%{opacity:1}to{opacity:0}}@keyframes astroFadeIn{0%{opacity:0;mix-blend-mode:plus-lighter}to{opacity:1;mix-blend-mode:plus-lighter}}@keyframes astroFadeOut{0%{opacity:1;mix-blend-mode:plus-lighter}to{opacity:0;mix-blend-mode:plus-lighter}}@keyframes astroSlideFromRight{0%{transform:translate(100%)}}@keyframes astroSlideFromLeft{0%{transform:translate(-100%)}}@keyframes astroSlideToRight{to{transform:translate(100%)}}@keyframes astroSlideToLeft{to{transform:translate(-100%)}}@media (prefers-reduced-motion){::view-transition-group(*),::view-transition-old(*),::view-transition-new(*){animation:none!important}[data-astro-transition-scope]{animation:none!important}}html,body{background-color:#f9f9f9}h1{font-size:1.875rem;line-height:2.25rem;font-weight:700}h2{font-size:1.5rem;line-height:2rem}h3{font-size:1.25rem;line-height:1.75rem}h4{font-size:1.125rem;line-height:1.75rem;font-weight:700}h5{font-size:1rem;line-height:1.5rem}\n"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"site":"https://sitemap-astro-store.netlify.app/","base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/FloatNavBar.astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/layouts/Layout.astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/404.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/404@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/dashboard.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/admin/dashboard@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/products/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/admin/products/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/cart/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/cart/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/index@_@astro",{"propagation":"in-tree","containsHead":false}],["/home/diego/Astro-Projects/astro-store-sitemap/src/pages/products/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/products/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000astro-internal:middleware":"_astro-internal_middleware.mjs","\u0000@astro-page:node_modules/astro/dist/actions/runtime/route@_@js":"pages/_actions/_---path_.astro.mjs","\u0000@astro-page:src/pages/404@_@astro":"pages/404.astro.mjs","\u0000@astro-page:src/pages/admin/dashboard@_@astro":"pages/admin/dashboard.astro.mjs","\u0000@astro-page:src/pages/admin/products/[...slug]@_@astro":"pages/admin/products/_---slug_.astro.mjs","\u0000@astro-page:node_modules/auth-astro/src/api/[...auth]@_@ts":"pages/api/auth/_---auth_.astro.mjs","\u0000@astro-page:src/pages/cart/index@_@astro":"pages/cart.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/products/[...slug]@_@astro":"pages/products/_---slug_.astro.mjs","\u0000@astro-page:src/pages/register@_@astro":"pages/register.astro.mjs","\u0000@astro-page:src/pages/robots.txt@_@ts":"pages/robots.txt.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_46xaK3IH.mjs","/home/diego/Astro-Projects/astro-store-sitemap/node_modules/@astrojs/react/vnode-children.js":"chunks/vnode-children_BkR_XoPb.mjs","\u0000astro:internal-actions":"chunks/_astro_internal-actions_rkIDCjX7.mjs","/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_woi27FfH.mjs","/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro/dist/actions/runtime/virtual/get-action.js":"chunks/get-action_BtjUn6Cd.mjs","@/components":"_astro/components.vwKSjt1t.js","@astrojs/react/client.js":"_astro/client.BA2GgrTr.js","/home/diego/Astro-Projects/astro-store-sitemap/src/pages/cart/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.m46o5AGW.js","/home/diego/Astro-Projects/astro-store-sitemap/src/pages/admin/products/[...slug].astro?astro&type=script&index=0&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_0_lang.DCdLRjFQ.js","/home/diego/Astro-Projects/astro-store-sitemap/src/pages/products/[...slug].astro?astro&type=script&index=0&lang.ts":"_astro/_...slug_.astro_astro_type_script_index_0_lang.D_rfjuKT.js","/home/diego/Astro-Projects/astro-store-sitemap/src/components/forms/SignUp.astro?astro&type=script&index=0&lang.ts":"_astro/SignUp.astro_astro_type_script_index_0_lang.BAiF35gO.js","/home/diego/Astro-Projects/astro-store-sitemap/src/components/forms/SignIn.astro?astro&type=script&index=0&lang.ts":"_astro/SignIn.astro_astro_type_script_index_0_lang.DS1Q5BsZ.js","/home/diego/Astro-Projects/astro-store-sitemap/src/layouts/Layout.astro?astro&type=script&index=0&lang.ts":"_astro/Layout.astro_astro_type_script_index_0_lang.BtT675nX.js","/home/diego/Astro-Projects/astro-store-sitemap/src/components/products/ProductSlideShow.astro?astro&type=script&index=0&lang.ts":"_astro/ProductSlideShow.astro_astro_type_script_index_0_lang.BW4vbJey.js","/home/diego/Astro-Projects/astro-store-sitemap/src/components/shared/FloatNavBar.astro?astro&type=script&index=0&lang.ts":"_astro/FloatNavBar.astro_astro_type_script_index_0_lang.BMx6exxz.js","/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro/components/ClientRouter.astro?astro&type=script&index=0&lang.ts":"_astro/ClientRouter.astro_astro_type_script_index_0_lang.WONxKOw9.js","/home/diego/Astro-Projects/astro-store-sitemap/node_modules/auth-astro/client.ts":"_astro/client.j6srgnMd.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[],"assets":["/_astro/_slug_.BJqWAetO.css","/_astro/dashboard.DKKPLXdt.css","/favicon.svg","/_astro/ClientRouter.astro_astro_type_script_index_0_lang.WONxKOw9.js","/_astro/FloatNavBar.astro_astro_type_script_index_0_lang.BMx6exxz.js","/_astro/Layout.astro_astro_type_script_index_0_lang.BtT675nX.js","/_astro/ProductSlideShow.astro_astro_type_script_index_0_lang.BW4vbJey.js","/_astro/SignIn.astro_astro_type_script_index_0_lang.DS1Q5BsZ.js","/_astro/SignUp.astro_astro_type_script_index_0_lang.BAiF35gO.js","/_astro/_...slug_.astro_astro_type_script_index_0_lang.DCdLRjFQ.js","/_astro/_...slug_.astro_astro_type_script_index_0_lang.D_rfjuKT.js","/_astro/_astro_actions.C6AbARC8.js","/_astro/cart-cookies.CUrYutEz.js","/_astro/client.BA2GgrTr.js","/_astro/client.j6srgnMd.js","/_astro/components.vwKSjt1t.js","/_astro/index.Dy6lLLXr.js","/_astro/index.astro_astro_type_script_index_0_lang.m46o5AGW.js","/_astro/router.B-sij-_X.js","/_astro/sweetalert2.esm.all.BkU8I-GU.js","/images/products/100042301_0_2000.jpg","/images/products/100042301_alt.jpg","/images/products/100042307_0_2000.jpg","/images/products/100042307_1_2000.jpg","/images/products/100042307_alt.jpg","/images/products/100042307_alt_2000.jpg","/images/products/1473809-00-A_1_2000.jpg","/images/products/1473809-00-A_alt.jpg","/images/products/1473814-00-A_1_2000.jpg","/images/products/1473814-00-A_alt.jpg","/images/products/1473819-00-A_1_2000.jpg","/images/products/1473819-00-A_alt.jpg","/images/products/1473824-00-A_2_2000.jpg","/images/products/1473829-00-A_2_2000.jpg","/images/products/1473834-00-A_2_2000.jpg","/images/products/1506211-00-A_0_2000.jpg","/images/products/1506211-00-A_1_2000.jpg","/images/products/1549268-00-A_0_2000.jpg","/images/products/1549268-00-A_2.jpg","/images/products/1549275-00-A_0_2000.jpg","/images/products/1549275-00-A_1.jpg","/images/products/1623735-00-A_0_2000.jpg","/images/products/1623735-00-A_1.jpg","/images/products/1623736-00-A_0_2000.jpg","/images/products/1623736-00-A_1.jpg","/images/products/1623739-00-A_0_2000.jpg","/images/products/1623739-00-A_1.jpg","/images/products/1633802-00-A_0_2000.jpg","/images/products/1633802-00-A_2.jpg","/images/products/1657891-00-A_0_2000.jpg","/images/products/1657891-00-A_1.jpg","/images/products/1657914-00-A_0_2000.jpg","/images/products/1657914-00-A_1.jpg","/images/products/1657915-00-A_0_2000.jpg","/images/products/1657915-00-A_1.jpg","/images/products/1657916-00-A_0_2000.jpg","/images/products/1657916-00-A_1.jpg","/images/products/1657921-00-A_0_2000.jpg","/images/products/1657921-00-A_1.jpg","/images/products/1657931-00-A_0_2000.jpg","/images/products/1657931-00-A_1.jpg","/images/products/1657932-00-A_0_2000.jpg","/images/products/1657932-00-A_1.jpg","/images/products/1657933-00-A_0_2000.jpg","/images/products/1657933-00-A_1.jpg","/images/products/1693862-00-A_0_2000.jpg","/images/products/1693862-00-A_1.jpg","/images/products/1693862-03-A_0_2000.jpg","/images/products/1693862-03-A_1.jpg","/images/products/1693867-00-A_0_2000.jpg","/images/products/1693867-00-A_1.jpg","/images/products/1693867-02-A_0_2000.jpg","/images/products/1693867-02-A_1.jpg","/images/products/1700280-00-A_0_2000.jpg","/images/products/1700280-00-A_1.jpg","/images/products/1703767-00-A_0_2000.jpg","/images/products/1703767-00-A_1.jpg","/images/products/1715672-00-A_featured.jpg","/images/products/1740051-00-A_0_2000.jpg","/images/products/1740051-00-A_1.jpg","/images/products/1740113-00-A_0_2000.jpg","/images/products/1740113-00-A_1.jpg","/images/products/1740121-00-A_0_2000.jpg","/images/products/1740121-00-A_1.jpg","/images/products/1740140-00-A_0_2000.jpg","/images/products/1740140-00-A_1.jpg","/images/products/1740145-00-A_1.jpg","/images/products/1740145-00-A_2_2000.jpg","/images/products/1740176-00-A_0_2000.jpg","/images/products/1740176-00-A_1.jpg","/images/products/1740211-00-A_0_2000.jpg","/images/products/1740211-00-A_1.jpg","/images/products/1740216-00-A_0_2000.jpg","/images/products/1740216-00-A_1.jpg","/images/products/1740221-00-A_0_2000.jpg","/images/products/1740221-00-A_1.jpg","/images/products/1740226-00-A_0_2000.jpg","/images/products/1740226-00-A_1.jpg","/images/products/1740231-00-A_0_2000.jpg","/images/products/1740231-00-A_1.jpg","/images/products/1740236-00-A_0_2000.jpg","/images/products/1740236-00-A_1.jpg","/images/products/1740245-00-A_0_2000.jpg","/images/products/1740245-00-A_1.jpg","/images/products/1740250-00-A_0_2000.jpg","/images/products/1740250-00-A_1.jpg","/images/products/1740255-00-A_0_2000.jpg","/images/products/1740255-00-A_1.jpg","/images/products/1740260-00-A_0_2000.jpg","/images/products/1740260-00-A_1.jpg","/images/products/1740270-00-A_0_2000.jpg","/images/products/1740270-00-A_1.jpg","/images/products/1740275-00-A_0_2000.jpg","/images/products/1740275-00-A_1.jpg","/images/products/1740280-00-A_0_2000.jpg","/images/products/1740280-00-A_1.jpg","/images/products/1740285-00-A_0_2000.jpg","/images/products/1740285-00-A_1.jpg","/images/products/1740290-00-A_0_2000.jpg","/images/products/1740290-00-A_1.jpg","/images/products/1740406-00-A_0_2000.jpg","/images/products/1740406-00-A_1.jpg","/images/products/1740407-00-A_0_2000.jpg","/images/products/1740407-00-A_1.jpg","/images/products/1740408-00-A_0_2000.jpg","/images/products/1740408-00-A_1.jpg","/images/products/1740409-00-A_0_2000.jpg","/images/products/1740409-00-A_1.jpg","/images/products/1740410-00-A_0_2000.jpg","/images/products/1740410-00-A_1.jpg","/images/products/1740411-00-A_0_2000.jpg","/images/products/1740411-00-A_1.jpg","/images/products/1740413-00-A_0_2000.jpg","/images/products/1740413-00-A_1.jpg","/images/products/1740414-00-A_0_2000.jpg","/images/products/1740414-00-A_1.jpg","/images/products/1740416-00-A_0_2000.jpg","/images/products/1740416-00-A_1.jpg","/images/products/1740417-00-A_0_2000.jpg","/images/products/1740417-00-A_1.jpg","/images/products/1740507-00-A_0_2000.jpg","/images/products/1740507-00-A_1.jpg","/images/products/1740514-00-A_0_2000.jpg","/images/products/1740514-00-A_1.jpg","/images/products/1740521-00-A_0_2000.jpg","/images/products/1740521-00-A_1.jpg","/images/products/1740528-00-A_0_2000.jpg","/images/products/1740528-00-A_1.jpg","/images/products/1740535-00-A_0_2000.jpg","/images/products/1740535-00-A_1.jpg","/images/products/1741111-00-A_0_2000.jpg","/images/products/1741111-00-A_1.jpg","/images/products/1741416-00-A_0_2000.jpg","/images/products/1741416-00-A_1.jpg","/images/products/1741425-00-A_0_2000.jpg","/images/products/1741425-00-A_1.jpg","/images/products/1741441-00-A_0_2000.jpg","/images/products/1741441-00-A_1.jpg","/images/products/1741449-00-A_0_2000.jpg","/images/products/1741449-00-A_1.jpg","/images/products/1741611-00-A_1_2000.jpg","/images/products/1741613-00-A_1_2000.jpg","/images/products/1741615-00-A_1_2000.jpg","/images/products/1741617-00-A_1_2000.jpg","/images/products/1741619-00-A_1_2000.jpg","/images/products/1741621-00-A_1_2000.jpg","/images/products/1742694-00-A_1_2000.jpg","/images/products/1742694-00-A_3.jpg","/images/products/1742702-00-A_0_2000.jpg","/images/products/1742702-00-A_1.jpg","/images/products/5645680-00-A_0_2000.jpg","/images/products/5645680-00-A_3.jpg","/images/products/5645685-00-A_0_2000.jpg","/images/products/5645685-00-A_3.jpg","/images/products/7652410-00-A_0.jpg","/images/products/7652410-00-A_1_2000.jpg","/images/products/7652421-00-A_0_2000.jpg","/images/products/7652421-00-A_1.jpg","/images/products/7652426-00-A_0_2000.jpg","/images/products/7652426-00-A_1.jpg","/images/products/7652432-00-A_0_2000.jpg","/images/products/7652432-00-A_1.jpg","/images/products/7652453-00-A_0_2000.jpg","/images/products/7652453-00-A_1.jpg","/images/products/7652459-00-A_0_2000.jpg","/images/products/7652459-00-A_1.jpg","/images/products/7652465-00-A_0_2000.jpg","/images/products/7652465-00-A_1.jpg","/images/products/7654393-00-A_2_2000.jpg","/images/products/7654393-00-A_3.jpg","/images/products/7654399-00-A_0_2000.jpg","/images/products/7654399-00-A_1.jpg","/images/products/7654420-00-A_0_2000.jpg","/images/products/7654420-00-A_1_2000.jpg","/images/products/8528833-00-A_0_2000.jpg","/images/products/8528833-00-A_2.jpg","/images/products/8528839-00-A_0_2000.jpg","/images/products/8528839-00-A_2.jpg","/images/products/8528845-00-A_0_2000.jpg","/images/products/8528845-00-A_2.jpg","/images/products/8529100-00-A_0_2000.jpg","/images/products/8529100-00-A_1.jpg","/images/products/8529107-00-A_0_2000.jpg","/images/products/8529107-00-A_1.jpg","/images/products/8529198-00-A_0_2000.jpg","/images/products/8529198-00-A_1.jpg","/images/products/8529205-00-A_0_2000.jpg","/images/products/8529205-00-A_1.jpg","/images/products/8529212-00-A_0_2000.jpg","/images/products/8529212-00-A_1.jpg","/images/products/8529312-00-A_0_2000.jpg","/images/products/8529312-00-A_1.jpg","/images/products/8529318-00-A_0_2000.jpg","/images/products/8529318-00-A_1.jpg","/images/products/8529336-00-A_0_2000.jpg","/images/products/8529336-00-A_1.jpg","/images/products/8529342-00-A_0_2000.jpg","/images/products/8529342-00-A_1.jpg","/images/products/8529348-00-A_0_2000.jpg","/images/products/8529348-00-A_1.jpg","/images/products/8529354-00-A_0_2000.jpg","/images/products/8529354-00-A_1.jpg","/images/products/8529360-00-A_0_2000.jpg","/images/products/8529360-00-A_1.jpg","/images/products/8529366-00-A_0_2000.jpg","/images/products/8529366-00-A_1.jpg","/images/products/8529382-00-A_0_2000.jpg","/images/products/8529382-00-A_1.jpg","/images/products/8529387-00-A_0_2000.jpg","/images/products/8529387-00-A_1.jpg","/images/products/8764600-00-A_0_2000.jpg","/images/products/8764600-00-A_2.jpg","/images/products/8764613-00-A_0_2000.jpg","/images/products/8764613-00-A_1.jpg","/images/products/8764727-00-A_0_2000.jpg","/images/products/8764727-00-A_1.jpg","/images/products/8764734-00-A_0_2000.jpg","/images/products/8764734-00-A_1.jpg","/images/products/8764741-00-A_0_2000.jpg","/images/products/8764741-00-A_2.jpg","/images/products/8764754-00-A_0_2000.jpg","/images/products/8764754-00-A_2.jpg","/images/products/8764760-00-A_0_2000.jpg","/images/products/8764760-00-A_1.jpg","/images/products/8764766-00-A_0_2000.jpg","/images/products/8764766-00-A_2.jpg","/images/products/8764792-00-A_0_2000.jpg","/images/products/8764792-00-A_1.jpg","/images/products/8764806-00-A_0_2000.jpg","/images/products/8764806-00-A_1.jpg","/images/products/8764813-00-A_0_2000.jpg","/images/products/8764813-00-A_1.jpg","/images/products/8765085-00-A_0_2000.jpg","/images/products/8765085-00-A_1.jpg","/images/products/8765090-00-A_0_2000.jpg","/images/products/8765090-00-A_1.jpg","/images/products/8765095-00-A_0_2000.jpg","/images/products/8765095-00-A_1.jpg","/images/products/8765100-00-A_0_2000.jpg","/images/products/8765100-00-A_1.jpg","/images/products/8765105-00-A_0_2000.jpg","/images/products/8765105-00-A_1.jpg","/images/products/8765110-00-A_0_2000.jpg","/images/products/8765110-00-A_1.jpg","/images/products/8765115-00-A_0_2000.jpg","/images/products/8765115-00-A_1.jpg","/images/products/8765120-00-A_0_2000.jpg","/images/products/8765120-00-A_1.jpg","/images/products/8765125-00-A_0_2000.jpg","/images/products/8765125-00-A_1.jpg","/images/products/8765130-00-A_0_2000.jpg","/images/products/8765130-00-A_1.jpg","/images/products/9877034-00-A_0_2000.jpg","/images/products/9877034-00-A_2.jpg","/images/products/9877040-00-A_0_2000.jpg","/images/products/9877040-00-A_1.jpg","/images/products/no-image.png","/robots.txt"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"Niv5npJoBAMEgbZsUkEUYYtag+OqRAzJzMm4gG6Aogc="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };