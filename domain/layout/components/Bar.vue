<script setup lang="ts">
const drawer = ref(false)
const group = ref(null)
const { t } = useI18n()
watch(() => group.value, () => {
  drawer.value = false
})
const items = computed(() => [
  {
    title: t('layout.bar.home'),
    redirection: '/',
    icon: 'mdi-home'
  }
])
</script>

<template>
  <v-app-bar :elevation="0">
    <v-app-bar-nav-icon variant="text" @click.stop="drawer = !drawer" />

    <v-app-bar-title :class="`${$vuetify.display.mobile ? 'mt-1 ml-2' : ''}`">
      <h3>HelloCine</h3>
    </v-app-bar-title>

    <FilmSearchInput :class="`mr-6 ${$vuetify.display.mobile ? 'mb-2' : 'mb-1'}`" />

    <v-spacer v-if="!$vuetify.display.mobile" />
  </v-app-bar>

  <v-navigation-drawer v-model="drawer" temporary class="bg-primary">
    <v-list-item>
      <SelectLanguageInput />
    </v-list-item>
    <v-divider />
    <v-list color="secondary">
      <v-list-item
        v-for="item in items"
        :key="item.title"
        class="SelectedTile"
        active-class="SelectedTile-active"
        :to="item.redirection"
        link
      >
        <v-list-item-title class="text-white">
          {{ item.title }}
        </v-list-item-title>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<style scoped>
.ListItemClass {
  color: #f5f5f5;
}

.SelectedTile:hover {
    border-radius: 4px;
    background: #455A64
}

.SelectedTile-active {
  border-radius: 4px;
  background: rgba(10, 204, 117, 0.19)
}
</style>
