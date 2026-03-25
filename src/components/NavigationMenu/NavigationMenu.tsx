import { NavigationMenu as BaseUINavigationMenu } from '@base-ui/react/navigation-menu'
import { navigationMenuItems } from '@/config/navigationMenu'
import styles from './NavigationMenu.module.css'

export const NavigationMenu = () => {
  return (
    <BaseUINavigationMenu.Root className={styles.nav}>
      <BaseUINavigationMenu.List className={styles.list}>
        {navigationMenuItems.map(({ key, href, anchor }) => (
          <BaseUINavigationMenu.Item className={styles.item} key={key}>
            <BaseUINavigationMenu.Link className={styles.link} href={href}>
              {anchor}
            </BaseUINavigationMenu.Link>
          </BaseUINavigationMenu.Item>
        ))}
      </BaseUINavigationMenu.List>
    </BaseUINavigationMenu.Root>
  )
}
