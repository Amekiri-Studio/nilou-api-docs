import { CodeTabs } from "/home/amekiri/nilou-api-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_hvpwt7jc42bhdgc6izgjqkyrne/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/CodeTabs.js";
import { Tabs } from "/home/amekiri/nilou-api-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_hvpwt7jc42bhdgc6izgjqkyrne/node_modules/@vuepress/plugin-markdown-tab/lib/client/components/Tabs.js";
import "/home/amekiri/nilou-api-docs/node_modules/.pnpm/@vuepress+plugin-markdown-tab@2.0.0-rc.68_markdown-it@14.1.0_vuepress@2.0.0-rc.19_@vuepress+b_hvpwt7jc42bhdgc6izgjqkyrne/node_modules/@vuepress/plugin-markdown-tab/lib/client/styles/vars.css";

export default {
  enhance: ({ app }) => {
    app.component("CodeTabs", CodeTabs);
    app.component("Tabs", Tabs);
  },
};
