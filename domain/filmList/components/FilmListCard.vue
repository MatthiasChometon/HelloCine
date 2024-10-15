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
          <FilmPoster :film="film" />
        </v-card>
        <p :class="`my-2 text-body-1 ${isHovering ? 'text-white' : 'text-secondary'}`">
          {{ film.title }}
        </p>
      </v-card>
    </v-hover>
  </NuxtLink>
</template>
