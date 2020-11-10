import req from '../fetch/index.js'

const config = {
  listOrders: {
    url: '/pc/order/listOrders',
    method: 'post'
  },
  findOrderById: {
    url: '/pc/order/findOrderById',
    method: 'post'
  },
  updateOrderState: {
    url: '/pc/order/updateOrderState',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
