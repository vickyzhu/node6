//我们需要什么 就要把他require进来
var Person = require('./person');
//拿到的就是当前person module.exports的对象
var p = new Person('zfpx','7');
/*
console.log(p.name);
console.log(p.age);*/
//这是添加了一个私有的属性和以前的毫无关系
p.aa = 200; //又加了一个aa
//因为home[0]他会先找找到了以后就改掉了
p.home[0] = 200; //查找了改掉
console.log(p.__proto__.home); //[200,2,3]
console.log(p.__proto__.aa);
console.log(module);