import { Heading } from '@/components/Heading/Heading'
import { MovieList } from '@/components/MovieList/MovieList'
import type { moviesProps } from '@/components/Movies/Movies.types'
import styles from './Movies.module.css'

export const Movies = (props: moviesProps) => {
  const { key, heading, movies } = props

  return (
    <div className={styles.movies} key={key}>
      <div className={styles.heading}>
        <Heading as='h3' variant='lg'>{heading}</Heading>
      </div>
      <div className={styles.movieList}>
        <MovieList movies={movies} />
      </div>
    </div>
  )
}