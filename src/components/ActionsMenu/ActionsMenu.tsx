import SearchIcon from '@/assets/icons/search.svg?react'
import BellIcon from '@/assets/icons/bell.svg?react'
import AnonimIcon from '@/assets/icons/anonim.svg?react'
import styles from './ActionsMenu.module.css'

export const ActionsMenu = () => {
  return (
    <div className={styles.root}>
      <button className={styles.searchButton}>
        <SearchIcon /> Поиск
      </button>
      <button className={styles.notificationsButton}>
        <BellIcon />
      </button>
      <a className={styles.authorizationLink} href="#">
        <AnonimIcon />
      </a>
    </div>
  )
}