import Vue from 'vue'
import VueI18n from 'vue-i18n'
import querystring from 'querystring'
import storage from '../libraries/storage'

import en from './en'
import zh from './zh'

const DEFAULT_LOCALE = 'en'

const qs = querystring.parse(window.location.search.slice(1))

Vue.use(VueI18n)

const i18n = new VueI18n({
  locale: storage.get('setting.locale') || qs.lang || DEFAULT_LOCALE,
  fallbackLocale: 'en',
  messages:{
    en,
    zh,
  },
})

export default i18n

export function changeLocale (locale) {
  storage.set('setting.locale', locale)
  i18n.locale = locale
}
