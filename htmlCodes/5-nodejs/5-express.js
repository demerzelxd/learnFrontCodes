// express是对内置的http模块的封装，更简便
// 可以作为web网页资源服务器与api接口服务器
const express = require('express');
// 创建web服务器
const app = express();
// 调用app.listen启动服务器
app.listen(80, () => {
    console.log('running')
})
// 监听get
// app.get('/user', ((req, res) => {
//     console.log('监听get')
//     console.log(req.url);
//     console.log(req.query)
//     // 发送json对象
//     res.send({name: 'dada', age: 123});
// }))

// app.get('/user/:id', ((req, res) => {
//     console.log('监听get')
//     console.log(req.url);
//     console.log(req.params)
//     // 发送json对象
//     res.send({name: 'dada', age: 123});
// }))

// 托管静态资源，abc为访问前缀，该参数可以省略
// 访问http://localhost/abc/index.html
// app.use('/abc', express.static('./clock'))
// nodemon可以监听项目文件的变动，代码修改后重启项目，方便开发

// express的路由
// 为了方便对路由模块化管理，不建议直接路由挂载到app下，不建议app.get()，而是将路由器抽离为单独的模块
const userRouter = require('./router/userRouter');
// 使用app.use注册路由模块
app.use(userRouter)
