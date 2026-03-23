import { Container } from '@/components/Container/Container'
import { Logo } from '@/components/Logo/Logo'
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu'
import { ActionsMenu } from '@/components/ActionsMenu/ActionsMenu'
import { Separator } from '@/components/Separator/Separator'
import styles from './Header.module.css'

export const Header = () => {
  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <Logo />
          <NavigationMenu />
          <div className={styles.contentRight}>
            <ActionsMenu />
          </div>
        </div>
        <Separator />
      </Container>
    </header>
  )
}
