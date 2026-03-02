import type { genresProps } from '@/components/Genres/Genres.types'
import type { mediaType } from '@/components/MediaType/MediaType.types'
import type { ratingProps } from '@/components/Rating/Rating.types'

export type movieCardProps = genresProps & mediaType & ratingProps & {
  name: string
}