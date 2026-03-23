import { Separator } from '@/components/Separator/Separator'
import { Container } from '@/components/Container/Container'
import { Logo } from '@/components/Logo/Logo'
import { LinksGrid } from '@/components/LinksGrid/LinksGrid'
import styles from '@/components/Footer/Footer.module.css'

export const Footer = () => {
  return (
    <footer>
      <Separator />
      <Container>
        <div className={styles.content}>
          <div className={styles.logo}>
            <Logo />
          </div>
          <div className={styles.links}>
            <LinksGrid />
          </div>
          <div className={styles.copyright}>
            © КиноДом 2020
          </div>
        </div>
      </Container>
    </footer>
  )
}