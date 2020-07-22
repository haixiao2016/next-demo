import React from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'

const { Header, Content, Footer } = Layout
const LayoutApp = props => (
  <Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" defaultSelectedKeys={['1']}>
        <Menu.Item key="1"><Link href="/">文章列表</Link></Menu.Item>
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 40 }}>
        <div className="site-layout-content" style={{minHeight:400, background: "#fff", padding: 10}}>{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2020 Created by next.haixiao.online</Footer>
  </Layout>
)

export default LayoutApp