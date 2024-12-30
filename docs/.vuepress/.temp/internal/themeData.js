export const themeData = JSON.parse("{\"logo\":\"https://img.nilou.moe/images/R.png\",\"navbar\":[\"/\",\"/v1/introduction/\",\"/v1/bbs/\"],\"repo\":\"https://github.com/Amekiri-Studio/nilou-api-docs\",\"sidebar\":{\"/\":[],\"/v1/bbs/\":[{\"text\":\"原神\",\"children\":[{\"text\":\"获取基本信息\",\"link\":\"/v1/bbs/genshin/getBasicInfo/\"},{\"text\":\"获取详细信息\",\"link\":\"/v1/bbs/genshin/getDetailInfo/\"},{\"text\":\"获取深渊信息\",\"link\":\"/v1/bbs/genshin/getAbyssInfo/\"}]}]},\"locales\":{\"/\":{\"selectLanguageName\":\"English\"}},\"colorMode\":\"auto\",\"colorModeSwitch\":true,\"selectLanguageText\":\"Languages\",\"selectLanguageAriaLabel\":\"Select language\",\"sidebarDepth\":2,\"editLink\":true,\"editLinkText\":\"Edit this page\",\"lastUpdated\":true,\"lastUpdatedText\":\"Last Updated\",\"contributors\":true,\"contributorsText\":\"Contributors\",\"notFound\":[\"There's nothing here.\",\"How did we get here?\",\"That's a Four-Oh-Four.\",\"Looks like we've got some broken links.\"],\"backToHome\":\"Take me home\",\"openInNewWindow\":\"open in new window\",\"toggleColorMode\":\"toggle color mode\",\"toggleSidebar\":\"toggle sidebar\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateThemeData) {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ themeData }) => {
    __VUE_HMR_RUNTIME__.updateThemeData(themeData)
  })
}
