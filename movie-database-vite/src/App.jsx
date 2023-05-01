import './App.css'
import { Movies } from './components/Movies'
import { useMovies } from './hooks/useMovies'

function App() {
  const { movies } = useMovies()

  return (
    <>
      <div className="page">
        <header>
          <h1>Movies Database</h1>
          <form>
            <input type="text" placeholder="Matrix, Star Wars, Mario..." />
            <button type="submit">Search</button>
          </form>
        </header>

        <main>
          <Movies movies={movies} />
        </main>
      </div>
    </>
  )
}

export default App
