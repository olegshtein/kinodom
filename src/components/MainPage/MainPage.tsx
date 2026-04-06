import { Header } from '@/components/Header/Header'
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
import { Footer } from '@/components/Footer/Footer'

export const MainPage = () => {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSection />
      <CatalogSection />
      <ThematicCollectionsSection />
      <DiscountsSection />
      <Footer />
    </>
  )
}