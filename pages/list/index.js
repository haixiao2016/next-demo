import React, { Fragment } from "react"
import Header from 'next/head'
import request from '@/utils/request'
import { Typography } from 'antd'
import Link from 'next/link'

import LayoutApp from '@/layouts/App'
const { Title, Paragraph } = Typography
const Home = ({ list }) => {
  return (
    <LayoutApp>
      <Header>
        <title>列表页面 - next</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
        <meta name="keywords" content="next测试页面,静态页面,首页,渲染的数据是静态数据,海晓的测试网站" />
        <meta name="description" content="渲染的数据是静态数据，海晓的测试网站" />
        <meta name="baidu-site-verification" content="4UjWmkyo3W" />
      </Header>
      <div>
        {
          list.map(({ object }) => {
            return <ListItem key={object.data.id} item={object.data} />
          })
        }
      </div>
    </LayoutApp>
  )
}

export default Home

export async function getServerSideProps (ctx) {
  const response = await request.get("http://localhost:8888/list")
  return {
    props: {
      list: response.data
    }
  }
}

const ListItem = ({item}) => (
  <Fragment>
    <Typography>
      <Title level={3}>
        <Link href={`/details?id=${item.slug}`}>
          <a>{item.title}</a>
        </Link>
      </Title>
      <Paragraph>{item.public_abbr}</Paragraph>
    </Typography>
  </Fragment>
)