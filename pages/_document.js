import Document, { Html, Head, Main, NextScript } from 'next/document'
import i18nConf from '@/i18n'
import { getHtmlLang } from '@/utils/common'
export default class MyDocument extends Document {
  render() {
    return (
      <Html lang={getHtmlLang(this.props, i18nConf)}>
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}