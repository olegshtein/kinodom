import {
  ThematicCollection
} from '@/components/ThematicCollection/ThematicCollection'
import type { thematicCollectionsProps } from '@/components/ThematicCollections/ThematicCollections.types'
import styles from './ThematicCollections.module.css'

export const ThematicCollections = (props: thematicCollectionsProps) => {
  const { collections } = props

  return (
    <ul className={styles.thematicCollections}>
      {collections.map(({ key, heading }) => (
        <li key={key}>
          <ThematicCollection heading={heading} />
        </li>
      ))}
    </ul>
  )
}