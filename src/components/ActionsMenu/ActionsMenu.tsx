import styles from './ActionsMenu.module.css'

export const ActionsMenu = () => {
  return (
    <div className={styles.root}>
      <button className={styles.searchButton}>🔎 Поиск</button>
      <button className={styles.notificationsButton}>🔔</button>
      <a
        className={styles.authorizationLink}
        href="#"
      >👤</a>
    </div>
  )
}