var myArray = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j"];

var push = function (array, myInput) {
  var newArray = [myInput];
  array.forEach((element, i) => {
    newArray[i + 1] = element;
  });
  myArray = newArray;
  console.log(myArray);
};
var pull = function (array) {
  var newArray = [];
  array.forEach((element, i) => {
    if (i < array.length - 1) {
      newArray[i] = element;
    } else {
      console.log("Deleting element:", element);
    }
  });
  myArray = newArray;
  console.log(myArray);
};
myInput = "Pushed element";
push(myArray, myInput);
pull(myArray);
