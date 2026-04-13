export default defineNuxtConfig({
  modules: ["@nuxt/ui", "@vueuse/nuxt"],

  devtools: {
    enabled: false,
  },

  css: ["~/assets/css/main.css"],

  app: {
    head: {
      viewport: "width=device-width,initial-scale=1",
      title: "Jobby",
      htmlAttrs: {
        lang: "en",
      },
      link: [{ rel: "icon", href: "/favicon.ico", sizes: "any" }],
      meta: [{ name: "viewport", content: "width=device-width, initial-scale=1" }],
    },
  },

  experimental: {
    viteEnvironmentApi: true,
    typescriptPlugin: true,
    payloadExtraction: true,
  },

  routeRules: {
    "/": { prerender: true },
  },

  compatibilityDate: "2025-01-15",

  vite: {},
});
