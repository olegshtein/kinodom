import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import {
  ThematicCollections
} from '@/components/ThematicCollections/ThematicCollections'
import styles from './ThematicCollectionsSection.module.css'

export const ThematicCollectionsSection = () => {
  return (
    <section className={styles.thematicCollectionsSection}>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>Тематические подборки</Heading>
        </div>
        <div className={styles.collections}>
          <ThematicCollections />
        </div>
      </Container>
    </section>
  )
}