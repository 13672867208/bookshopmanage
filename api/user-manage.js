import req from '../fetch/index.js'

const config = {
  listUsers: {
    url: '/webauth/user/listUsers',
    method: 'post'
  },
  findInformationById: {
    url: '/webauth/login/findInformationById',
    method: 'post'
  },
  addUser: {
    url: '/webauth/user/addUser',
    method: 'post'
  },
  deleteUser: {
    url: '/webauth/user/deleteUser',
    method: 'post'
  },
  updateUserById: {
    url: '/webauth/user/updateUserById',
    method: 'post'
  },
  findUserById: {
    url: '/webauth/user/findUserById',
    method: 'post'
  },
  uploadImage: {
    url: '/webauth/uploadImage',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
