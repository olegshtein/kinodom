import { Advantage } from '@/components/Advantage/Advantage'
import type { discountsOptionsProps } from '@/components/DiscountsOptions/DiscountsOptions.types'
import styles from './DiscountsOptions.module.css'

export const DiscountsOptions = (props: discountsOptionsProps) => {
  const { options } = props

  return (
    <ul className={styles.discountsOptions}>
      {options.map(({ key, imageName, title, description }) => (
        <li key={key}>
          <Advantage imageName={imageName} title={title} description={description} />
        </li>
      ))}
    </ul>
  )
}