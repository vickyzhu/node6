function Person(name,age){
    this.name = name
    this.age = age;
}
Person.prototype.home = [1,2,3];
Person.prototype.aa =100;
//我们要导出一个模块让别人使用
//exports导出模块
console.log(exports);
//{person :Person}
//exports.person = Person;
module.exports = Person;
//exports = Person
