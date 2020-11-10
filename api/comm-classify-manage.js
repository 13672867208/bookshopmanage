import req from '../fetch/index.js'

const config = {
  addGoodClassify: {
    url: '/pc/goodClassify/addGoodClassify',
    method: 'post'
  },
  queryGoodClassify: {
    url: '/pc/goodClassify/queryGoodClassify',
    method: 'post'
  },
  findGoodClassifyById: {
    url: '/pc/goodClassify/findGoodClassifyById',
    method: 'post'
  },
  updateGoodClassifyById: {
    url: '/pc/goodClassify/updateGoodClassifyById',
    method: 'post'
  },
  deleteGoodClassifyById: {
    url: '/pc/goodClassify/deleteGoodClassifyById',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
