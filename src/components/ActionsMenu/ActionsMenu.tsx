import { SearchButton } from '@/components/SearchButton/SearchButton.tsx'
import {
  NotificationsButton
} from '@/components/NotificationsButton/NotificationsButton'
import {
  AuthorizationLink
} from '@/components/AuthorizationLink/AuthorizationLink.tsx'
import styles from './ActionsMenu.module.css'

export const ActionsMenu = () => {
  return (
    <div className={styles.root}>
      <SearchButton />
      <NotificationsButton />
      <AuthorizationLink />
    </div>
  )
}