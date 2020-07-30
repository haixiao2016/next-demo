import Header from 'next/head'
import Router from 'next/router'
import React, { useState } from 'react'
import { appWithTranslation } from '../i18n'
import { Spin } from 'antd'

const App = ({ Component, pageProps}) => {
  const [spinning, setSpinning] = useState(false)
  Router.events.on('routeChangeStart', (url) => {
    setSpinning(true)
  })
  Router.events.on('routeChangeComplete', ()=> setSpinning(false))
  Router.events.on('routeChangeError', ()=> setSpinning(false))
  return (
    <Spin tip="页面加载中" spinning={spinning}>
      <Header>next.js</Header>
      <Component {...pageProps} />
    </Spin>
  )
}

export default appWithTranslation(App)