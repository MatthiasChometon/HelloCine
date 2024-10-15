<script setup lang="ts">
const route = useRoute()

useHead({
  titleTemplate: () => {
    return 'HelloCine - Détails'
  }
})
</script>

<template>
  <div>{{ route?.params?.id }}</div>
</template>
