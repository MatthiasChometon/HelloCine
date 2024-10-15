export default defineNuxtConfig({
	modules: ['@nuxtjs/i18n'],
	i18n: {
		vueI18n: '@/infrastructure/translation/i18n.config',
		lazy: true
	}
})
