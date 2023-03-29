const mystery = new Array(3)
  .fill(2)
  .map((x, y) => x + y)
  .filter(x => x % 2 === 0);
  console.log(mystery);

//   const m = (num) =>{
//     (function(num) {
//       console.log(num * 2);
//     })(5);
//   })(10);
//   console.log(m(9));

class Mystery {}
const mysteryProto = Object.getPrototypeOf(Mystery);
console.log(mysteryProto.toString());


function mysteryXYZ() {
    let num = 0;
    return { getNum: () => num, increment: () => num++ };
  }
  const { getNum, increment } = mysteryXYZ();
  const { getNum: getNum2, increment: increment2 } = mysteryXYZ();
  console.log(increment());
  console.log(increment());
  console.log(increment2());
 
  console.log(getNum(), getNum2());
  console.log([2, 1, 4, 3].sort((val1, val2) => {
    return val2 - val1;
  }));


  const fun = ()=>{
    Promise.resolve(1)
  .then(
    (value) => console.log(value * 2),
    (value) => console.log(value * 3)
  )
  .then(() => { throw new Error('Oh No!'); })
  .catch((error) => 3)
  .finally(() => console.log(4))
  .then(console.log);
  }
  console.log(fun());
console.log(7);


const arr = [2, 3, 4];
const [mysteryOne, ...rest] = arr;
const mysteryTwo = [...rest, ...arr, mysteryOne];
console.log(mysteryTwo);


function* generator() {
    const value = yield 2;
    yield value + 3;
    yield value + 5;
  }
  const generatorObj = generator();
  console.log(generatorObj.next(3).value);
  console.log(generatorObj.next(5).value);
  console.log(generatorObj.next(7).value);