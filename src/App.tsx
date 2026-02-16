import { Header } from './components/Header/Header'
import { Hero } from './components/Hero/Hero'
import { AdvantagesSection } from './components/AdvantagesSection/AdvantagesSection'
import { advantagesSectionContent } from './config/advantagesSection.ts'
import './styles'

function App() {
  return (
    <>
      <Header />
      <Hero />
      <AdvantagesSection {...advantagesSectionContent} />
    </>
  )
}

export default App
