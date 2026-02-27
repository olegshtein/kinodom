import {
  ThematicCollection
} from '@/components/ThematicCollection/ThematicCollection'
import styles from './ThematicCollections.module.css'

export const ThematicCollections = () => {
  return (
    <ul className={styles.thematicCollections}>
      <li>
        <ThematicCollection heading="Любителям комиксов" />
      </li>
      <li>
        <ThematicCollection heading="Классика фэнтези" />
      </li>
      <li>
        <ThematicCollection heading="Японские мультфильмы" />
      </li>
      <li>
        <ThematicCollection heading="Сатиристические мультсериалы" />
      </li>
    </ul>
  )
}