import userPortrait from 'fe-sdk-userportrait';
import Cookies from 'js-cookie'

export function isMobile(){
  const isMobile = navigator.userAgent.match(
    /(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i,
  );
  return isMobile
}

export const PUT_CHANNE_NAME_MAP = {
  0: '其它',
  1: '短信',
  2: 'app首页弹窗',
  3: 'app分期支付页弹窗',
  4: 'h5分期支付页弹窗',
  5: 'app首页banner',
  6: 'app个人中心banner',
  7: 'UC手机浏览器广告',
  8: 'pc首页banner',
  9: 'pc个人中心banner',
  20: 'APP开机闪屏',
  21: 'pc个人中心弹屏',
  22: '微信公众号',
  101: '短信-未购用户',
  102: '短信-已购用户'
};

// 业务类型
export const BUSINESS_TYPE_MAP = new Map([
  ['CLASS', '公开课'],
  ['ADSENSE', '广告位'],
  ['CHAT', '嗨聊'],
  ['MESSAGE', '消息系统'],
  ['HEADLINE', '嗨头条']
]);



/**
 * 判断当前环境是否为微信环境
 */
 export function isWeiXinBrowser() {
  const ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('micromessenger') !== -1) {
    return true;
  }
  return false;
}

/**
 * 获取设备来源
 */
 export const getDeviceSource = () => {
  if (!navigator || !navigator.userAgent) {
    return {
      id: 99,
      name: '其他'
    };
  }
  if (!isMobile()) {
    return {
      id: 5,
      name: '电脑PC浏览器'
    };
  } else {
    if (isMobile()) {
      return {
        id: 1,
        name: '移动设备'
      };
    }
    if (isWeixinBrowser()) {
      return {
        id: 3,
        name: '微信H5'
      };
    }
    return {
      id: 4,
      name: '手机浏览器'
    };
  }
};


/**
 * 判断当前环境是否为微信环境
 */

export function userPortraitInit(eventIdList) {
  if (window.location.hostname.match(/^192|^localhost/g)) {
    return;
  }
  // TODO 这里需要多环境配置 赤水的请求地址

  // 初始化赤水SDK
  return userPortrait.init(
    {
      serverUrl: '//api-userportraitdc.reg.highso.com.cn',
      project: 'fe-h5-mkActivity',
      eventIdList
    },
    {
      debug: false,
      autoReady: true,
      fieldAutoFill: false
    }
  );
}

/**
 * 这也是赤水的一个事件, 不晓得做什么的, 从fe-antd-mkactivity 抄过来的
 */
export function trackActivityEnvelop(activityId, data) {
  if (window.location.hostname.match(/^192|^localhost/g)) {
    return;
  }
//   从cookie中获取customerId
  const customerId = decodeURIComponent(Cookies.get('H_U_C')).split(',')[0]
  // /Users/ian/Downloads/myWorkSpace/fe-h5-mkActivity/src/pages/2020_12_12/index.js 102抄过来的额
  // 102: '短信-已购用户'
  const channel =  getUrlParam('ch') || 102; // 不晓得为什么是要默认102, fe-antd-mkactivity中代码
  if (!customerId) {
    console.log('trackActivityEnvelop 缺少customerId');
    return;
  }
  try {
    userPortrait.setConfig('distinctId', String(customerId));
    const contents = {
      customerId: Number(customerId),
      putChannel: String(channel),
      putChannelName: PUT_CHANNE_NAME_MAP[String(channel)],
      ...data
    };
    const sourceType = getDeviceSource();
    userPortrait.track(activityId, contents, {
      distinctId: String(customerId),
      distinctIdType: 6,
      eventType: 2,
      sourceType: sourceType.id
    });
  } catch (e) {
    console.error(e);
  }
}


// 获取Url 参数
export function getUrlParam(name, path = location.href) {
  let result;
  const getParams = (str) => str.substr(str.indexOf('?') + 1).replace(/#.*\?|#.*$/, '&');
  var searchParamsStr = getParams(path);
  const queryParams = new URLSearchParams(`?${searchParamsStr}`);
  result = queryParams.get(name);
  if (result != null) {
    return decodeURIComponent(result);
  } else {
    return null;
  }
}

export const getReportParams = () => {
  const businessType = getUrlParam('businessType');
  const chanceSource = getUrlParam('chanceSource');
  const sourceId = getUrlParam('sourceId');
  const res = {};
  if (businessType) {
    res.businessType = BUSINESS_TYPE_MAP.get(businessType) ?? businessType;
  }
  if (chanceSource) {
    res.chanceSource = CHANCE_SOURCE_MAP.get(chanceSource) ?? chanceSource;
  }
  if (sourceId) {
    res.sourceId = sourceId;
  }
  return res;
};


