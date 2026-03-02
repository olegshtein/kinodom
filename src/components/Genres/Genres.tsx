import type { genresProps } from '@/components/Genres/Genres.types'

export const Genres = (props: genresProps) => {
  const { genres } = props

  return (
    <div>
      {genres}
    </div>
  )
}