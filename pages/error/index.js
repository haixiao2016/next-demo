import React  from 'react'
import Header from 'next/head'
import LayoutApp from '../../layouts/App'
import axios from 'axios'
import { Result } from 'antd'

const PageNotFound = ({ data }) => (
  <LayoutApp>
    <Header>
      <title>404</title>
    </Header>
    <Result
        status="404"
        title="页面错误"
        subTitle="当前页面不存在"
      />
  </LayoutApp>
)


PageNotFound.getInitialProps = async () => {
  const response = await axios.get(`http://api.haixiao.online/mock/404`)
  return {
    data: response.data.data
  }
}

export default PageNotFound