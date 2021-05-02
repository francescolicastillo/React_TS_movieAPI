import { useSearchParams } from 'react-router-dom'
import { MovieCard } from '../components/index'
import { useFetch } from '../hooks/useFetch';
import { MovieDetails } from '@tdanks2000/tmdb-wrapper';
import { PageProps } from '../interfaces/PageProps';
import { useTitle } from '../hooks/useTitle';

export const Search = ({apiPath, title}: PageProps) => {
  const [ searchParams ] = useSearchParams();
  const query = searchParams.get("q");
  const { data: movies } = useFetch(apiPath + `?query=${query}`);

  useTitle(title + query);

  return (
    <>
      <section className="py-7">
        <p className="text-3xl text-gray-700 dark:text-white">{ movies.length === 0 ? `No result found for '${query}'` : `Result for '${query}'` }</p>
      </section>
      <section className="max-w-7xl mx-auto py-7">
        <div className="flex justify-start flex-wrap other:justify-evenly">
          {
            movies.map((movie: MovieDetails) => (
              <MovieCard key={movie.id} movie={movie} />
            ))
          }
        </div>
      </section>
    </>
  )
}
