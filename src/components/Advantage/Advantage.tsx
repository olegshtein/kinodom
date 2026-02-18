import { Thumbnail } from '@/components/Thumbnail/Thumbnail'
import { Heading } from '@/components/Heading/Heading'
import { Description } from '@/components/Description/Description'
import type { Props } from './Advantage.types'
import styles from './Advantage.module.css'

export const Advantage = (props: Props) => {
  const { imageName, title, description } = props

  return (
    <div className={styles.advantage}>
      <div className={styles.thumbnail}>
        <Thumbnail imageName={imageName} />
      </div>
      <div className={styles.heading}>
        <Heading as='h3' variant='lg'>{title}</Heading>
      </div>
      <div className={styles.description}>
        <Description paragraphs={description} />
      </div>
    </div>
  )
}