import { Heading } from '@/components/Heading/Heading'
import { MovieList } from '@/components/MovieList/MovieList'
import styles from './Movies.module.css'

export const Movies = (props: { heading: string }) => {
  const { heading } = props

  return (
    <div className={styles.movies}>
      <div className={styles.heading}>
        <Heading as='h3' variant='lg'>{heading}</Heading>
      </div>
      <div className={styles.movieList}>
        <MovieList />
      </div>
    </div>
  )
}