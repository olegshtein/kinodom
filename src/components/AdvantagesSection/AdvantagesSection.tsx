import { Heading } from '@/components/Heading/Heading'
import { Container } from '@/components/Container/Container'
import { AdvantagesList } from '@/components/AdvantagesList/AdvantagesList'
import { advantagesSectionContent } from '@/config/advantagesSection'
import styles from './AdvantagesSection.module.css'

export const AdvantagesSection = () => {
  const { title, advantagesList } = advantagesSectionContent

  return (
    <section className={styles.advantagesSection}>
      <Container>
        <div className={styles.title}>
          <Heading as='h2' variant='xl'>
            {title}
          </Heading>
        </div>
        <div className={styles.advantagesList}>
          <AdvantagesList advantagesList={advantagesList} />
        </div>
      </Container>
    </section>
  )
}