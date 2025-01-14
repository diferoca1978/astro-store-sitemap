import { f as createAstro, g as createComponent, r as renderTemplate, m as maybeRenderHead, s as spreadAttributes, i as addAttribute, k as renderComponent, u as unescapeHTML, n as Fragment } from './astro/server_G_32Yixg.mjs';
import { getIconData, iconToSVG } from '@iconify/utils';

const icons = {"local":{"prefix":"local","lastModified":1736866768,"icons":{"cart":{"body":"<path fill=\"currentColor\" d=\"M17 18a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2M1 2h3.27l.94 2H20a1 1 0 0 1 1 1c0 .17-.05.34-.12.5l-3.58 6.47c-.34.61-1 1.03-1.75 1.03H8.1l-.9 1.63-.03.12a.25.25 0 0 0 .25.25H19v2H7a2 2 0 0 1-2-2c0-.35.09-.68.24-.96l1.36-2.45L3 4H1zm6 16a2 2 0 0 1 2 2 2 2 0 0 1-2 2 2 2 0 0 1-2-2c0-1.11.89-2 2-2m9-7 2.78-5H6.14l2.36 5z\"/>"},"close":{"body":"<path fill=\"currentColor\" d=\"M19 6.41 17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z\"/>"},"facebook":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M13.135 6H15V3h-1.865a4.147 4.147 0 0 0-4.142 4.142V9H7v3h2v9.938h3V12h2.021l.592-3H12V6.591A.6.6 0 0 1 12.592 6z\" clip-rule=\"evenodd\"/>"},"google":{"body":"<path fill=\"#4285f4\" d=\"M255.878 133.451c0-10.734-.871-18.567-2.756-26.69H130.55v48.448h71.947c-1.45 12.04-9.283 30.172-26.69 42.356l-.244 1.622 38.755 30.023 2.685.268c24.659-22.774 38.875-56.282 38.875-96.027\"/><path fill=\"#34a853\" d=\"M130.55 261.1c35.248 0 64.839-11.605 86.453-31.622l-41.196-31.913c-11.024 7.688-25.82 13.055-45.257 13.055-34.523 0-63.824-22.773-74.269-54.25l-1.531.13-40.298 31.187-.527 1.465C35.393 231.798 79.49 261.1 130.55 261.1\"/><path fill=\"#fbbc05\" d=\"M56.281 156.37c-2.756-8.123-4.351-16.827-4.351-25.82 0-8.994 1.595-17.697 4.206-25.82l-.073-1.73L15.26 71.312l-1.335.635C5.077 89.644 0 109.517 0 130.55s5.077 40.905 13.925 58.602z\"/><path fill=\"#eb4335\" d=\"M130.55 50.479c24.514 0 41.05 10.589 50.479 19.438l36.844-35.974C195.245 12.91 165.798 0 130.55 0 79.49 0 35.393 29.301 13.925 71.947l42.211 32.783c10.59-31.477 39.891-54.251 74.414-54.251\"/>","width":256,"height":262},"instagram":{"body":"<path fill=\"currentColor\" fill-rule=\"evenodd\" d=\"M3 8a5 5 0 0 1 5-5h8a5 5 0 0 1 5 5v8a5 5 0 0 1-5 5H8a5 5 0 0 1-5-5zm5-3a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3h8a3 3 0 0 0 3-3V8a3 3 0 0 0-3-3zm7.597 2.214a1 1 0 0 1 1-1h.01a1 1 0 1 1 0 2h-.01a1 1 0 0 1-1-1M12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6m-5 3a5 5 0 1 1 10 0 5 5 0 0 1-10 0\" clip-rule=\"evenodd\"/>"},"logo":{"body":"<path fill=\"url(#a)\" d=\"M11.025 20.499c-.532 1.75-.154 4.184 1.105 5.331v-.042l.042-.112c.154-.741.756-1.203 1.526-1.175.713.014 1.12.392 1.217 1.217.042.308.042.616.056.938v.098c0 .7.196 1.371.588 1.959.35.56.84.993 1.497 1.287l-.028-.056-.028-.112c-.49-1.469-.14-2.49 1.147-3.358l.392-.266.868-.573a4.25 4.25 0 0 0 1.791-3.037c.07-.532 0-1.05-.154-1.553l-.21.14c-1.945 1.035-4.17 1.4-6.325.98-1.301-.197-2.56-.56-3.498-1.652z\"/><path fill=\"#fff\" d=\"M4.925 20.191s3.736-1.82 7.486-1.82l2.84-8.759c.098-.42.406-.7.756-.7s.644.28.756.714l2.826 8.746c4.45 0 7.487 1.82 7.487 1.82L20.709 2.84c-.168-.518-.49-.84-.896-.84h-7.612c-.406 0-.7.322-.896.84z\"/><defs><linearGradient id=\"a\" x1=\"8.19\" x2=\"16.91\" y1=\"23\" y2=\"18.89\" gradientTransform=\"translate(-.673 -2.198)scale(1.3993)\" gradientUnits=\"userSpaceOnUse\"><stop offset=\"0\" stop-color=\"#d83333\"/><stop offset=\"1\" stop-color=\"#f041ff\"/></linearGradient></defs>","width":32,"height":32},"menu":{"body":"<path fill=\"currentColor\" d=\"M3 6h18v2H3zm0 5h18v2H3zm0 5h18v2H3z\"/>"},"trash":{"body":"<path fill=\"#0EA5E9\" d=\"M19 4h-3.5l-1-1h-5l-1 1H5v2h14M6 19a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2V7H6z\"/>"},"x-twitter":{"body":"<path fill=\"currentColor\" d=\"M13.795 10.533 20.68 2h-3.073l-5.255 6.517L7.69 2H1l7.806 10.91L1.47 22h3.074l5.705-7.07L15.31 22H22zm-2.38 2.95L9.97 11.464 4.36 3.627h2.31l4.528 6.317 1.443 2.02 6.018 8.409h-2.31z\"/>"}},"width":24,"height":24}};

const cache = /* @__PURE__ */ new WeakMap();

const $$Astro = createAstro("https://sitemap-astro-store.netlify.app/");
const $$Icon = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Icon;
  class AstroIconError extends Error {
    constructor(message) {
      super(message);
      this.hint = "";
    }
  }
  const req = Astro2.request;
  const { name = "", title, desc, "is:inline": inline = false, ...props } = Astro2.props;
  const map = cache.get(req) ?? /* @__PURE__ */ new Map();
  const i = map.get(name) ?? 0;
  map.set(name, i + 1);
  cache.set(req, map);
  const includeSymbol = !inline && i === 0;
  let [setName, iconName] = name.split(":");
  if (!setName && iconName) {
    const err = new AstroIconError(`Invalid "name" provided!`);
    throw err;
  }
  if (!iconName) {
    iconName = setName;
    setName = "local";
    if (!icons[setName]) {
      const err = new AstroIconError('Unable to load the "local" icon set!');
      throw err;
    }
    if (!(iconName in icons[setName].icons)) {
      const err = new AstroIconError(`Unable to locate "${name}" icon!`);
      throw err;
    }
  }
  const collection = icons[setName];
  if (!collection) {
    const err = new AstroIconError(`Unable to locate the "${setName}" icon set!`);
    throw err;
  }
  const iconData = getIconData(collection, iconName ?? setName);
  if (!iconData) {
    const err = new AstroIconError(`Unable to locate "${name}" icon!`);
    throw err;
  }
  const id = `ai:${collection.prefix}:${iconName ?? setName}`;
  if (props.size) {
    props.width = props.size;
    props.height = props.size;
    delete props.size;
  }
  const renderData = iconToSVG(iconData);
  const normalizedProps = { ...renderData.attributes, ...props };
  const normalizedBody = renderData.body;
  const { viewBox } = normalizedProps;
  if (includeSymbol) {
    delete normalizedProps.viewBox;
  }
  return renderTemplate`${maybeRenderHead()}<svg${spreadAttributes(normalizedProps)}${addAttribute(name, "data-icon")}> ${title && renderTemplate`<title>${title}</title>`} ${desc && renderTemplate`<desc>${desc}</desc>`} ${inline ? renderTemplate`${renderComponent($$result, "Fragment", Fragment, { "id": id }, { "default": ($$result2) => renderTemplate`${unescapeHTML(normalizedBody)}` })}` : renderTemplate`${renderComponent($$result, "Fragment", Fragment, {}, { "default": ($$result2) => renderTemplate`${includeSymbol && renderTemplate`<symbol${addAttribute(id, "id")}${addAttribute(viewBox, "viewBox")}>${unescapeHTML(normalizedBody)}</symbol>`}<use${addAttribute(`#${id}`, "href")}></use> ` })}`} </svg>`;
}, "/home/diego/Astro-Projects/astro-store-sitemap/node_modules/astro-icon/components/Icon.astro", void 0);

export { $$Icon as $ };
