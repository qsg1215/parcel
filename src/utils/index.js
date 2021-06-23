import Md5 from 'js-md5'
import moment from 'moment'
import { appSecret } from '@/utils/constant'

// 获取单据状态
export const getBillStatus = (detail) => {
  if (!detail) return { text: '', color: '' }
  if (detail['yx_pm.ischeck'] === 0) {
    return { text: '审批中', color: '#2db7f5' }
  } else {
    switch (detail['yx_pm.status']) {
      case 1:
        return { text: '整改中', color: '#f50' }
      case 2:
        return { text: '整改完成', color: '#87d068' }
      default:
        return { text: '已完成', color: '#108ee9' }
    }
  }
}

// 添加新的react
export const addReactDom = () => {
  var myScript = document.createElement('script')
  myScript.type = 'text/javascript'
  myScript.async = false
  myScript.src =
    'https://as.alipayobjects.com/g/component/??react/15.6.1/react.min.js,react/15.6.1/react-dom.min.js'
  document.body.appendChild(myScript)
}

// 处理不符合条件的文本数据，并且转换时间显示格式
export const formatTextValue = (text, formatter) => {
  if (text && text !== 'undefined' && text !== '') {
    return formatter ? moment(text.replace(/-/g, '/')).format(formatter) : text
  }
  return ''
}

/*
sign	是	string	sign=Md5(timestamp+appSecret+pars) sign为时间戳+appSecret+参数以后的32位小写md5值 当接口为get请求时：pars为url中除token、timestamp、sign以外的参数按顺序累加（注意只需要参数值，不需要参数名）
当接口为post请求时：pars为body中的json字符串
*/
export const getSign = (timestamp, params, method) => {
  let paramStr = ''
  if (method === 'get') {
    paramStr = '1'
  } else {
    paramStr = JSON.stringify(params)
  }
  console.log(paramStr, 'paramStr')

  // 看签名文档
  const paramsStr = `${timestamp + appSecret}${paramStr}`
  return Md5(paramsStr)
}

export const callFunction = (moduleName, actionName, params = {}) => {
  return new Promise((resolve, reject) => {
    window.scriptUtil
      .callFunction(`yx_pm.${moduleName}`, `yx_pm.${actionName}`, params)
      .then((res) => {
        resolve(res)
      })
      .catch((err) => {
        reject(err)
      })
  })
}

export const checkRes = (res) => {
  if (!res) {
    return false
  }
  if (res.code != 200) {
    return false
  }
  if (res.data && res.data.data && res.data.code !== 0) {
    return false
  }
  return true
}

// 解决滚动
export const removeOtherDom = () => {
  const currentNode = document.querySelector('#appPreviewWrapper')
  const { parentNode } = currentNode
  // 创建新节点
  const newCurrentNode = document.createElement('div')
  newCurrentNode.id = 'appPreviewWrapper_new'
  const ourNode = currentNode.querySelector('.warper')
  parentNode.replaceChild(newCurrentNode, currentNode)
  newCurrentNode.appendChild(ourNode)
  window.onhashchange = () => {
    window.location.reload()
  }
}
