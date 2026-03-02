import { Image } from '@/components/Image/Image'
import { Rating } from '@/components/Rating/Rating'
import { MediaType } from '@/components/MediaType/MediaType'
import { Genres } from '@/components/Genres/Genres'
import { Heading } from '@/components/Heading/Heading'
import type { movieCardProps } from '@/components/MovieCard/MovieCard.types'
import styles from './MovieCard.module.css'

export const MovieCard = (props: movieCardProps) => {
  const { name, rating, mediaType, genres } = props

  return (
    <div className={styles.movieCard}>
      <div className={styles.poster}>
        <Image />
      </div>
      <div className={styles.meta}>
        <Rating rating={rating} /> • <MediaType mediaType={mediaType} /> • <Genres genres={genres} />
      </div>
      <div className={styles.name}>
        <Heading as='h4' variant='md'>{name}</Heading>
      </div>
    </div>
  )
}