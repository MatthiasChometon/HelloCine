<script setup lang="ts">
defineProps<{ film: Film }>()
</script>

<template>
  <NuxtLink :to="`/film/${film.id}`" class="text-decoration-none">
    <v-hover
      v-slot="{ isHovering, props }"
    >
      <v-card :class="{ 'on-hover': isHovering }" v-bind="props" class="overflow-visible">
        <v-card
          :class="{ 'on-hover': isHovering }"
          v-bind="props"
          class="overflow-visible"
          :elevation="isHovering ? 24 : 0"
        >
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
        </v-card>
        <p :class="`my-2 text-body-1 ${isHovering ? 'text-white' : 'text-secondary'}`">
          {{ film.title }}
        </p>
      </v-card>
    </v-hover>
  </NuxtLink>
</template>

<style>
 .v-skeleton-loader__image {
  height: 100%;
 }
</style>
