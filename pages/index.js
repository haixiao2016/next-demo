import React from "react"
import Header from 'next/head'
import { Result } from 'antd'
import "./index.less"

import LayoutApp from '../layouts/App'
const Home = () => {
  return (
    <LayoutApp>
      <Header>
        <title>静态页面 - next</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
        {/* twitter */}
        <meta name="keywords" content="next测试页面,静态页面,首页,渲染的数据是静态数据,海晓的测试网站" />
        <meta name="description" content="渲染的数据是静态数据，海晓的测试网站" />
        <meta name="baidu-site-verification" content="4UjWmkyo3W" />
        <meta name="google-site-verification" content="ttJp-Kr0xxX5KFbshRefYPagU-Wfv0yehHJSgdKO5Lo" />
        <meta name="twitter:title" content="静态页面 - next" />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content="渲染的数据是静态数据，我是分享之后的文案CZCZCZCZCZ" />
        <meta name="twitter:image" content="http://ssr.haixiao.online/images/share.jpeg" />
      </Header>
      <Result
        status="500"
        title="这是静态页面"
        subTitle="渲染的数据是静态数据"
      />
    </LayoutApp>
  )
}

export default Home