<script setup lang="ts">
defineProps<{ film: Film }>()
</script>

<template>
  <v-img
    :aspect-ratio="2/3"
    cover
    eager
    :src="film.posterUrl"
  >
    <template #placeholder>
      <v-skeleton-loader
        type="image"
        height="100%"
      />
    </template>
  </v-img>
</template>

<style>
 .v-skeleton-loader__image {
  height: 100%;
 }
</style>
