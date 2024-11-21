export default defineNuxtConfig({
  compatibilityDate: "2024-04-03",
  devtools: { enabled: true },

  // Fichier SCSS principal
  css: ["~/assets/styles/main.scss"],

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler', // or "modern"
          additionalData: `
            @use "@/assets/styles/variables.scss" as *;
          `,
        },
      },
    },
  },

  modules: ["@nuxt/image"],
});