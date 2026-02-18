import { Container } from '@/components/Container/Container'
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu'
import { ActionsMenu } from '@/components/ActionsMenu/ActionsMenu'
import { Separator } from '@base-ui/react'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <a className={styles.logo} href="/">
            Кино
            <span className={styles.redLogo}>дом</span>
          </a>
          <NavigationMenu />
          <div className={styles.contentRight}>
            <ActionsMenu />
          </div>
        </div>
        <Separator className={styles.separator} />
      </Container>
    </header>
  )
}
