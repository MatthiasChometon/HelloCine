<script setup lang="ts">
import { useStorage } from '@vueuse/core'
const route = useRoute()

const { convertApiFilmToFilm } = useConvertApiFilmToFilm()
const id = computed(() => `${route.params?.id}`)
const detailsEndpoint = computed(() => `/movie/${id.value}`)
const { data: detailsData } = await useMovieApiFetch<ApiFilm>(detailsEndpoint)
const creditsEndpoint = computed(() => `/movie/${id.value}/credits`)
const { data: credits } = await useMovieApiFetch<FilmCredits>(creditsEndpoint)
const director = computed(() => credits.value?.crew?.find(({ job }) => job === 'Director')?.name)
const mainActors = computed(() => credits.value?.cast?.slice(0, 3) ?? [])
const film = computed(() => convertApiFilmToFilm(detailsData.value ?? {}))
const genre = computed(() => film.value.genres?.map(({ name }) => name)?.join('/'))
const allRatingList = useStorage<Record<string, FilmRating[]>>('allRatingList', {})

const addNewFilmRatingToRatingList = (newFilmRating: FilmRating) => {
  const ratingList: FilmRating[] = [newFilmRating, ...allRatingList.value?.[id.value] ?? []]
  allRatingList.value = { ...allRatingList.value, [id.value]: ratingList }
}

const titleTemplate = computed(() => `HelloCine - ${detailsData.value?.title}`)
useHead({
  titleTemplate
})
</script>

<template>
  <div class="ma-5">
    <v-row class="ma-0">
      <FilmPoster style="max-width: 200px;" class="pa-2" :film="film" />
      <div style="flex: 1;" class="px-2">
        <h4 class="mb-4">
          {{ film.title }}
        </h4>
        <p>
          {{ $t('filmDetails.directedBy', { director }) }}
        </p>
        <p>
          {{ genre }}
        </p>
        <p>
          {{ $t('filmDetails.TMDBScore') }} : {{ film.vote_average }} / 10 ({{ film.vote_count }})
        </p>
      </div>
    </v-row>
    <v-row class="mx-0 mb-4 flex-column">
      <h4 class="mb-2 w-100">
        {{ $t('filmDetails.mainActorsTitle') }}
      </h4>
      <p v-for="actor in mainActors" :key="actor.id">
        {{ actor.name }} ({{ actor.character }})
      </p>
    </v-row>
    <v-row class="mx-0 mb-4">
      <h4 class="mb-2 w-100">
        {{ $t('filmDetails.synopsis') }}
      </h4>
      <p>
        {{ film.overview }}
      </p>
    </v-row>
    <v-row class="mx-0 mb-8">
      <h4 class="mb-2 w-100">
        {{ $t('filmDetails.ratings') }}
      </h4>
      <FilmDetailsRatingList :rating-list="allRatingList?.[id]" />
    </v-row>
    <FilmDetailsRatingForm @on-create-film-rating="addNewFilmRatingToRatingList" />
  </div>
</template>
