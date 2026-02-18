import type { Props } from './Thumbnail.types'
import styles from './Thumbnail.module.css'

export const Thumbnail = (props: Props) => {
  const { imageName } = props

  const imagePath = `/src/assets/images/${imageName}`

  return (
    <div className={styles.thumbnail}>
      <div className={styles.thumbnailInner}>
        <img
          width={40}
          height={40}
          src={imagePath}
          alt=""
        />
      </div>
    </div>
  )
}