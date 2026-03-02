import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { Catalog } from '@/components/Catalog/Catalog'
import { catalogSectionContent } from '@/config/catalogSection'
import styles from './CatalogSection.module.css'

export const CatalogSection = () => {
  const { heading, catalog } = catalogSectionContent

  return (
    <section className={styles.catalogSection}>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>
            {heading}
          </Heading>
        </div>
        <div className={styles.catalog}>
          <Catalog catalog={catalog} />
        </div>
      </Container>
    </section>
  )
}