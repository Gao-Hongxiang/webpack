(function anonymous(name, age, _callback) {
  var _x = this._x;
  var _counter = 5;
  var _done = function () {
    _callback();
  };
  var _fn0 = _x[0];
  _fn0(name, age);
  if (--_counter === 0) _done();
  var _fn1 = _x[1];
  _fn1(name, age, function () {
    if (--_counter === 0) _done();
  });
  var _fn2 = _x[2];
  var _promise2 = _fn2(name, age);
  _promise2.then(function (_result2) {
    if (--_counter === 0) _done();
  });
  var _fn3 = _x[3];
  var _promise3 = _fn3(name, age);
  _promise3.then(function (_result3) {
    if (--_counter === 0) _done();
  });
  var _fn4 = _x[4];
  var _promise4 = _fn4(name, age);
  _promise4.then(function (_result4) {
    if (--_counter === 0) _done();
  });
});