// <!--浏览器是js的前端运行环境-->
// <!--nodejs是js的后端运行环境，拥有自己的一套api，无法调用dom和bom等浏览器专用的api-->
// <!--node内置模块fs，path，http等-->
// <!--第三方api模块express，mysql等-->
// cls清空控制台
//
// <!--fs模块用于操作文件-->
const fs = require('fs')
const path = require('path')
// __dirname表示当前执行所处的目录
// console.log(__dirname)
// 以utf8格式读取文件内容并打印err和dataStr的值
// fs.readFile('C:\\Downloads\\nodejs\\day1\\code\\files\\1.txt', 'utf8', function (err, dataStr) {
//     console.log(err); // null
//     console.log(dataStr); // 111
// })

// 写入文件（覆盖写入）
// fs.writeFile('C:\\Downloads\\nodejs\\day1\\code\\files\\写入.txt', '写入文件内容11', 'utf8', function (err) {
//     if (err) {
//         console.log('文件写入失败：', err.message);
//     }
// })

// fs.readFile('C:\\\\Downloads\\\\nodejs\\\\day1\\\\code\\\\files\\\\成绩.txt', 'utf8', function (err, dataStr) {
//     if (err) {
//         console.log('读取失败', err.message)
//     }
//     console.log(dataStr)
//     var scoreArr = dataStr.split(' ');
//     var newArr = [];
//     scoreArr.forEach((item) => {
//         newArr.push(item.replace('=', ':'))
//     })
//     var newStr = newArr.join('\r\n');
//     console.log(newStr)
//     fs.writeFile('C:\\\\Downloads\\\\nodejs\\\\day1\\\\code\\\\files\\\\成绩-成功.txt', newStr, 'utf8', function (err) {
//         if (err) {
//             console.log('写入失败', err.message)
//         }
//     })
// })

// path路径模块
// path.join将多个路径片段拼接成一个完整的路径字符串
// path.basename用来从路径字符串中将文件名解析出来
// var pathStr = path.join('/a', '/b/c', '../../', './d', 'e');
// console.log(pathStr) // \a\d\e
//
// var fullFileName = path.basename('/a/b/c/jquery.min.js');
// console.log(fullFileName) // jquery.min.js
// var withoutFileName = path.basename('/a/b/c/jquery.min.js', '.min.js');
// console.log(withoutFileName) // jquery
// var extname = path.extname('/a/b/c/jquery.min.js');
// console.log(extname) // .js

// 将index.html拆分为css，js，html
// \s为空白字符，\S为非空白字符
// 注意要把/转义
const cssReg = /<style>[\s\S]*<\/style>/;
const jsReg = /<script>[\s\S]*<\/script>/;

fs.readFile(path.join(__dirname, './asset/index.html'), 'utf8', (err, dataStr) => {
    if (err) {
        console.log('读取html文件失败:' + err.message);
        return;
    }
    // 提取css文件
    resolveCSS(dataStr);
    // 提取js文件
    resolveJS(dataStr);
    // 提取html文件
    resolveHTML(dataStr);
})

function resolveCSS (dataStr) {
    // 使用正则取出对应的内容
    var cssArr = cssReg.exec(dataStr);
    var cssStr = cssArr[0];
    // 去除<style></style>
    var newCssStr = cssStr.replace('<style>', '').replace('</style>', '');
    // 写入css文件
    fs.writeFile(path.join(__dirname, './asset/CSS/index.css'), newCssStr, err => {
        if (err) {
            console.log('写入CSS文件失败:' + err.message);
        }
    })
}

function resolveJS (dataStr) {
    // 使用正则取出对应的内容
    var jsArr = jsReg.exec(dataStr);
    var jsStr = jsArr[0];
    // 去除<script></script>
    var newJsStr = jsStr.replace('<script>', '').replace('</script>', '');
    // 写入js文件
    fs.writeFile(path.join(__dirname, './asset/JS/index.js'), newJsStr, err => {
        if (err) {
            console.log('写入JS文件失败:' + err.message);
        }
    })
}

function resolveHTML (dataStr) {
    // 使用正则替换对应的内容
    var newHtmlStr = dataStr.replace(cssReg, '<link rel="stylesheet" href="../CSS/index.css">')
        .replace(jsReg, '<script src="../JS/index.js"></script>');
    // 写入js文件
    fs.writeFile(path.join(__dirname, './asset/HTML/index.html'), newHtmlStr, err => {
        if (err) {
            console.log('写入HTML文件失败:' + err.message);
        }
    })
}
