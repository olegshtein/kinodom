import { Advantage } from '@/components/Advantage/Advantage'
import type { Props } from './AdvantagesList.types'
import styles from './AdvantagesList.module.css'

export const AdvantagesList = (props: Props) => {
  const { advantagesList } = props

  return (
    <ul className={styles.advantagesList}>
      {advantagesList.map((advantage) => (
        <li className={styles.advantage}>
          <Advantage {...advantage} />
        </li>
      ))}
    </ul>
  )
}