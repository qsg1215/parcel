import React, { useEffect, useState } from 'react'
import styles from './index.less'
import Layout from '@/components/Layout'
import { Button, Drawer } from 'antd'
import { Toast } from 'antd-mobile'
import { addReactDom } from '@/utils'
import {
  getTokenApi,
  getAllWbsApi,
  loginApi,
  callFunctionApi,
} from './services'
import R from 'ramda'

const Home = () => {
  console.log('更新完了')
  const [canCreate, setCanCreate] = useState(false)
  const [visible, setVisible] = useState(false)
  useEffect(() => {
    addReactDom()
    initData()
  }, [])

  const initData = async () => {
    try {
      Toast.loading('加载中..', 0)
      const res = await checkCanCreateApi()
      const is_inspector = R.path(['data', 'data', 'is_inspector'], res)
      setCanCreate(is_inspector === 1)
      const params = {
        inspector: is_inspector,
        // staffCode: scriptUtil.getSessionUserInfo().staffCode,
        offset: 0,
        limit: 100,
        isHistory: 0,
      }
      const listDataRes = await queryFromListApi(params)
      Toast.hide()
    } catch (err) {
      Toast.hide()
    }
  }

  const handleRequest = async () => {
    const res = await getTokenApi()
    localStorage.access_token = res.data.access_token
    const data = await getAllWbsApi()
    const loginRes = await loginApi()
    localStorage.ticket = loginRes.ticket
    const callFunctionRes = await callFunctionApi()

    console.log(data, 'data')
    console.log(loginRes, 'data')
    console.log(callFunctionRes, 'callFunctionRes')
    console.log(loginRes, 'loginRes')
  }

  const onClose = () => {
    setVisible(false)
  }

  return (
    <Layout>
      <div className={styles.home}>
        <Drawer
          // title="选择表单"
          placement="left"
          closable={false}
          onClose={onClose}
          visible={visible}
        >
          <div>请选择检查单据</div>
          <p>Some contents...</p>
          <p>Some contents...</p>
          <p>Some contents...</p>
        </Drawer>
        <Button onClick={handleRequest}>测试请求</Button>
      </div>
    </Layout>
  )
}

export default Home
