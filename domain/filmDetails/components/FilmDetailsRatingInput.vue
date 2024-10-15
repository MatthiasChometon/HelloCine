<script setup lang="ts">
const ratingInput = defineModel<number>()
</script>

<template>
  <div>
    <v-rating
      v-model="ratingInput"
      style="overflow: hidden;"
      color="yellow"
      :size="32"
      length="10"
    />
  </div>
</template>
