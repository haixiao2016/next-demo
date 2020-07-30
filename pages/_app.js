import Header from 'next/head'
import Router from 'next/router'
import React, { useState } from 'react'
import { Spin } from 'antd'
import appWithI18n from 'next-translate/appWithI18n'
import useTranslation from 'next-translate/useTranslation'
import i18nConf from '@/i18n'

const App = ({ Component, pageProps}) => {
  const [spinning, setSpinning] = useState(false)
  const { t } = useTranslation()
  Router.events.on('routeChangeStart', () => {
    setSpinning(true)
  })
  Router.events.on('routeChangeComplete', ()=> setSpinning(false))
  Router.events.on('routeChangeError', ()=> setSpinning(false))
  return (
    <Spin tip={t('common:loading')} spinning={spinning}>
      <Header>next.js</Header>
      <Component {...pageProps} />
    </Spin>
  )
}

export default appWithI18n(App, i18nConf)