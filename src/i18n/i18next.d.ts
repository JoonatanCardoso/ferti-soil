import { ResourceI18nType } from '@/i18n/locates/type'
import 'i18next'

declare module 'i18next' {
  export interface CustomTypeOptions {
    resources: ResourceI18nType
  }
}
