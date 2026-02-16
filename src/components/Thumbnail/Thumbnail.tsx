import type { Props } from './Thumbnail.types'

export const Thumbnail = (props: Props) => {
  const { imageName } = props

  return (
    <div>
      <img
        src={imageName}
        alt=""
      />
    </div>
  )
}