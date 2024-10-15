<script setup lang="ts">
const { convertApiFilmToFilm } = useConvertApiFilmToFilm()
const { locale } = useI18n()
const page = ref(1)
const { t } = useI18n()
const filmList = ref<Film[]>([])
const { status } = await useMovieApiFetch<{ results: ApiFilm[] }>('/movie/now_playing', {
  query: {
    page
  },
  onResponse: ({ response }) => {
    const filmListToAdd: Film[] = response._data.results.map((apiFilm: ApiFilm) => convertApiFilmToFilm(apiFilm))
    filmList.value = [...filmList.value, ...filmListToAdd]
  },
  default: () => ({ results: [] })
})
watch(() => locale.value, () => {
  filmList.value = []
  page.value = 1
})

const addNewPageFilms = () => {
  page.value++
}

const titleTemplate = computed(() => `HelloCine - ${t('layout.bar.home')}`)
useHead({
  titleTemplate
})
</script>

<template>
  <FilmList :film-list="filmList" :status="status" @on-load-new-page="addNewPageFilms" />
</template>
