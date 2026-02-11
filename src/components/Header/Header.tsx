import { Container } from '@/components/Container/Container'
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.tsx'
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
        </div>
        <Separator className={styles.separator} />
      </Container>
    </header>
  )
}
