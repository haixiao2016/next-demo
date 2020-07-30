import React, { useState, useEffect, useContext } from 'react'
import { Layout, Menu, Select } from 'antd'
import { withRouter } from 'next/router'
import { i18n, Link } from '@/i18n'
import { I18nContext } from 'next-i18next'

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
  const { i18n: { language } } = useContext(I18nContext)
  const [currentRoute, setCurrentRoute] = useState()
  const [lang, setLang] = useState(language)
  // 根据当前的路由信息改变选中item
  useEffect(() => {
    setCurrentRoute(props.router.route)
  }, []);
  // 切换语言
  function handleChangeLang(lang) {
    setLang(lang)
    i18n.changeLanguage(lang)
  }
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
      <Select defaultValue={lang} style={{ width: 120 }} onChange={handleChangeLang}>
        <Select.Option value="en">English</Select.Option>
        <Select.Option value="cn">简体中文</Select.Option>
      </Select>
    </Header>
    <Content style={{ padding: '0 50px', marginTop: 40 }}>
      <div className="site-layout-content" style={{ minHeight: 400, background: "#fff", padding: 10 }}>{props.children}</div>
    </Content>
    <Footer style={{ textAlign: 'center' }}>Design ©2020 Created by next.haixiao.online <a href="https://twitter.com/share?text=分享标题&url=http://ssr.haixiao.online" target="_blank">Twitter</a></Footer>
  </Layout>
  )
}

export default withRouter(LayoutApp)