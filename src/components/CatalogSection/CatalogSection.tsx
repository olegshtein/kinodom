import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { Catalog } from '@/components/Catalog/Catalog'
import styles from './CatalogSection.module.css'

export const CatalogSection = () => {
  return (
    <section className={styles.catalogSection}>
      <Container>
        <div className={styles.heading}>
          <Heading as='h2' variant='xl'>
            Каталог фильмов и сериалов
          </Heading>
        </div>
        <div className={styles.catalog}>
          <Catalog />
        </div>
      </Container>
    </section>
  )
}