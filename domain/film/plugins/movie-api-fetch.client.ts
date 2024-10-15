export default defineNuxtPlugin({
	name: 'movie-api-fetch',
	setup() {
		const config = useRuntimeConfig()
		const token: string = config.public.movieApiToken

		const $movieApiFetch = $fetch.create({
			baseURL: config.public.movieApiUrl,
			headers: {
				accept: 'application/json',
				Authorization: `Bearer ${token}`
			}
		})

		return {
			provide: {
				movieApiFetch: $movieApiFetch
			}
		}
	}
})
