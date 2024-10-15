// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
	extends: [
		'./domain/layout',
		'./domain/filmList',
		'./domain/filmDetails',
		'./domain/film',
		'./infrastructure/form',
		'./infrastructure/vuetify',
		'./infrastructure/translation'
	],
	ssr: true,
	runtimeConfig: {
		public: {
			movieApiUrl: process.env.NUXT_PUBLIC_MOVIE_API_URL,
			movieApiToken: process.env.NUXT_PUBLIC_MOVIE_API_TOKEN
		}
	},
	compatibilityDate: '2024-04-03',
	devtools: { enabled: true },
	modules: ['@vueuse/nuxt']
})
