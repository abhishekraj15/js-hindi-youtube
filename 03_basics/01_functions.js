function sayMyName(num) {
  console.log(num);
  console.log("H");
  console.log("I");
  console.log("T");
  console.log("E");
  console.log("S");
  console.log("H");
}

//sayMyName(5);

function addTwoNumbers(number1, number2) {
  console.log(number1 + number2);
}

addTwoNumbers(3, 4);
//why it will not call function
// console.log(addTwoNumbers(2, 3));

function addTwoNumbers(number1, number2) {
  let result = number1 + number2;
  return result;
  //return number1 + number2;
}

const result = addTwoNumbers(3, 5);

//console.log("Result: ", result);

function loginUserMessage(username = "sam") {
  if (!username) {
    console.log("PLease enter a username");
    return;
  }
  return `${username} just logged in`;
}

// console.log(loginUserMessage("hitesh"))
// console.log(loginUserMessage("hitesh"))

//use rest operator
function calculateCartPrice(val1, val2, ...num1) {
  console.log(val1 + val2);
  return num1;
}

//console.log(calculateCartPrice(200, 400, 500, 2000));

const user = {
  username: "hitesh",
  prices: 199,
};

function handleObject(anyobject) {
  console.log(
    `Username is ${anyobject.username} and price is ${anyobject.prices}`
  );
}

//handleObject(user);
// addTwoNumbers(3,4); why it will not call function

// handleObject({
//   username: "sam",
//   prices: 399,
// });

const myNewArray = [200, 400, 100, 600];

function returnSecondValue(getArray) {
  return getArray[1];
}

// console.log(returnSecondValue(myNewArray));
//console.log(returnSecondValue([200, 400, 500, 1000]));
