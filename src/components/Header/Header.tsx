import { Container } from '@/components/Container/Container'
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu'
import { ActionsMenu } from '@/components/ActionsMenu/ActionsMenu'
import { Separator } from '@base-ui/react'
import styles from './Header.module.css'

export const Header = () => {
  const navigationMenuLinks = [
    { href: '/movies', anchor: 'Фильмы' },
    { href: '/series', anchor: 'Сериалы' },
    { href: '/selections', anchor: 'Подборки' },
  ]

  return (
    <header className={styles.header}>
      <Container>
        <div className={styles.content}>
          <a className={styles.logo} href="/">
            Кино
            <span className={styles.redLogo}>дом</span>
          </a>
          <NavigationMenu links={navigationMenuLinks} />
          <div className={styles.contentRight}>
            <ActionsMenu />
          </div>
        </div>
        <Separator className={styles.separator} />
      </Container>
    </header>
  )
}
