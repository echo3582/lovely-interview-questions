/**
* @description 模拟new都干了什么
* @param {function} constructorFuction 构造函数
*/

function newOperator(constructorFunction) {
  //如果传入的第一个参数类型不是函数则抛出错误
  if (!(constructorFunction instanceof Function)) {
    throw 'the first argument must be a function'
  }
  //参考new.target指向的是构造函数
  newOperator.target = constructorFunction;
  //创建原型为constructorFuction.prototype的一个对象
  let instance = Object.create(constructorFunction.prototype);
  //获取除了构造函数之外的参数数组
  let argumentsArray = Array.from(arguments).slice(1);
  //将constructorFunction的this指向instance对象
  //把argumentsArray传给constructorFunction函数并执行
  constructorFunction.apply(instance, argumentsArray);
  //返回instance对象
  return instance;
}

