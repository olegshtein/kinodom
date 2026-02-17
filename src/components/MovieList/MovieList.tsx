import { MovieCard } from '@/components/MovieCard/MovieCard'
import styles from './MovieList.module.css'

export const MovieList = () => {
  return (
    <ul className={styles.movieList}>
      <li className={styles.movieListItem}>
        <MovieCard />
      </li>
      <li className={styles.movieListItem}>
        <MovieCard />
      </li>
      <li className={styles.movieListItem}>
        <MovieCard />
      </li>
      <li className={styles.movieListItem}>
        <MovieCard />
      </li>
    </ul>
  )
}