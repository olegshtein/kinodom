import type { thematicCollectionProps } from '@/components/ThematicCollection/ThematicCollection.types'

export type thematicCollectionsProps = {
  collections: Array<
    thematicCollectionProps & {
      key: string
    }
  >
}