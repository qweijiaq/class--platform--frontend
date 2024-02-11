import { createNuxtPersistedState } from "pinia-plugin-persistedstate/nuxt";
import { defineNuxtPlugin, useCookie } from "#app";
export default defineNuxtPlugin((nuxtApp) => {
  const date = new Date();
  date.setDate(date.getDate() + 7); // 七天
  // 设置 pinia 的过期时间
  nuxtApp.$pinia.use(
    createNuxtPersistedState(useCookie, {
      cookieOptions: {
        expires: date,
        maxAge: 3600 * 24 * 7,
        sameSite: "strict",
      },
    })
  );
});
