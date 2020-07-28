import React, { useState, useEffect } from 'react'
import { Layout, Menu } from 'antd'
import Link from 'next/link'
import { withRouter } from 'next/router'

const { Header, Content, Footer } = Layout
const menuList = [{
  route: "/",
  name: "首页"
}, {
  route: "/list",
  name: "文章列表"
},{
  route: "/mock",
  name: "静态渲染"
},{
  route: "/serverRender",
  name: "服务器渲染"
}]

const LayoutApp = (props) => {
  const [currentRoute, setCurrentRoute] = useState()
  // 根据当前的路由信息改变选中item
  useEffect(() => {
    setCurrentRoute(props.router.route)
  }, []);

  return (<Layout className="layout">
    <Header>
      <Menu theme="dark" mode="horizontal" selectedKeys={[currentRoute]}>
        {
          menuList.map(v =>
            (<Menu.Item key={v.route}>
              <Link href={v.route}><a>{v.name}</a></Link>
            </Menu.Item>)
          )
        }
      </Menu>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 40 }}>
      <div className="site-layout-content" style={{ minHeight: 400, background: "#fff", padding: 10 }}>{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2020 Created by next.haixiao.online <a href="https://twitter.com/share?text=分享标题&url=http://ssr.haixiao.online" target="_blank">Twitter</a></Footer>
  </Layout>
  )
}

export default withRouter(LayoutApp)