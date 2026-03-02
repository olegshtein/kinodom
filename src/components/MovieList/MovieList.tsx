import { MovieCard } from '@/components/MovieCard/MovieCard'
import type { movieListProps } from '@/components/MovieList/MovieList.types'
import styles from './MovieList.module.css'

export const MovieList = (props: movieListProps) => {
  const { movies } = props

  return (
    <ul className={styles.movieList}>
      {movies.map(({ key, name, rating, mediaType, genres }) => (
        <li className={styles.movieListItem} key={key}>
          <MovieCard name={name} rating={rating} mediaType={mediaType} genres={genres} />
        </li>
      ))}
    </ul>
  )
}