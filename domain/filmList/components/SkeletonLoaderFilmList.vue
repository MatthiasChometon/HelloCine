<template>
  <v-row>
    <v-col
      v-for="index in 12"
      :key="index"
      :cols="12"
      xs="4"
      sm="3"
      md="3"
      lg="2"
      xl="1"
    >
      <v-skeleton-loader
        type="card"
      />
    </v-col>
  </v-row>
</template>

<style>
 .v-skeleton-loader__image {
  min-height: 30vh;
  height: 100%;
 }
</style>
