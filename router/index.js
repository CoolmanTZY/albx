//引入 用户表的控制器模块
const pagesController = require('../controller/pagesController')
//封装路由模块
const express = require('express')

const router = express.Router()

//******************* 前端页面 */
router.get('/', pagesController.getIndex)
  .get('/list', pagesController.getIist)
  .get('/detail', pagesController.getDetail)
  //      后台页面
  //主页面
  .get('/admin', pagesController.getAdminIndex)
  //登录账号页面
  .get('/admin/login', pagesController.getAdminLogin)
  // 用户页面
  .get('/admin/users', pagesController.getAdminUsers)
  //文章 > 分类目录
  .get('/admin/categories', pagesController.getCategoriesPage)
  //评论页面
  .get('/admin/comments', pagesController.getCommentsPage)
  //设置 > 导航菜单
  .get('/admin/nav-menus', pagesController.getNavMenusPage)
  //修改密码
  .get('/admin/password-reset', pagesController.getPasswordResetPage)
  //写文章页面
  .get('/admin/post-add', pagesController.getPostAddPage)
  //所有文章页面
  .get('/admin/posts', pagesController.getPostsPage)
  //我的个人资料
  .get('/admin/profile', pagesController.getProfilePage)
  //网站设置
  .get('/admin/settings', pagesController.getSettingsPage)
  //设置 > 图片轮播
  .get('/admin/slides', pagesController.getSlidesPage)


module.exports = router