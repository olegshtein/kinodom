import { Movies } from '@/components/Movies/Movies'
import styles from './Catalog.module.css'

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <Movies />
    </div>
  )
}