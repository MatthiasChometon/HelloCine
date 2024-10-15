<script setup lang="ts">
const { t, locale } = useI18n()
const selectedLanguage = ref<{ value: string; label: string }>({
  value: 'fr',
  label: t('translation.languages.fr')
})
const languages = ref<{ value: string; label: string }[]>([
  selectedLanguage.value,
  {
    value: 'en',
    label: t('translation.languages.en')
  }
])
watch(() => selectedLanguage.value, () => {
  locale.value = selectedLanguage.value.value
})
onMounted(() => {
  locale.value = selectedLanguage.value.value
})
</script>

<template>
  <v-select
    v-model="selectedLanguage"
    :label="t('translation.selectButtonLabel')"
    :items="languages"
    variant="underlined"
    item-title="label"
    item-value="value"
    class="px-1"
    return-object
  />
</template>
