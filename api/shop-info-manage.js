import req from '../fetch/index.js'

const config = {
  queryStoreLocalClassify: {
    url: '/pc/store/queryStoreLocalClassify',
    method: 'post'
  },
  addStore: {
    url: '/pc/store/addStore',
    method: 'post'
  },
  listStores: {
    url: '/pc/store/listStores',
    method: 'post'
  },
  findStoreById: {
    url: '/pc/store/findStoreById',
    method: 'post'
  },
  updateStoreById: {
    url: '/pc/store/updateStoreById',
    method: 'post'
  },
  deleteStore: {
    url: '/pc/store/deleteStore',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
