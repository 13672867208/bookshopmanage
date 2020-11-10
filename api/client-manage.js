import req from '../fetch/index.js'

const config = {
  listCustomers: {
    url: '/pc/customer/listCustomers',
    method: 'post'
  }

}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
