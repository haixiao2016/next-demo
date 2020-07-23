import React from "react"
import Header from 'next/head'
import { Result } from 'antd';
// import style from "./index.scss"

import LayoutApp from '../layouts/App'
const Home = () => {
  return (
    <LayoutApp>
      <Header>
        <title>静态页面 - next</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
        <meta name="twitter:card" content="summary" />
        <meta property="og:image" content="http://ssr.haixiao.online/images/share.jpeg" />
        <meta name="twitter:image" content="http://ssr.haixiao.online/images/share.jpeg" />
        <meta name="description" content="渲染的数据是静态数据，我是分享之后的文案CZCZCZCZCZ" />
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