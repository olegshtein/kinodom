import '@/components/Container/Container.css'
import type { Props } from './Container.types.ts'

export const Container = (props: Props) => {
  const { children } = props

  return <div className="container">{children}</div>
}
