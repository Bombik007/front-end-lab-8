let max = process.argv[2];

let FizzBuzz = function* (){
  let num = 1;

  while (num <= max) {
    let val = num;
    num++;
    if(val% 15 === 0) {
      val = "FizzBuzz";
    } else if (val % 3 === 0) {
      val = "Fizz";
    } else if (val % 5 === 0) {
      val = "Buzz";
    }

    yield val;
  }
}();


for (var n of FizzBuzz) {
  console.log(n);
}