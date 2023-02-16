/**
* @description 模拟原型链属性查询
* @param {object} object 被查询对象
* @param {prop} 想要查询的属性
*/

function getValue(object, prop) {
  //首次传参第一个参数必须为object
  if ((typeof(object) !== "object") && (object !== null)) {
    throw 'the first argument of getValue must be a object'
  }
  //首次传入参数为null或者查询到最顶端依然找不到属性则返回undefined
  if (object === null) {
    return undefined
  }
  //第二个参数必须为字符串
  if (typeof(prop) !== "string") {
    throw 'the second argument of getValue must be a string'
  }
  //如果该对象有这个属性则返回该属性的值
  if (object.hasOwnProperty(prop)) {
    return object[prop];
  }
  //如果该对象没有这个属性则递归调用getValue方法
  return getValue(Object.getPrototypeOf(object), prop);
}

 //test