import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import {
  ThematicCollections
} from '@/components/ThematicCollections/ThematicCollections'
import { thematicCollectionsSectionContent } from '@/config/thematicCollectionsSection'
import styles from './ThematicCollectionsSection.module.css'

export const ThematicCollectionsSection = () => {
  const { heading, collections } = thematicCollectionsSectionContent

  return (
    <section className={styles.thematicCollectionsSection}>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>{heading}</Heading>
        </div>
        <div className={styles.collections}>
          <ThematicCollections collections={collections} />
        </div>
      </Container>
    </section>
  )
}