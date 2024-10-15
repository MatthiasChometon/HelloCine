interface Return {
	convertApiFilmToFilm: (apiFilm: ApiFilm) => Film
}

export const useConvertApiFilmToFilm = (): Return => {
	const convertApiFilmToFilm = (apiFilm: ApiFilm): Film => {
		const film: Film = {
			...apiFilm,
			posterUrl: `https://image.tmdb.org/t/p/w300/${apiFilm.poster_path}`
		}
		return film
	}

	return {
		convertApiFilmToFilm
	}
}
