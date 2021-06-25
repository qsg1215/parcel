// const ParcelProxyServer = require('parcel-proxy-server')
import ParcelProxyServer from 'parcel-proxy-server'
// configure the proxy server
const server = new ParcelProxyServer({
  entryPoint: './example/index.html',
  proxies: {
    // add proxies here
    '/yongxiang': {
      target: 'http://pmtest.yongx.net:8052/',
      changeOrigin: true,
    },
    '/project': {
      target: 'http://pm-app-test.yongx.net:8045/',
      changeOrigin: true,
    },
    '/inter-api': {
      target: 'http://pm-app-test.yongx.net:8045/',
      changeOrigin: true,
    },
  },
})

// start up the server
server.listen(8000, () => {
  console.log('Parcel proxy server has started')
})
