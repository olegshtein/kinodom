import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu'
import type { Props } from './NavigationMenu.types.ts'
import styles from './NavigationMenu.module.css'

export const NavigationMenu = (props: Props) => {
  const { links } = props

  return (
    <BaseUINavigationMenu.Root className={styles.nav}>
      <BaseUINavigationMenu.List className={styles.list}>
        {links.map(({ href, anchor }) => (
          <BaseUINavigationMenu.Item className={styles.item}>
            <BaseUINavigationMenu.Link className={styles.link} href={href}>
              {anchor}
            </BaseUINavigationMenu.Link>
          </BaseUINavigationMenu.Item>
        ))}
      </BaseUINavigationMenu.List>
    </BaseUINavigationMenu.Root>
  )
}
