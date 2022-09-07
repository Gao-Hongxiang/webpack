var a = 1;
function one() {//oneScope
  console.log(a);
  function two() {//twoScope

    function three() {//threeScope
      console.log(a);
    }
    //回到twoScope
  }
  //回到onescope
}