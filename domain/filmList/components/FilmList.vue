<script setup lang="ts">
import type { AsyncDataRequestStatus } from '#app'

defineEmits(['onLoadNewPage'])
defineProps<{ filmList: Film[]; status: AsyncDataRequestStatus }>()
</script>

<template>
  <div class="mx-8 py-4">
    <h3 class="mb-2 ml-3 font-weight-thin">
      {{ $t('filmList.title') }}
    </h3>
    <SkeletonLoaderFilmList v-if="status !== 'success'" />
    <v-infinite-scroll v-else width="100%" :items="filmList" @load="$emit('onLoadNewPage')">
      <v-row data-testid="page-load" class="mx-0">
        <v-col
          v-for="film in filmList"
          :key="film.id"
          :cols="12"
          xs="4"
          sm="3"
          md="3"
          lg="2"
          xl="1"
        >
          <FilmListCard :film="film" />
        </v-col>
      </v-row>
    </v-infinite-scroll>
  </div>
</template>
