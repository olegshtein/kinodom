import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection'
import { CatalogSection } from '@/components/CatalogSection/CatalogSection'
import { ThematicCollectionsSection } from '@/components/ThematicCollectionsSection/ThematicCollectionsSection'
import { DiscountsSection } from '@/components/DiscountsSection/DiscountsSection'
import './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSection />
      <CatalogSection />
      <ThematicCollectionsSection />
      <DiscountsSection />
    </>
  )
}

export default App
