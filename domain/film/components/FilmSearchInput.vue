<script setup lang="ts">
const textInput = ref('')
const query = refDebounced(textInput, 400)
const { convertApiFilmToFilm } = useConvertApiFilmToFilm()
const { data } = useMovieApiFetch<{ results: ApiFilm[] }>('/search/movie', {
  query: {
    query
  }
})
const items = computed(() => data.value?.results.map(film => convertApiFilmToFilm(film)) ?? [])
</script>

<template>
  <v-autocomplete
    v-model:search="textInput"
    :items="items"
    append-inner-icon="mdi-magnify"
    :label="$t('film.searchLabel')"
    :style="`max-width: ${$vuetify.display.mobile ? '170px' : '400px'};`"
    item-title="title"
    item-value="title"
    hide-details
    single-line
    clearable
  >
    <template #item="{ props, item }">
      <NuxtLink :to="`/film/${item.raw.id}`" class="text-decoration-none text-white">
        <v-list-item
          v-bind="props"
          :prepend-avatar="item.raw.posterUrl"
          :subtitle="$t('film.searchDate', { searchDate: item.raw.release_date.replaceAll('-', '/') })"
          :title="item.raw.title"
        />
      </NuxtLink>
    </template>
  </v-autocomplete>
</template>
