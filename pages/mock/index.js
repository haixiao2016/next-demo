import React, { Fragment }  from 'react'
import Header from 'next/head'
import LayoutApp from '../../layouts/App'
import axios from 'axios'
import { Typography } from 'antd'
const { Title, Paragraph } = Typography

const MockDetails = ({ data }) => (
  <LayoutApp>
    <Header>
      <title>{data.public_title}</title>
      <meta name="twitter:title" content={data.public_title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.share_image_url} />
    </Header>
    <Item item={data} />
  </LayoutApp>
)


MockDetails.getInitialProps = async () => {
  const response = await axios.get(`http://api.haixiao.online/mock/details`)
  return {
    data: response.data.data
  }
}

export default MockDetails


const Item = ({item}) => (
  <Fragment>
    <Typography>
      <Title level={3}>{item.public_title}</Title>
      <Paragraph>
        <div dangerouslySetInnerHTML={{__html: item.free_content}} /></Paragraph>
    </Typography>
  </Fragment>
)