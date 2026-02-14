import type { Props } from './Heading.types'
import styles from './Heading.module.css'

export const Heading = (props: Props) => {
  const { children } = props

  return (
    <h1 className={styles.h1}>{children}</h1>
  )
}
