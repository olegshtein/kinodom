import SearchIcon from '@/assets/icons/search.svg?react'
import styles from './SearchButton.module.css'

export const SearchButton = () => {
  return (
    <button className={styles.root}>
      <SearchIcon /> Поиск
    </button>
  )
}
