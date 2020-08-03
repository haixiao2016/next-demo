/**
 * 根据当前的url中的语言，转化为html识别的语言
 * @param {*} { __NEXT_DATA__ } 当前page的props
 * @param {*} i18n i18n 配置文件
 * @returns html - lang
 */
export const getHtmlLang = ({ __NEXT_DATA__ = {} } ,i18n) => {
  const { props = {} } = __NEXT_DATA__
  let lang = props.lang || i18n.defaultLanguage
  lang = i18n.aliasHtmlLanguages[lang] || props.lang
  return lang
}