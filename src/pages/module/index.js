import React from 'react'
import { Button } from 'antd'
import math from './components/commonJs_math'
import Layout from '@/components/Layout'
import './components/demo1/b' // cmj 缓存问题
import './components/demo2/b' // 引用拷贝还是值拷贝问题
import './components/AMD/a' // 引用拷贝还是值拷贝问题

export default () => {
  const hanldeClick = () => {
    console.log('点击了')
  }
  return (
    <Layout>
      <div>
        <Button onClick={hanldeClick}>测试</Button>
      </div>
    </Layout>
  )
}
