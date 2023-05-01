import responseMovies from './../mocks/withResults.json'

export function useMovies() {
    const movies = responseMovies.Search
  
    const mappedMovies = movies?.map(movie => ({
      id: movie.imdbID,
      title: movie.Title,
      image: movie.Poster,
      year: movie.Year,
      type: movie.Type
    }))
  
    return { movies: mappedMovies }
  }