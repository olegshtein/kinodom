import { Container } from '@/components/Container/Container'
import { NavigationMenu } from '@/components/NavigationMenu/NavigationMenu.tsx'
// import styles from './Header.module.css'

export const Header = () => {
  const links = [
    { href: '/', anchor: 'Кинодом' },
    { href: '/movies', anchor: 'Фильмы' },
    { href: '/series', anchor: 'Сериалы' },
    { href: '/selections', anchor: 'Подборки' },
  ]

  return (
    <header>
      <Container>
        <NavigationMenu links={links} />
      </Container>
    </header>
  )
}
