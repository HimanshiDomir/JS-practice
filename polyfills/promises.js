// ********************Promise**********************

const { error } = require("console");

function MyPromise(executor) {
  let onResolve;
  let onReject;
  let value = '';
  let error = '';
  let isCalled = false;
  let isFulfilled = false;
  let isRejected = false;

  function resolve(val) {
    isFulfilled = true; // to handle syncs promise resolve
    value = val;
    if (typeof onResolve === 'function' && !isCalled) {
      onResolve(val);
      isCalled = true;
    }
  }
  function reject(err) {
    isRejected = true; // to handle syncs promise reject
    error = err;
    if (typeof onReject === 'function' && !isCalled) {
      onReject(err);
      isCalled = true;
    }
  }
  this.then = function (thenCallback) {
    onResolve = thenCallback;
    if (!isCalled && isFulfilled) { // to handle asyncs promise resolve
      onResolve(value);
      isCalled = true;
    }
    return this;
  }

  this.catch = function (catchCallback) {
    onReject = catchCallback;
    if (!isCalled && isRejected) { // to handle syncs promise reject
      onReject(error);
      isCalled = true;
    }
    return this;
  }
  executor(resolve, reject);

}


let myPromise = new MyPromise(function executor(resolve, reject) {
  setTimeout(() => {
    resolve(1);
  }, 1000)
});
let myPromise1 = new MyPromise(function executor(resolve, reject) {
  resolve(1);
});

myPromise.then((val)=> console.log(val)).catch((err) => console.log(err));
myPromise1.then((val)=> console.log(val)).catch((err) => console.log(err));







// ********************Promise.All**********************
function myPromiseAll(taskList) {
  //to store results 
  const results = [];

  //to track how many promises have completed
  let promisesCompleted = 0;

  // return new promise
  return new Promise((resolve, reject) => {

    taskList.forEach((promise, index) => {
      //if promise passes
      promise.then((val) => {
        //store its outcome and increment the count 
        results[index] = val;
        promisesCompleted += 1;

        //if all the promises are completed, 
        //resolve and return the result
        if (promisesCompleted === taskList.length) {
          resolve(results)
        }
      })
        //if any promise fails, reject.
        .catch(error => {
          reject(error)
        })
    })
  });
}

function task(time) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(time);
    }, time);
  });
}

const taskList = [task(1000), task(5000), task(3000)];

//run promise.all
myPromiseAll(taskList)
  .then(results => {
    console.log("got results", results)
  })
  .catch(console.error);
//"got results" [1000,5000,3000]






// await keyword will block next statement to run and move it in microstack queue
// but resolve() only goes in micrtotask
// any lines after resolves are run syncronously as Promise constructor is sync function
console.log("start");

let x = async () => {
  console.log(1);
  await console.log(9);
  await console.log(10);
  console.log(3);
  return 1;
};

x().then((result) => {
  console.log(result);
});

console.log("end");



console.log("start");


// ***************************************************

const promise = new Promise((resolve) => {
  console.log(1);
  resolve(2);
  console.log(3);
});

promise.then((result) => {
  console.log(result);
});

console.log("end");