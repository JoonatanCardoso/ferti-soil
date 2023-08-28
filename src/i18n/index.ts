import i18n from 'i18next'
import { initReactI18next } from 'react-i18next'

import { ResourceI18n } from '@/i18n/locates'

i18n.use(initReactI18next).init({
  ns: Object.keys(ResourceI18n.pt),
  fallbackLng: 'pt',
  resources: ResourceI18n,
  lng: 'pt',
})

export default i18n
