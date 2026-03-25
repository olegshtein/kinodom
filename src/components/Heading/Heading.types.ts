import type { ReactNode } from 'react'

export type Props = {
  as: 'h1' | 'h2' | 'h3' | 'h4'
  variant: 'display' | 'xl' | 'lg' | 'md'
  children: ReactNode
}