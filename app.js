//引入 express 
const express = require('express')

//引入ejs
const ejs = require('ejs')

//引入路由模块
const router = require('./router/index.js')

//创建实例对象
const app = express()

//开启端口，并监听
app.listen(3008, () => {
  console.log('app at running is http://127.0.0.1:3008')
})

//设置模块引擎为ejs
app.set('views engine', 'ejs')
app.set('views', 'views')

//添加静态资源托管
app.use('/assets', express.static('assets'))
app.use('/uploads', express.static('uploads'))

//引入路由模块，使用路由模块
app.use(router)