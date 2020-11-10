import req from '../fetch/index.js'

const config = {
  addHotgood: {
    url: '/pc/hotgood/addHotgood',
    method: 'post'
  },
  listHotgoods: {
    url: '/pc/hotgood/listHotgoods',
    method: 'post'
  },
  updateHotgoodById: {
    url: '/pc/hotgood/updateHotgoodById',
    method: 'post'
  },
  deleteHotgood: {
    url: '/pc/hotgood/deleteHotgood',
    method: 'post'
  },
  updateHotgoodNumber: {
    url: '/pc/hotgood/updateHotgoodNumber',
    method: 'post'
  },
  listGoods: {
    url: '/pc/slideshow/listGoods',
    method: 'post'
  },
  findHotgoodById: {
    url: '/pc/hotgood/findHotgoodById',
    method: 'post'
  },
  queryHotgoodNumber: {
    url: '/pc/hotgood/queryHotgoodNumber',
    method: 'post'
  }

}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
