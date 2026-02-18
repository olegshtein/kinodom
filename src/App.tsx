import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection'
import { CatalogSection } from '@/components/CatalogSection/CatalogSection'
import { advantagesSectionContent } from './config/advantagesSection'
import './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSection {...advantagesSectionContent} />
      <CatalogSection />
    </>
  )
}

export default App
