import React, { Fragment }  from 'react'
import { withRouter } from 'next/router'
import Header from 'next/head'
import LayoutApp from '../../layouts/App'
import axios from 'axios'
import { Typography } from 'antd'
const { Title, Paragraph } = Typography

const Details = ({ data }) => (
  <LayoutApp>
    <Header>
      <title>{data.public_title}</title>
      <meta property="og:image" content={data.share_image_url} />
      <meta property="twitter:type" content="article" />
      <meta name="twitter:image" content={data.share_image_url} />
      <meta name="description" content={data.description} />
    </Header>
    <Item item={data} />
  </LayoutApp>
)


Details.getInitialProps = async (context) => {
  const response = await axios.get(`http://api.haixiao.online/details/${context.query.id}`)
  return {
    data: response.data
  }
}

export default withRouter(Details)


const Item = ({item}) => (
  <Fragment>
    <Typography>
      <Title level={3}>{item.public_title}</Title>
      <Paragraph>
        <div dangerouslySetInnerHTML={{__html: item.free_content}} /></Paragraph>
    </Typography>
  </Fragment>
)