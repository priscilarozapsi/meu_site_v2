import 'kleur/colors';
import { k as decodeKey } from './chunks/astro/server_a62fUsZv.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_C4GLYyG4.mjs';
import 'es-module-lexer';

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

const manifest = deserializeManifest({"hrefRoot":"file:///C:/atlas/gitinstances/priscilaroza/","cacheDir":"file:///C:/atlas/gitinstances/priscilaroza/node_modules/.astro/","outDir":"file:///C:/atlas/gitinstances/priscilaroza/dist/","srcDir":"file:///C:/atlas/gitinstances/priscilaroza/src/","publicDir":"file:///C:/atlas/gitinstances/priscilaroza/public/","buildClientDir":"file:///C:/atlas/gitinstances/priscilaroza/dist/client/","buildServerDir":"file:///C:/atlas/gitinstances/priscilaroza/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"about/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/about","isIndex":false,"type":"page","pattern":"^\\/about\\/?$","segments":[[{"content":"about","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/about.md","pathname":"/about","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/send.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/send.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/send\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"send.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/send.json.ts","pathname":"/api/send.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"api/test.json","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/test.json","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/test\\.json\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"test.json","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/test.json.ts","pathname":"/api/test.json","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"blog/index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/blog","isIndex":true,"type":"page","pattern":"^\\/blog\\/?$","segments":[[{"content":"blog","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/blog/index.astro","pathname":"/blog","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"index.html","links":[],"scripts":[],"styles":[],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":true,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"route":"/api/lala","isIndex":false,"type":"endpoint","pattern":"^\\/api\\/lala\\/?$","segments":[[{"content":"api","dynamic":false,"spread":false}],[{"content":"lala","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/api/lala.ts","pathname":"/api/lala","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["\u0000astro:content",{"propagation":"in-tree","containsHead":false}],["C:/atlas/gitinstances/priscilaroza/src/components/organisms/PostsSection.astro",{"propagation":"in-tree","containsHead":false}],["C:/atlas/gitinstances/priscilaroza/src/pages/blog/index.astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/index@_@astro",{"propagation":"in-tree","containsHead":false}],["\u0000@astrojs-ssr-virtual-entry",{"propagation":"in-tree","containsHead":false}],["C:/atlas/gitinstances/priscilaroza/src/pages/blog/[...slug].astro",{"propagation":"in-tree","containsHead":true}],["\u0000@astro-page:src/pages/blog/[...slug]@_@astro",{"propagation":"in-tree","containsHead":false}],["C:/atlas/gitinstances/priscilaroza/src/pages/about.md",{"propagation":"none","containsHead":true}],["C:/atlas/gitinstances/priscilaroza/src/pages/index.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astro-page:src/pages/about@_@md":"pages/about.astro.mjs","\u0000@astro-page:src/pages/api/lala@_@ts":"pages/api/lala.astro.mjs","\u0000@astro-page:src/pages/api/send.json@_@ts":"pages/api/send.json.astro.mjs","\u0000@astro-page:src/pages/api/test.json@_@ts":"pages/api/test.json.astro.mjs","\u0000@astro-page:src/pages/blog/index@_@astro":"pages/blog.astro.mjs","\u0000@astro-page:src/pages/blog/[...slug]@_@astro":"pages/blog/_---slug_.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_DMcyNAVW.mjs","C:/atlas/gitinstances/priscilaroza/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_Ct0yREbB.mjs","C:\\atlas\\gitinstances\\priscilaroza\\.astro\\content-assets.mjs":"chunks/content-assets_DleWbedO.mjs","C:\\atlas\\gitinstances\\priscilaroza\\.astro\\content-modules.mjs":"chunks/content-modules_Dgi8Wut1.mjs","\u0000astro:data-layer-content":"chunks/_astro_data-layer-content_DbvjTiGv.mjs","C:/atlas/gitinstances/priscilaroza/src/content/blog/revisitar.mdx?astroPropagatedAssets":"chunks/revisitar_BVnHqqw_.mjs","C:/atlas/gitinstances/priscilaroza/src/content/blog/terapia-nao-e-a-salvacao.mdx?astroPropagatedAssets":"chunks/terapia-nao-e-a-salvacao_B0pXwhhp.mjs","C:/atlas/gitinstances/priscilaroza/src/content/blog/revisitar.mdx":"chunks/revisitar_B9YtzRSF.mjs","C:/atlas/gitinstances/priscilaroza/src/content/blog/terapia-nao-e-a-salvacao.mdx":"chunks/terapia-nao-e-a-salvacao_DwtgHZR_.mjs","C:/atlas/gitinstances/priscilaroza/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.3u430bf-.js","C:/atlas/gitinstances/priscilaroza/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts":"_astro/index.astro_astro_type_script_index_0_lang.CUqFY3xr.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["C:/atlas/gitinstances/priscilaroza/node_modules/@vercel/analytics/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var f=\"@vercel/analytics\",l=\"1.5.0\",w=()=>{window.va||(window.va=function(...r){(window.vaq=window.vaq||[]).push(r)})};function d(){return typeof window<\"u\"}function u(){try{const e=\"production\"}catch{}return\"production\"}function v(e=\"auto\"){if(e===\"auto\"){window.vam=u();return}window.vam=e}function m(){return(d()?window.vam:u())||\"production\"}function c(){return m()===\"development\"}function b(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[a,i]of t)if(!Array.isArray(i)){const o=s(i);o.test(n)&&(n=n.replace(o,`/[${a}]`))}for(const[a,i]of t)if(Array.isArray(i)){const o=s(i.join(\"/\"));o.test(n)&&(n=n.replace(o,`/[...${a}]`))}return n}catch{return e}}function s(e){return new RegExp(`/${h(e)}(?=[/?#]|$)`)}function h(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function y(e){return e.scriptSrc?e.scriptSrc:c()?\"https://va.vercel-scripts.com/v1/script.debug.js\":e.basePath?`${e.basePath}/insights/script.js`:\"/_vercel/insights/script.js\"}function g(e={debug:!0}){var r;if(!d())return;v(e.mode),w(),e.beforeSend&&((r=window.va)==null||r.call(window,\"beforeSend\",e.beforeSend));const n=y(e);if(document.head.querySelector(`script[src*=\"${n}\"]`))return;const t=document.createElement(\"script\");t.src=n,t.defer=!0,t.dataset.sdkn=f+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=l,e.disableAutoTrack&&(t.dataset.disableAutoTrack=\"1\"),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/insights`),e.dsn&&(t.dataset.dsn=e.dsn),t.onerror=()=>{const a=c()?\"Please check if any ad blockers are enabled and try again.\":\"Be sure to enable Web Analytics for your project and deploy again. See https://vercel.com/docs/analytics/quickstart for more information.\";console.log(`[Vercel Web Analytics] Failed to load script from ${n}. ${a}`)},c()&&e.debug===!1&&(t.dataset.debug=\"false\"),document.head.appendChild(t)}function p({route:e,path:r}){var n;(n=window.va)==null||n.call(window,\"pageview\",{route:e,path:r})}function k(){try{return}catch{}}customElements.define(\"vercel-analytics\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\");g({...r,disableAutoTrack:!0,framework:\"astro\",basePath:k(),beforeSend:window.webAnalyticsBeforeSend});const t=this.dataset.pathname;p({route:b(t??\"\",n),path:t})}catch(r){throw new Error(`Failed to parse WebAnalytics properties: ${r}`)}}});"],["C:/atlas/gitinstances/priscilaroza/node_modules/@vercel/speed-insights/dist/astro/index.astro?astro&type=script&index=0&lang.ts","var o=\"@vercel/speed-insights\",u=\"1.2.0\",f=()=>{window.si||(window.si=function(...r){(window.siq=window.siq||[]).push(r)})};function l(){return typeof window<\"u\"}function h(){try{const e=\"production\"}catch{}return\"production\"}function d(){return h()===\"development\"}function v(e,r){if(!e||!r)return e;let n=e;try{const t=Object.entries(r);for(const[s,i]of t)if(!Array.isArray(i)){const a=c(i);a.test(n)&&(n=n.replace(a,`/[${s}]`))}for(const[s,i]of t)if(Array.isArray(i)){const a=c(i.join(\"/\"));a.test(n)&&(n=n.replace(a,`/[...${s}]`))}return n}catch{return e}}function c(e){return new RegExp(`/${g(e)}(?=[/?#]|$)`)}function g(e){return e.replace(/[.*+?^${}()|[\\]\\\\]/g,\"\\\\$&\")}function m(e){return e.scriptSrc?e.scriptSrc:d()?\"https://va.vercel-scripts.com/v1/speed-insights/script.debug.js\":e.dsn?\"https://va.vercel-scripts.com/v1/speed-insights/script.js\":e.basePath?`${e.basePath}/speed-insights/script.js`:\"/_vercel/speed-insights/script.js\"}function w(e={}){var r;if(!l()||e.route===null)return null;f();const n=m(e);if(document.head.querySelector(`script[src*=\"${n}\"]`))return null;e.beforeSend&&((r=window.si)==null||r.call(window,\"beforeSend\",e.beforeSend));const t=document.createElement(\"script\");return t.src=n,t.defer=!0,t.dataset.sdkn=o+(e.framework?`/${e.framework}`:\"\"),t.dataset.sdkv=u,e.sampleRate&&(t.dataset.sampleRate=e.sampleRate.toString()),e.route&&(t.dataset.route=e.route),e.endpoint?t.dataset.endpoint=e.endpoint:e.basePath&&(t.dataset.endpoint=`${e.basePath}/speed-insights/vitals`),e.dsn&&(t.dataset.dsn=e.dsn),d()&&e.debug===!1&&(t.dataset.debug=\"false\"),t.onerror=()=>{console.log(`[Vercel Speed Insights] Failed to load script from ${n}. Please check if any content blockers are enabled and try again.`)},document.head.appendChild(t),{setRoute:s=>{t.dataset.route=s??void 0}}}function p(){try{return}catch{}}customElements.define(\"vercel-speed-insights\",class extends HTMLElement{constructor(){super();try{const r=JSON.parse(this.dataset.props??\"{}\"),n=JSON.parse(this.dataset.params??\"{}\"),t=v(this.dataset.pathname??\"\",n);w({route:t,...r,framework:\"astro\",basePath:p(),beforeSend:window.speedInsightsBeforeSend})}catch(r){throw new Error(`Failed to parse SpeedInsights properties: ${r}`)}}});"]],"assets":["/_astro/about.C6SwME4Y.css","/og_image.jpg","/fonts/Arima-VariableFont.ttf","/fonts/ArimaMadurai-Black.woff","/fonts/ArimaMadurai-Bold.woff","/fonts/ArimaMadurai-ExtraBold.woff","/fonts/ArimaMadurai-ExtraLight.woff","/fonts/ArimaMadurai-Light.woff","/fonts/ArimaMadurai-Medium.woff","/fonts/ArimaMadurai-Regular.woff","/fonts/ArimaMadurai-Thin.woff","/fonts/Quicksand-VariableFont.ttf","/about/index.html","/api/send.json","/api/test.json","/blog/index.html","/index.html"],"buildFormat":"directory","checkOrigin":true,"serverIslandNameMap":[],"key":"adRq1n8i7f6n4s9W9CwwvmR/FUnwM9C+Yz6Klywy1L0="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
