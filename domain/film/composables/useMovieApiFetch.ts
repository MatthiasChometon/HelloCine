type UseFetchRequest<T> = Parameters<typeof useFetch<T>>['0']
type UseFetchOptions<T> = Parameters<typeof useFetch<T>>['1']
type UseFetchReturn<T> = ReturnType<typeof useFetch<T>>

export const useMovieApiFetch = <T>(request: UseFetchRequest<T>, options?: UseFetchOptions<T>): UseFetchReturn<T> => {
	const { locale } = useI18n()
	return useFetch<T>(request, {
		...options,
		lazy: true,
		$fetch: useNuxtApp().$movieApiFetch,
		query: { language: locale, ...options?.query }
	})
}
