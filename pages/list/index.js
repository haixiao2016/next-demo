import React, { Fragment } from "react"
import Header from 'next/head'
import axios from 'axios'
import { Typography } from 'antd'
import Link from 'next/link'

import LayoutApp from '../../layouts/App'
const { Title, Paragraph } = Typography
const Home = ({ list }) => {
  return (
    <LayoutApp>
      <Header>
        <title>列表页面 - next</title>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge,chrome=1" />
        <meta name="viewport" content="width=device-width,initial-scale=1,user-scalable=no,viewport-fit=cover" />
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

Home.getInitialProps = async () => {
  const response = await axios.get("http://api.haixiao.online/list")
  return {
    list: response.data
  }
}

const ListItem = ({item}) => (
  <Fragment>
    <Typography>
      <Title level={3}><Link href={`/details?id=${item.slug}`}>{item.title}</Link></Title>
      <Paragraph>{item.public_abbr}</Paragraph>
    </Typography>
  </Fragment>
)