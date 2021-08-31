import React, { useState } from 'react';

/*
 设计思路
  入参: 头图地址
  是否带有动画图层
  如果带有动画图层, 则需要给定一个动画图层地址

  参数设计:
  url: xxx, 必传
  hasAnimation false 默认非必传
  animationImage:url

  注意响应式设计
*/

export default ({headerParams}) => {
  const {url} = headerParams;
  return <div>
    <img src={url} style={{width:'100%'}}  alt="" />
  </div>
}
