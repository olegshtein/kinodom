import AnonimIcon from '@/assets/icons/anonim.svg?react'
import styles from './AuthorizationLink.module.css'

export const AuthorizationLink = () => {
  return (
    <a className={styles.root} href="#">
      <AnonimIcon />
    </a>
  )
}