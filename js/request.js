const devBaseURL = 'https://dev.lexiangpingou.cn/summary_api.php'
const proBaseURL = 'https://www.lexiangpingou.cn/summary_api.php'
const instance = axios.create({
  baseURL: proBaseURL,
  timeout: 5000,
  method: 'POST',
  headers: {
    'Content-Type': 'application/json'
  }
})

instance.interceptors.request.use(config => {
  // console.log('request 拦截 ')
  return config
}, err => {
  console.log('request 拦截  出错')
  return err
})

instance.interceptors.response.use(res => {
  // console.log(' response 拦截')
  return res.data
}, err => {
  if (err && err.response) {
    switch (err.response.status) {
      case 400:
        console.log("请求错误");
        break;
      case 401:
        console.log("未授权访问");
        break;
      default:
        console.log("其他错误信息");
    }
  }
  return err;
})

window.request = instance