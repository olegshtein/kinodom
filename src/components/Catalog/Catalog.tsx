import { Movies } from '@/components/Movies/Movies'
import styles from './Catalog.module.css'

export const Catalog = () => {
  return (
    <div className={styles.catalog}>
      <Movies heading='Комедии' />
      <Movies heading='Драмы' />
      <Movies heading='Фэнтези' />
      <Movies heading='Триллеры' />
      <Movies heading='Детективы' />
    </div>
  )
}