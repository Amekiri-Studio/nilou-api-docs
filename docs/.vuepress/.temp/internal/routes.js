export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"主页"} }],
  ["/get-started.html", { loader: () => import(/* webpackChunkName: "get-started.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/get-started.html.js"), meta: {"title":"Get Started"} }],
  ["/v1/bbs/", { loader: () => import(/* webpackChunkName: "v1_bbs_index.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/v1/bbs/index.html.js"), meta: {"title":"米游社/HoYoLAB"} }],
  ["/v1/introduction/", { loader: () => import(/* webpackChunkName: "v1_introduction_index.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/v1/introduction/index.html.js"), meta: {"title":"文档介绍"} }],
  ["/v1/bbs/genshin/getBasicInfo/", { loader: () => import(/* webpackChunkName: "v1_bbs_genshin_getBasicInfo_index.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/v1/bbs/genshin/getBasicInfo/index.html.js"), meta: {"title":"米游社/HoYoLAB-原神：获取基本数据"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/amekiri/nilou-api-docs/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
