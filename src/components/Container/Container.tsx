import styles from './Container.module.css'
import type { Props } from './Container.types.ts'

export const Container = (props: Props) => {
  const { children } = props

  return <div className={styles.container}>{children}</div>
}
