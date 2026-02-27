import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import {
  DiscountsOptions
} from '@/components/DiscountsOptions/DiscountsOptions'
import styles from './DiscountsSection.module.css'

export const DiscountsSection = () => {
  return (
    <section>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>Скидки на кино</Heading>
        </div>
        <div className={styles.options}>
          <DiscountsOptions />
        </div>
      </Container>
    </section>
  )
}