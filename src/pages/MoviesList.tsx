import { MovieDetails } from '@tdanks2000/tmdb-wrapper';
import { MovieCard } from '../components/index'
import { useFetch } from '../hooks/useFetch';
import { useTitle } from '../hooks/useTitle';
import { PageProps } from '../interfaces/PageProps';

export const MoviesList = ({apiPath, title}: PageProps) => {
  const { data: movies } = useFetch(apiPath);
  useTitle(title);

  return (
    <section className="max-w-7xl mx-auto py-7">
      <div className="flex flex-wrap justify-center">
        {
          movies.map((movie: MovieDetails) => (
            <MovieCard key={movie.id} movie={movie} />
          ))
        }
      </div>
    </section>
  )
}
