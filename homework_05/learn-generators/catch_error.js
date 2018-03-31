
// }

function *upper (items) {
    for (let value of items) {
      try{
        yield value.toUpperCase();
      } catch (errFromIt) {
        yield null;
      }
    }
  }
  

  let bad_items = ["a", "B", 1, "c"];
  for (let item of upper(bad_items)) {
    console.log(item);
  }