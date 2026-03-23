import styles from './LinksGrid.module.css'

export const LinksGrid = () => {
  return (
    <div className={styles.linksGrid}>
      <div className={styles.column}>
        <div className={styles.label}></div>
        <ul className={styles.linksList}>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
      <div className={styles.column}>
        <div className={styles.label}></div>
        <ul className={styles.linksList}>
          
        </ul>
      </div>
      <div className={styles.column}>
        <div className={styles.label}></div>
        <ul className={styles.linksList}></ul>
      </div>
      <div className={styles.column}>
        <div className={styles.label}></div>
        <ul className={styles.linksList}>
          
        </ul>
      </div>
      <div className={styles.column}>
        <div className={styles.label}></div>
        <ul className={styles.linksList}>
          
        </ul>
      </div>
    </div>
  )
}