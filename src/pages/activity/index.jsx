import React, { useState } from 'react';
import Header from './components/Header/index'
import H5 from './H5';
import PC from './PC'
import {isMobile} from '@/utils'
import 'antd/dist/antd.css';

// 整个背景色渐变需要设计成为参数, 需要从接口获取
const data = {
  url: 'https://myitsky.com/20201210214516.jpg',
}

export default () => {
  const params = {
    activityId: 753
  }
  return <div>
   {
     isMobile() ? 
     <H5 {...params}></H5>:<PC {...params}></PC>
   }
  </div>
}
