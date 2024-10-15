<script setup lang="ts">
const icons = ref([
  'mdi-facebook',
  'mdi-twitter',
  'mdi-linkedin',
  'mdi-instagram'
])
</script>

<template>
  <v-footer
    class="text-center d-flex flex-column"
  >
    <div>
      <v-btn
        v-for="icon in icons"
        :key="icon"
        :icon="icon"
        class="mx-4"
        variant="text"
      />
    </div>
    <v-divider />
    <div>
      HelloCine
    </div>
  </v-footer>
</template>
