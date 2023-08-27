// ********************Promise**********************

function promisePolyfillCode() {
    const PENDING = 0;
    const FULLFILLED = 1;
    const REJECTED = 2;
  
    function customPromise(executer) {
      let state = PENDING;
      let value = null; // result from resolve or reject
      let handlers = []; // then callbacks
      let catcher = null; // catch callback
  
      function resolve(result) {
        if (state === PENDING) {
          state = FULLFILLED;
          value = result;
          handlers.forEach((handler) => handler(value)); // execute array of callbacks in then()
        }
      }
  
      function reject(result) {
        if (state === PENDING) {
          state = REJECTED;
          value = result;
          catcher(value); // execute callback of catch()
        }
      }
  
      this.then = function (successCallback) {
        if (state === FULLFILLED) {
          successCallback(value);
        } else {
          handlers.push(successCallback);
        }
      };
  
      this.catch = function (failureCallback) {
        if (state === REJECTED) {
          failureCallback(value);
        } else {
          catcher = failureCallback;
        }
      };
  
      executer(resolve, reject);
    }
  
    const executor = (resolve, reject) => {
      console.log("generating number...");
      setTimeout(() => {
        let number = Math.floor(Math.random() * 10);
        if (number >= 5) {
          resolve(`number generated successfully ${number}.`);
        } else {
          reject("problem in generating number!");
        }
      }, 1000);
    };
  
    const generateNumber = new customPromise(executor);
  
    generateNumber.then((result) => {
      console.log(result); // number generated successfully 6.
    });
  
    generateNumber.catch((error) => {
      console.log(error); // problem in generating number!
    });
  }





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

