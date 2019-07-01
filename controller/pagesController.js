//向外暴露数据  

//       前端页面
module.exports.getIndex = (req, res) => {
  res.render('index.ejs')
}
module.exports.getIist = (req, res) => {
  res.render('list.ejs')
}
module.exports.getDetail = (req, res) => {
  res.render('detail.ejs')
}

//      后台渲染页面
module.exports.getAdminIndex = (req, res) => {
  res.render('admin/index.ejs')
}
module.exports.getAdminLogin = (req, res) => {
  res.render('admin/login.ejs')
}
module.exports.getAdminUsers = (req, res) => {
  res.render('admin/users.ejs')
}
module.exports.getCategoriesPage = (req, res) => {
  res.render('admin/categories.ejs')
}
module.exports.getCommentsPage = (req, res) => {
  res.render('admin/comments.ejs')
}
module.exports.getNavMenusPage = (req, res) => {
  res.render('admin/nav-menus.ejs')
}
module.exports.getPasswordResetPage = (req, res) => {
  res.render('admin/password-reset.ejs')
}
module.exports.getPostAddPage = (req, res) => {
  res.render('admin/post-add.ejs')
}
module.exports.getPostsPage = (req, res) => {
  res.render('admin/posts.ejs')
}
module.exports.getProfilePage = (req, res) => {
  res.render('admin/profile.ejs')
}
module.exports.getSettingsPage = (req, res) => {
  res.render('admin/settings.ejs')
}
module.exports.getSlidesPage = (req, res) => {
  res.render('admin/slides.ejs')
}