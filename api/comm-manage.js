import req from '../fetch/index.js'

const config = {
  addGood: {
    url: '/pc/good/addGood',
    method: 'post'
  },
  queryGoodClassify: {
    url: '/pc/good/queryGoodClassify',
    method: 'post'
  },
  listGoods: {
    url: '/pc/good/listGoods',
    method: 'post'
  },
  updateGoodState: {
    url: '/pc/good/updateGoodState',
    method: 'post'
  },
  updateGoodById: {
    url: '/pc/good/updateGoodById',
    method: 'post'
  },
  deleteGood: {
    url: '/pc/good/deleteGood',
    method: 'post'
  },
  findGoodsById: {
    url: '/pc/good/findGoodsById',
    method: 'post'
  }

}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
