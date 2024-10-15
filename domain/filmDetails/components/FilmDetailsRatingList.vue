<script setup lang="ts">
const props = defineProps<{ ratingList: FilmRating[] | undefined }>()
const hasRatings = computed(() => (props?.ratingList ?? []).length > 0)
const date = useDate()
</script>

<template>
  <div class="w-100">
    <div v-if="hasRatings" class="w-100" style="max-height: 300px; overflow-y: scroll;">
      <v-divider class="my-4" />
      <div v-for="rating in ratingList" :key="`${rating.creationDate}${rating.userName}`" class="mb-4">
        <p>{{ rating.userName }} - {{ date.format(rating.creationDate, 'keyboardDateTime') }}</p>
        <FilmDetailsRatingInput v-model="rating.rating" readonly />
        <p>"{{ rating.comment }}"</p>
        <v-divider class="my-4" />
      </div>
    </div>
    <p v-else>
      {{ $t('filmDetails.rating.noData') }}
    </p>
  </div>
</template>
