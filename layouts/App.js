import React, { useState, useEffect } from 'react'
import { Layout, Menu, Select } from 'antd'
import { withRouter } from 'next/router'
import Link from 'next-translate/Link'
import useTranslation from 'next-translate/useTranslation'
import "./app.less"

const { Header, Content, Footer } = Layout

const LayoutApp = (props) => {
  const { t, lang: currentLang } = useTranslation()
  console.log(currentLang)
  const [currentRoute, setCurrentRoute] = useState()
  const [lang] = useState(currentLang)
  const menuList = [{
    route: "/",
    name: t("layout:menuList.home")
  }, {
    route: "/list",
    name: t("layout:menuList.article")
  }, {
    route: "/mock",
    name: t("layout:menuList.staticPage")
  }, {
    route: "/serverRender",
    name: t("layout:menuList.ssr")
  }]
  // 根据当前的路由信息改变选中item
  useEffect(() => {
    setCurrentRoute(props.router.route)
  }, []);
  // 切换语言,不使用默认的切换事件
  function handleChangeLang(nextLang) {
    if(window) {
      const url = window.location.href.replace(`/${lang}/`, `/${nextLang}/`)
      window.location.href = url
    }
  }
  return (
    <Layout className="layout">
      <Header>
        <Menu theme="dark" mode="horizontal" selectedKeys={[currentRoute]}>
          {
            menuList.map(v =>
              (<Menu.Item key={v.route}>
                <Link href={v.route}><a>{v.name}</a></Link>
              </Menu.Item>)
            )
          }
          <Select className="layout-select__right" defaultValue={lang} onChange={handleChangeLang}>
            <Select.Option key="en" value="en">English</Select.Option>
            <Select.Option key="cn" value="cn">简体中文</Select.Option>
          </Select>
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