import { Container } from '@/components/Container/Container'
import { Heading } from '@/components/Heading/Heading'
import { Description } from '@/components/Description/Description'
import { Slider } from '@/components/Slider/Slider'
import { data } from '@/config/hero'
import styles from './Hero.module.css'

export const Hero = () => {
  return (
    <section className={styles.hero}>
      <Container>
        <div className={styles.content}>
          <div className={styles.title}>
            <Heading>{data.title}</Heading>
          </div>
          <div className={styles.description}>
            <Description paragraphs={data.description} />
          </div>
          <div className={styles.slider}>
            <Slider />
          </div>
        </div>
      </Container>
    </section>
  )
}