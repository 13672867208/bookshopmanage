import req from '../fetch/index.js'

const config = {
  listUserMenus: {
    url: '/webauth/menu/listUserMenus',
    method: 'post'
  },
  listMenus: { // 查询菜单列表接口
    url: '/webauth/menu/listMenus',
    method: 'post'
  },
  findMenuById: { // 修改时候查询
    url: '/webauth/menu/findMenuById',
    method: 'post'
  },
  updateMenuById: { // 修改菜单接口
    url: '/webauth/menu/updateMenuById',
    method: 'post'
  },
  deleteMenu: { // 删除接口
    url: '/webauth/menu/deleteMenu',
    method: 'post'
  },
  addMenu: { // 新增接口
    url: '/webauth/menu/addMenu',
    method: 'post'
  },
  findInformationById: {
    url: '/webauth/login/findInformationById',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
