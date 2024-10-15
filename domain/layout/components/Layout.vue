<template>
  <v-app class="bg-primary" style="min-height: 100vh;">
    <Bar />
    <v-main style="padding-top: 64px;">
      <NuxtPage style="min-height: calc(100vh - 64px);" />
      <Footer />
    </v-main>
  </v-app>
</template>
