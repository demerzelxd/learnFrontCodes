const express = require('express');
const app = express();
app.listen(80, () => {
    console.log('running')
})
// （1）Express中的中间件本质上就是一个function处理函数。
// （2）中间件函数的参数有三个req、res、next。
// （3）路由函数的参数只有两个req和res。
// app.get( ' / ' ，function( req ，res， next ) { next( ) } )
// 这里的function函数就叫中间件。

// 全局生效的中间件函数
// app.use(function (req, res, next) {
//     console.log('这是一个最简单的中间件函数');
//     // 当前中间件处理结束后必须调用next()函数
//     next();
// });

// 多个中间件和路由共享相同的req和res对象
// 基于此特性，可以在上游的中间件上为req或res对象添加自定义属性或方法，供下游中间件和路由使用
// 创建第一个全局生效的中间件
// app.use(function (req, res, next) {
//     const time = +new Date(); //获取当前时间戳
//     req.time = time; //为req对象挂载自定义属性
//     console.log('第一个中间件被执行');
//     next();
// });
//
// // 创建第二个全局生效的中间件
// app.use(function (req, res, next) {
//     console.log('第二个中间件被执行');
//     next();
// });
//
// // 路由
// app.get('/', function (req, res) {
//     res.send('根地址的get请求成功' + req.time);
// });

// 局部生效的中间件
// 不使用app.use( )方法进行注册，而是在指定路由里面调用的中间件叫局部中间件
// app.get( ' /user ' ，mw1 ，mw2 ，(req ，res)=>{ } )
// app.get( ' /user ' ，[mw1 ，mw2] ，(req ，res)=>{ } )
// 创建第一个局部生效的中间件
// const mw1 = function (req, res, next) {
//     console.log('第一个局部生效的中间件被调用了');
//     next();
// };
//
// // 创建第二个局部生效的中间件
// const mw2 = function (req, res, next) {
//     console.log('第二个局部生效的中间件被调用了');
//     next();
// };
//
// // 创建路由，调用局部中间件
// app.get('/user', mw1,mw2, function (req, res) {
//     res.send('/user地址的get请求成功');
// });

// 绑定到app服务器上的中间件就叫应用级别的中间件。
// 比如app.use( )绑定的全局中间件；app.get( )和app.post( )绑定的局部中间件。

