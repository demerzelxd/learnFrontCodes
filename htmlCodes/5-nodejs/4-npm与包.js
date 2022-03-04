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
