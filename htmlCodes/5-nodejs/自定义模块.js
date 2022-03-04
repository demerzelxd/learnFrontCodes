module.exports.customVar = 123
module.exports.sayHello = function () {
    console.log('hello')
}

// 覆盖module.exports对象
module.exports = {
    name: 'dada',
    sayHi() {
        console.log('hi')
    }
}
// exports和module.exports指向同一个对象
// node.js遵循了commonJS的模块化规范，规定了模块的特性和各模块之间如何相互依赖

