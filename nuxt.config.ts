import Components from "unplugin-vue-components/vite";
import { AntDesignVueResolver } from "unplugin-vue-components/resolvers";

export default defineNuxtConfig({
  vite: {
    plugins: [
      Components({
        resolvers: [AntDesignVueResolver()],
      }),
    ],
  },
  modules: ["@unocss/nuxt", "@pinia/nuxt"],
  unocss: {
    uno: true, //激活 unocss
    attributify: true, //激活属性化模式
    shortcuts: [
      //⾃定义快捷⽅式
      { flexc: "flex items-center justify-center" },
      { flexb: "flex items-center justify-between" },
      { btn: "rounded-5px text-center cursor-pointer select-none" },
      { "text-btn": "text-center cursor-pointer select-none" },
    ],
    rules: [
      //⾃定义规则
      [
        /^truncate-(\d+)$/,
        ([, d]) => ({
          overflow: "hidden",
          display: "-webkit-box",
          "text-overflow": "ellipsis",
          "-webkit-line-clamp": d,
          "-webkit-box-orient": "vertical",
        }),
      ],
      [
        /^center-text-(\d+)$/,
        ([, d]) => ({
          height: `${d}px`,
          "align-items": "center",
          "line-height": `${Number(d) - 2}px`,
        }),
      ],
      [
        /^wh-(\d+)$/,
        ([, d]) => ({
          width: `${d}px`,
          height: `${d}px`,
        }),
      ],
      [
        /^fs-(\d+)$/,
        ([, d]) => ({
          "font-size": `${d}px`,
        }),
      ],
    ],
  },
});
