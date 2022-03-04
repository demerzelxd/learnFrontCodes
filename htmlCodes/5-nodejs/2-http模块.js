// const http = require('http');
// // 创建web服务器实例
// const server = http.createServer();
// // 绑定事件
// server.on('request', (req, resp) => {
//     // console.log('Here is a request.')
//     // const str = '请求路径是 ' + req.url + ', 请求方式是 ' + req.method;
//     // console.log(str)
//     // // 结束并返回str，防止中文乱码
//     // resp.setHeader('Content-Type', 'text/html;charset=utf-8')
//     // resp.end(str)
//
//     let url = req.url;
//     let content = '<h1>404 NOT FOUND</h1>'
//     if (url === '/' || url === '/index.html') {
//         content = '<h1>首页</h1>'
//     } else if (url === '/about.html') {
//         content = '<h1>关于</h1>'
//     }
//     resp.setHeader('Content-Type', 'text/html;charset=utf-8')
//     resp.end(content)
// })
// // 启动服务器
// server.listen(80, () => {
//     console.log('Server is running.')
// })

// 1.1 导入 http 模块
const http = require('http')
// 1.2 导入 fs 模块
const fs = require('fs')
// 1.3 导入 path 模块
const path = require('path')

// 2.1 创建 web 服务器
const server = http.createServer()
// 2.2 监听 web 服务器的 request 事件
server.on('request', (req, res) => {
    // 3.1 获取到客户端请求的 URL 地址
    //     /clock/index.html
    //     /clock/index.css
    //     /clock/index.js
    const url = req.url
    // 3.2 把请求的 URL 地址映射为具体文件的存放路径
    // const fpath = path.join(__dirname, url)
    // 5.1 预定义一个空白的文件存放路径
    let fpath = ''
    if (url === '/') {
        fpath = path.join(__dirname, './clock/index.html')
    } else {
        fpath = path.join(__dirname, './clock', url)
    }
    console.log(fpath)

    // 4.1 根据“映射”过来的文件路径读取文件的内容
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
        // 4.2 读取失败，向客户端响应固定的“错误消息”
        if (err) {
            res.end('404 Not found.')
        }
        // 4.3 读取成功，将读取成功的内容，响应给客户端
        res.end(dataStr)
    })
})
// 2.3 启动服务器
server.listen(80, () => {
    console.log('server running at http://127.0.0.1')
})

