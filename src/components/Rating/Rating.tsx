import type { ratingProps } from '@/components/Rating/Rating.types'
import styles from './Rating.module.css'

export const Rating = (props: ratingProps) => {
  const { rating } = props

  return (
    <div className={styles.rating}>{rating}</div>
  )
}