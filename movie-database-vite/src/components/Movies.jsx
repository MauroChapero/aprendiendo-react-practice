function ListOfMovies({ movies }) {
  return (
    <ul>
      {movies.map((movie) => (
        <li key={movie.id}>
          <h3>{movie.title}</h3>
          <p>{movie.year}</p>
          <img
            src={movie.image}
            alt={`${movie.type.toUpperCase()} - ${movie.title}`}
          />
        </li>
      ))}
    </ul>
  )
}

function RenderNoMovies() {
  return <p>No movies founded</p>
}

export function Movies({ movies }) {
  const hasMovies = movies?.length > 0

  return (
    hasMovies
        ? <ListOfMovies movies={movies} />
        : <RenderNoMovies />
  )
}
