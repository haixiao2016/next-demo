import React, { Fragment }  from 'react'
import Header from 'next/head'
import LayoutApp from '@/layouts/App'
import axios from 'axios'
import { Typography } from 'antd'
import { withTranslation } from '@/i18n'
const { Title, Paragraph } = Typography

const MockDetails = ({ data, t }) => (
  <LayoutApp>
    <Header>
      <title>{data.public_title}</title>
      <meta name="keywords" content="next测试页面,静态页面,首页,渲染的数据是静态数据,海晓的测试网站" />
      <meta name="description" content={data.description} />
      <meta name="baidu-site-verification" content="4UjWmkyo3W" />
      <meta name="twitter:title" content={data.public_title} />
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:description" content={data.description} />
      <meta name="twitter:image" content={data.share_image_url} />
    </Header>
    <div>{t('name')}</div>
    <Item item={data} />
  </LayoutApp>
)

export async function getStaticProps() {
  const response = await axios.get(`http://api.haixiao.online/mock/details`)
  return {
    props: {
      data: response.data.data
    }
  }
}

export default withTranslation('mock')(MockDetails)


const Item = ({item}) => (
  <Fragment>
    <Typography>
      <Title level={3}>{item.public_title}</Title>
      <Paragraph>
        <div dangerouslySetInnerHTML={{__html: item.free_content}} /></Paragraph>
    </Typography>
  </Fragment>
)