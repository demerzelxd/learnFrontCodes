// nodejs中，第三方模块又叫做包
const DT_FORMAT = require('./格式化时间的自定义模块');
console.log(DT_FORMAT.dateFormat(new Date()));

// npm install moment相当于npm i moment
// npm install vue@2.33指定版本会覆盖掉原版本
const moment = require('moment');
console.log(moment().format('YYYY-MM-DD HH:mm:ss'));
// 快速创建package.json
// npm init -y
// 只在在开发的时候使用，生产不会用到的包，npm i moment -D相当于npm install moment --save-dev
// 包分为项目包（只在node_modules中，开发依赖包、核心依赖包）和全局包（npm i nrm -g卸载npm uninstall nrm -g）

// package-json必须包括name,version,main分别代表包名，版本号，包入口
// 模块在第一次加载后会被缓存。 这也意味着多次调用 require() 不会导致模块的代码被执行多次。
// 内置模块的加载优先级最高，require('fs') 始终返回内置的 fs 模块，即使在 node_modules 目录下有名字相同的包也叫做 fs
// 使用 require() 加载自定义模块时，必须指定以 ./ 或 ../ 开头的相对路径。否则，node 会把它当作内置模块或第三方模块进行加载。
// 如果传递给 require() 的模块标识符不是一个内置模块，也没有以 ‘./’ 或 ‘../’ 开头，则 Node.js 会从当前文件的父目录开始，尝试从 /node_modules 文件夹中加载第三方模块。
