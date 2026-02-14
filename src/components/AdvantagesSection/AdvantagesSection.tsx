import styles from './AdvantagesSection.module.css'
import { Heading } from '@/components/Heading/Heading'
import { Container } from '@/components/Container/Container'

export const AdvantagesSection = () => {
  return (
    <section className={styles.advantagesSection}>
      <Container>
        <div className={styles.title}>
          <Heading as={'h2'} variant={'xl'}>
            Преимущества КиноДома
          </Heading>
        </div>
        <div className={styles.advantagesList}>

        </div>
      </Container>
    </section>
  )
}