import req from '../fetch/index.js'

const config = {
  addSlideshow: {
    url: '/pc/slideshow/addSlideshow',
    method: 'post'
  },
  listSlideshows: {
    url: '/pc/slideshow/listSlideshows',
    method: 'post'
  },
  findSlideshowById: {
    url: '/pc/slideshow/findSlideshowById',
    method: 'post'
  },
  listGoods: {
    url: '/pc/slideshow/listGoods',
    method: 'post'
  },
  updateSlideshowState: {
    url: '/pc/slideshow/updateSlideshowState',
    method: 'post'
  },
  updateSlideshowById: {
    url: '/pc/slideshow/updateSlideshowById',
    method: 'post'
  },
  deleteSlideshow: {
    url: '/pc/slideshow/deleteSlideshow',
    method: 'post'
  }
}
const request = function (funcName, requestParam) {
  return req(config[funcName].url, config[funcName].method, requestParam, {}, config[funcName].fileConfig)
}
export default request
