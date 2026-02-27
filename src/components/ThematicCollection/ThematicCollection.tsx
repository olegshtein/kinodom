import { Image } from '@/components/Image/Image'
import { Heading } from '@/components/Heading/Heading'
import styles from './ThematicCollection.module.css'

export const ThematicCollection = (props: { heading: string }) => {
  const { heading } = props

  return (
    <a className={styles.thematicCollection} href="#">
      <div className={styles.image}>
        <Image />
      </div>
      <div className={styles.heading}>
        <Heading as='h3' variant='lg'>{heading}</Heading>
      </div>
    </a>
  )
}