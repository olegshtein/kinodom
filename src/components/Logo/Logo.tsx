import styles from '@/components/Logo/Logo.module.css'

export const Logo = () => {
  return (
    <a className={styles.logo} href="/">
      Кино
      <span className={styles.redLogo}>дом</span>
    </a>
  )
}