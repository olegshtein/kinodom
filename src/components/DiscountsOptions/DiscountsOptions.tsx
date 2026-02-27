import { Advantage } from '@/components/Advantage/Advantage'
import styles from './DiscountsOptions.module.css'

export const DiscountsOptions = () => {
  const description1 = [
    'Смотри кино, принимай участие в развитие сервиса: пиши рецензии, собирай подборки из фильмов и сериалов, проходи квизы.',
    'Копи баллы, и получай скидку 50% на любой тариф при следующей оплате подписки на КиноДом',
  ]
  const description2 = [
    'Просто приложи фото действуещего студенческого билета при оформлении подписки и наслаждайся кино!',
    'Важно!Скидка действует до конца текущего года.Студенческая скидка не сумируеться с другими скидками и акциями сервиса',
  ]

  return (
    <ul className={styles.discountsOptions}>
      <li>
        <Advantage imageName='rick-sanchez.png' title='Скидка 50% на активность в сервисе' description={description1} />
      </li>
      <li>
        <Advantage imageName='djin.png' title='Скидка для студентов 50%' description={description2} />
      </li>
    </ul>
  )
}