// 内置模块
// 自定义模块，在自定义模块定义的变量方法等，只能在改模块内部访问，其他模块无法使用
// 第三方模块
// console.log(module)
// module.exports()可以向外共享成员
var customModule = require('./自定义模块');
console.log(customModule);
