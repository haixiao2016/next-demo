import React, { Fragment } from 'react'
import Header from 'next/head'
import LayoutApp from '@/layouts/App'
import request from '@/utils/request'
import { Typography } from 'antd'
const { Title, Paragraph } = Typography
import useTranslation from 'next-translate/useTranslation'

const ServerRender = ({ data }) => {
  const { t } = useTranslation()
  return (
    <LayoutApp>
      <Header>
        <title>{data.public_title}</title>
        <meta name="keywords" content="next服务器渲染,服务器渲染,首页,渲染的数据是静态数据,海晓的测试网站" />
        <meta name="description" content={data.description} />
        <meta name="baidu-site-verification" content="4UjWmkyo3W" />
        <meta name="twitter:title" content={data.public_title} />
        <meta name="twitter:card" content="summary" />
        <meta name="twitter:description" content={data.description} />
        <meta name="twitter:image" content={data.share_image_url} />
      </Header>
      <div>{t('mock:name')}</div>
      <Item item={data} />
    </LayoutApp>
  )
}

ServerRender.getInitialProps = async () => {
  const response = await request.get(`http://api.haixiao.online/mock/details`);
  return {
    data: response.data.data
  };
};

export default ServerRender


const Item = ({ item }) => (
  <Fragment>
    <Typography>
      <Title level={3}>{item.public_title}</Title>
      <Paragraph>
        <div dangerouslySetInnerHTML={{ __html: item.free_content }} /></Paragraph>
    </Typography>
  </Fragment>
)