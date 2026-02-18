import type { Props } from './Heading.types'
import styles from './Heading.module.css'

export const Heading = (props: Props) => {
  const { as: Component, variant, children } = props

  return (
    <Component className={styles[variant]}>{children}</Component>
  )
}
