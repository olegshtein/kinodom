import type { ReactNode } from 'react'

export type Props = {
  as: 'h1' | 'h2' | 'h3'
  variant: 'display' | 'xl' | 'lg'
  children: ReactNode
}