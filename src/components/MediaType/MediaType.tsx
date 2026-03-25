import type { mediaType } from '@/components/MediaType/MediaType.types'

export const MediaType = (props: mediaType) => {
  const { mediaType } = props

  return (
    <div>
      {mediaType}
    </div>
  )
}