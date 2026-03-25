import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import {
  DiscountsOptions
} from '@/components/DiscountsOptions/DiscountsOptions'
import { discountsSectionContent } from '@/config/discountsSection'
import styles from './DiscountsSection.module.css'

export const DiscountsSection = () => {
  const { heading, options } = discountsSectionContent

  return (
    <section>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>{heading}</Heading>
        </div>
        <div className={styles.options}>
          <DiscountsOptions options={options} />
        </div>
      </Container>
    </section>
  )
}