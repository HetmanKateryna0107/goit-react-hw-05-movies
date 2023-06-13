import { getMovieByName, getReviewsById, setMovieId } from 'Service/serviceApi';
import { MovieList } from 'pages/MovieList';
import { SearchMovies } from 'pages/SearchMovise';
import { useEffect, useState } from 'react';
import { Link, useParams, useSearchParams } from 'react-router-dom';

export const Movies = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const movieId = searchParams.get('query');
  const [movies, setMovieId] = useState([]);
  useEffect(() => {
    if (!movieId) return;
    getMovieByName(movieId).then(data => {
      setMovieId(data.results);
    });
  }, [movieId]);

  return (
    <div>
      <SearchMovies setSearchParams={setSearchParams} />
      <MovieList movies={movies} />
    </div>
  );
};
