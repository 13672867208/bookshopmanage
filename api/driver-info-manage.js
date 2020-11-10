import req from '../fetch/index.js'

const config = {
  addDriver: {
    url: '/pc/driver/addDriver',
    method: 'post'
  },
  listDrivers: {
    url: '/pc/driver/listDrivers',
    method: 'post'
  },
  findDriverById: {
    url: '/pc/driver/findDriverById',
    method: 'post'
  },
  updateDriverById: {
    url: '/pc/driver/updateDriverById',
    method: 'post'
  },
  deleteDriver: {
    url: '/pc/driver/deleteDriver',
    method: 'post'
  },
  queryStoreLocalClassify: {
    url: '/pc/store/queryStoreLocalClassify',
    method: 'post'
  }

}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
