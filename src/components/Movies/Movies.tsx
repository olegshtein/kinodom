import { Heading } from '@/components/Heading/Heading'
import styles from './Movies.module.css'

export const Movies = () => {
  return (
    <div className={styles.movies}>
      <div className={styles.heading}>
        <Heading as='h3' variant='lg'>Комедии</Heading>
      </div>
      <div className={styles.moviesList}>

      </div>
    </div>
  )
}