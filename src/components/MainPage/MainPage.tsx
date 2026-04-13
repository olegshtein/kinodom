import { Hero } from '@/components/Hero/Hero'
import {
  AdvantagesSection
} from '@/components/AdvantagesSection/AdvantagesSection'
import { CatalogSection } from '@/components/CatalogSection/CatalogSection'
import {
  ThematicCollectionsSection
} from '@/components/ThematicCollectionsSection/ThematicCollectionsSection'
import {
  DiscountsSection
} from '@/components/DiscountsSection/DiscountsSection'

export const MainPage = () => {
  return (
    <>
      <Hero />
      <AdvantagesSection />
      <CatalogSection />
      <ThematicCollectionsSection />
      <DiscountsSection />
    </>
  )
}