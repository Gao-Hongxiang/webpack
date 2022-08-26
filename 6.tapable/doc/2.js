class Parent{
  add() {
    this.add2();
  }
}
class Child extends Parent{
  add2() {
    console.log('add2');
  }
}
let c = new Child();
c.add();

let p = new Parent();
p.add();

//老师，子类的taps和父类的_x都是fn列表是吧？不太理解 为什么要多定义一个_x变量
// hookInstance._x = options.taps.map(tapInfo=>tapInfo.fn);
//tapInfo={type:'sync',fn,name:'1'}


