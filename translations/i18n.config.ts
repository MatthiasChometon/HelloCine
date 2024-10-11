import { en as $enVuetify, fr as $frVuetify } from 'vuetify/locale'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'fr',
	messages: {
		en: {
			$vuetify: $enVuetify
		},
		fr: {
			$vuetify: $frVuetify
		}
	}
}))
