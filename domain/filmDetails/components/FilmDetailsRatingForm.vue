<script setup lang="ts">
import useVuelidate from '@vuelidate/core'

const emit = defineEmits<{(e: 'onCreateFilmRating', filmRating: FilmRating): void}>()

const { required, alphaNum, minLength, minValue, maxLength, maxValue } = useFormRules()

const defaultValue = {
  userName: '',
  comment: '',
  rating: 0
}
const newFilmRating = ref<Omit<FilmRating, 'creationDate'>>(structuredClone(defaultValue))

const rules = {
  userName: {
    required,
    alphaNum,
    minLength: minLength(3),
    maxLength: maxLength(50)
  },
  comment: {
    required,
    minLength: minLength(3),
    maxLength: maxLength(500)
  },
  rating: {
    minValue: minValue(1),
    maxValue: maxValue(10)
  }
}

const v$ = useVuelidate(rules, newFilmRating.value)

const submitForm = async (): Promise<void> => {
  const isFormValid = await v$.value.$validate()
  if (isFormValid === false) { return }
  createNewFilmRating()
  v$.value.$reset()
  newFilmRating.value = defaultValue
}

const createNewFilmRating = (): void => {
  const filmRating: FilmRating = { ...newFilmRating.value, creationDate: new Date() }
  emit('onCreateFilmRating', filmRating)
}
</script>

<template>
  <v-row class="mx-0">
    <h4 class="mb-2 w-100">
      {{ $t('filmDetails.rating.title') }}
    </h4>
    <form class="w-100">
      <v-text-field
        v-model="newFilmRating.userName"
        :error-messages="v$.userName.$errors.map(e => e.$message.toString())"
        :label="$t('filmDetails.rating.userName.label')"
        @blur="v$.userName.$touch"
        @input="v$.userName.$touch"
      />

      <v-text-field
        v-model="newFilmRating.comment"
        :error-messages="v$.comment.$errors.map(e => e.$message.toString())"
        :label="$t('filmDetails.rating.comment.label')"
        @blur="v$.userName.$touch"
        @input="v$.userName.$touch"
      />

      <FilmDetailsRatingInput v-model="newFilmRating.rating" />
      <v-btn
        class="mt-2 mx-0 px-0"
        :style="`width: ${$vuetify.display.mobile ? '100%' : '100px'};`"
        color="secondary"
        variant="elevated"
        @click="submitForm"
      >
        {{ $t('filmDetails.rating.button') }}
      </v-btn>
    </form>
  </v-row>
</template>
