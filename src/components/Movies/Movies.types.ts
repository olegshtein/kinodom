import type { movieListProps } from '@/components/MovieList/MovieList.types'

export type moviesProps = movieListProps & {
  key: string
  heading: string
}