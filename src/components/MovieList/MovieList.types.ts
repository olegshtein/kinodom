import type { movieCardProps } from '@/components/MovieCard/MovieCard.types'

export type movieListProps = {
  movies: Array<movieCardProps & {
    key: string
  }>
}