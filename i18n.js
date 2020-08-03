module.exports = {
  allLanguages: ['en', 'cn'],
  aliasHtmlLanguages: { // 是否语言别名， html标签读取此配置
    'cn': 'zh-CN'
  },
  defaultLanguage: 'en',
  defaultLangRedirect: 'lang-path', // 域名访问
  loadLocaleFrom: (lang, ns) =>
    import(`./public/locales/${lang}/${ns}.json`).then((m) => m.default),
  pages: { // 在页面注入语言包
    '*': ['common', 'layout'],
    '/': [],
    '/mock': ['mock'],
    '/serverRender': ['mock'],
  },
}