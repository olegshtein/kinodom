import { Image } from '@/components/Image/Image'
import { Rating } from '@/components/Rating/Rating'
import { MediaType } from '@/components/MediaType/MediaType'
import { Genres } from '@/components/Genres/Genres'
import { Heading } from '@/components/Heading/Heading'
import styles from './MovieCard.module.css'

export const MovieCard = () => {
  return (
    <div className={styles.movieCard}>
      <div className={styles.poster}>
        <Image />
      </div>
      <div className={styles.meta}>
        <Rating /> • <MediaType /> • <Genres />
      </div>
      <div className={styles.name}>
        <Heading as='h4' variant='md'>Спасатели Малибу</Heading>
      </div>
    </div>
  )
}