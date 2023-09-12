getPlayerInfo = function (role, country) {
  console.log(`${this.firstName} ${this.lastName}, ${role} from ${country}`);
};

// object 1
const player1 = {
  firstName: "Virat",
  lastName: "Kohli",
  age: 33,

  // method of player 1
  getAge: function () {
    console.log(`${this.firstName}'s age is ${this.age}`);
  },
};

// object 2
const player2 = {
  firstName: "Hardik",
  lastName: "Pandya",
  age: 28,
};

// ********************apply**********************
Function.prototype.customApply = function (context, args = []) {
    if (!Array.isArray(args)) {
      throw new Error(
        "Reminder, apply method takes array of arguments (2nd to nth)"
      );
    }
    let currentContext = context || globalThis;
  
    // Symbol() ensures that new method won't override existing methods of currentContext
    // to create a unique property on the passed object to prevent existing property overwritten.
    let newProp = Symbol();
  
    currentContext[newProp] = this; // this refers to the  function on which this method is beong called
    let result = currentContext[newProp](...args);
    delete currentContext[newProp];
  
    return result;
  };
  
  console.log(getPlayerInfo.customApply(player1, ["Batsman", "India"]));
  console.log(getPlayerInfo.customApply(player2, ["All-Rounder", "India"]));


//   ****************************************call***************************************************

  // 💡 polyfill for call method
Function.prototype.customCall = function (context, ...args) {
    // context is first argument, if no argument passed then assign global window object
    let currentContext = context || globalThis; // passed object or global object
  
    // Symbol() ensures that new method won't override existing methods of currentContext
    let newProp = Symbol();
  
    currentContext[newProp] = this; // assigning this ( getPlayerInfo ) to newProp of currentContext
  
    let result = currentContext[newProp](...args);
    delete currentContext[newProp];
  
    return result;
  };
  
  getPlayerInfo.customCall(player2, "Batsman", "India");
  // Virat Kohli, Batsman from India
  
  getPlayerInfo.customCall(player2, "All-Rounder", "India");
  // Hardik Pandya, All-Rounder from India
  
  player1.getAge();
  // player2 is borrowing the method of player1 here
  player1.getAge.call(player2);
  player1.getAge.customCall(player2);


//   ******************************************bind*************************************************

// 👉 3) Using call method
Function.prototype.customBind = function (context, ...args) {
    let borrowedFunc = this;
    return function (...outerArgs) {
      return borrowedFunc.call(context, ...args, ...outerArgs);
    };
  };
  
  const player1FullInfoCustom = getPlayerInfo.customBind(
    player1,
    "Batsman",
    "India"
  );
  console.log(player1FullInfoCustom(33));
  
  const player2FullInfoCustom = getPlayerInfo.customBind(
    player2,
    "All-Rounder",
    "India"
  );
  console.log(player2FullInfoCustom(28));
  
  // 💡Use of bind (Binding a function to an object)
  
  name = "jayesh";
  const person = {
    name: "jc",
    getName: function () {
      console.log(this.name);
    },
  };
  
  person.getName(); // jc normal case
  
  const getNameOutside = person.getName;
  getNameOutside(); //  jayesh, "this" refers to global
  
  const getNameBounded = person.getName.bind(person);
  getNameBounded(); // jc person obj bounded




  // 💡uses of call and apply in object constructors chaining 👇

// parent function constructor
function Human(name, age) {
    this.name = name;
    this.age = age;
  }
  
  // child function constructor
  function Jay(name, age, gender) {
    Human.call(this, name, age);
    this.gender = gender;
  }
  
  // child function constructor
  function John(name, age, gender) {
    Human.call(this, name, age);
    this.gender = gender;
  }
  
  const jayesh = new Jay("jayesh", 24, "Male");
  const john = new John("john", 22, "Male");
  
  console.log(jayesh); // { name: 'jayesh', age: 24, gender: 'Male' }
  console.log(john); // { name: 'john', age: 22, gender: 'Male' }