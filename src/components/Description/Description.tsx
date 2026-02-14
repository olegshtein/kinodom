import type { Props } from './Description.types'
import styles from './Description.module.css'

export const Description = (props: Props) => {
  const { paragraphs } = props

  return (
    <div className={styles.description}>
      {paragraphs.map((paragraph) => <p>{paragraph}</p>)}
    </div>
  )
}