import { Movies } from '@/components/Movies/Movies'
import type { catalogProps } from '@/components/Catalog/Catalog.types'
import styles from './Catalog.module.css'

export const Catalog = (props: catalogProps) => {
  const { catalog } = props

  return (
    <div className={styles.catalog}>
      {catalog.map(({ key, heading, movies }) => (
        <Movies key={key} heading={heading} movies={movies} />
      ))}
    </div>
  )
}