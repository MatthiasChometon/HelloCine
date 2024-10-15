import { en as $enVuetify, fr as $frVuetify } from 'vuetify/locale'
import frLayout from '@/domain/layout/translations/fr.json'
import enLayout from '@/domain/layout/translations/en.json'
import frFilmList from '@/domain/filmList/translations/fr.json'
import enFilmList from '@/domain/filmList/translations/en.json'
import frFilm from '@/domain/film/translations/fr.json'
import enFilm from '@/domain/film/translations/en.json'
import frFilmDetails from '@/domain/filmDetails/translations/fr.json'
import enFilmDetails from '@/domain/filmDetails/translations/en.json'
import frTranslation from '@/infrastructure/translation/translations/fr.json'
import enTranslation from '@/infrastructure/translation/translations/en.json'
import frForm from '@/infrastructure/form/translations/fr.json'
import enForm from '@/infrastructure/form/translations/en.json'

export default defineI18nConfig(() => ({
	legacy: false,
	locale: 'fr',
	messages: {
		en: {
			$vuetify: $enVuetify,
			layout: enLayout,
			translation: enTranslation,
			filmList: enFilmList,
			filmDetails: enFilmDetails,
			film: enFilm,
			...enForm
		},
		fr: {
			$vuetify: $frVuetify,
			layout: frLayout,
			translation: frTranslation,
			filmList: frFilmList,
			filmDetails: frFilmDetails,
			film: frFilm,
			...frForm
		}
	}
}))
