import React, { useEffect } from 'react'
import 'antd/dist/antd.css'
import 'antd-mobile/dist/antd-mobile.min.css'
import Stats from 'stats-js'

export default (props) => {
  let stats
  useEffect(() => {
    // 刷新率监听
    stats = new Stats()
    stats.showPanel(0) // 0: fps, 1: ms, 2: mb, 3+: custom
    document.body.appendChild(stats.dom)
    animate()
  }, [])

  function animate() {
    requestAnimationFrame(animate)
    stats.begin()
    stats.end()
  }

  const { setScrollable } = props
  if (typeof setScrollable == 'function') {
    setScrollable(true)
  }
  // 注入
  // props.children.props.useInfo = '123'
  //console.log(props.children, 'props')
  return <div>{props.children}</div>
}
