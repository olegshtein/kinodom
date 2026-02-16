import type { Props } from './AdvantagesList.types'
import styles from './AdvantagesList.module.css'

export const AdvantagesList = (props: Props) => {
  const { advantagesList } = props

  return (
    <ul className={styles.advantagesList}>
      {advantagesList.map(({ imageName, title, description }) => (
        <li className={styles.advantage}>
          {imageName}, {title}, {description}
        </li>
      ))}
    </ul>
  )
}