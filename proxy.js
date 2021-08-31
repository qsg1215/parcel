// const ParcelProxyServer = require('parcel-proxy-server')
import ParcelProxyServer from 'parcel-proxy-server'
// configure the proxy server
const server = new ParcelProxyServer({
  entryPoint: './example/index.html',
  parcelOptions:{
    sourceMaps:false
  },
  proxies: {
    // add proxies here
    '/wealth': {
      target: 'http://h5-marketing-activities.reg.highso.com.cn',
      changeOrigin: true,
    },
    '/discount': {
      target: 'http://h5-marketing-activities.reg.highso.com.cn',
      changeOrigin: true,
    },
    '/passport-api': {
      target: 'http://w1.highso.com.cn',
      changeOrigin: true,
    },
    '/upcore': {
      target: 'http://w1.highso.com.cn',
      changeOrigin: true,
    },
    
    
  },
})
// start up the server
server.listen(8000, () => {
  console.log('Parcel proxy server has started')
})
