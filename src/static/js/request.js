//------------file request.js------------
//const axios = require('axios');
import axios from 'axios-https-proxy-fix';  //这个插件可以代理访问 https网站。https://github.com/axios/axios/issues/925

const axios_proxy = axios.create({
  withCredentials: false,         //跨域
  proxy: {
    host: '192.168.13.19',
    port: 8080,
    auth: {
      username: 'zhangchao',
      password: 'zc52135213.'
    }
  }
});

export default {
  'axios_proxy': axios_proxy,
}
