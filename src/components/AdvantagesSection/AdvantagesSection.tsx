import { Heading } from '@/components/Heading/Heading'
import { Container } from '@/components/Container/Container'
import { AdvantagesList } from '@/components/AdvantagesList/AdvantagesList'
import type { Props } from './AdvantagesSection.types'
import styles from './AdvantagesSection.module.css'

export const AdvantagesSection = (props: Props) => {
  const { title, advantagesList } = props

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