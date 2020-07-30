module.exports = {
  allLanguages: ['en', 'cn'],
  defaultLanguage: 'en',
  defaultLangRedirect: 'lang-path', // 域名访问
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: { // 在页面注入语言包
    '*': ['common', 'layout'],
    '/': [],
    '/mock': ['mock'],
  },
}