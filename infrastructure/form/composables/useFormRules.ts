import type { ValidationRuleWithoutParams, ValidationRuleWithParams } from '@vuelidate/core'
import { alphaNum, createI18nMessage, maxLength, maxValue, minLength, minValue, required } from '@vuelidate/validators'
import { useI18n } from 'vue-i18n'

interface Return {
	required: ValidationRuleWithoutParams
	minLength: (min: number) => ValidationRuleWithParams<{
		min: number
	}>
	maxLength: (max: number) => ValidationRuleWithParams<{
		max: number
	}>
	alphaNum: ValidationRuleWithoutParams
	minValue: (min: number) => ValidationRuleWithParams<{
		min: number
	}>
	maxValue: (max: number) => ValidationRuleWithParams<{
		max: number
	}>
}

export const useFormRules = (): Return => {
	const { t } = useI18n()
	const translateFormMessage = createI18nMessage({ t })

	return {
		required: translateFormMessage(required),
		minLength: (min: number) => translateFormMessage(minLength(min)),
		maxLength: (max: number) => translateFormMessage(maxLength(max)),
		alphaNum: translateFormMessage(alphaNum),
		minValue: (min: number) => translateFormMessage(minValue(min)),
		maxValue: (max: number) => translateFormMessage(maxValue(max))
	}
}
