import React from 'react'
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.min.css'

export default (props) => {
  const { setScrollable } = props
  if (typeof setScrollable == 'function') {
    setScrollable(true)
  }
  // 注入
  // props.children.props.useInfo = '123'
  //console.log(props.children, 'props')
  return <div>{props.children}</div>
}
