function delayTwoSeconds(callback){
    setTimeout(callback,2000);
};

const promise1 = new Promise((resolve)=>resolve(1));
promise1.then(result=> console.log(result));

const promise2 = new Promise((resolve, reject)=> reject(`Promise failed`));
promise2.catch(error => console.log(error));

function promiseNumber (num){
    return new Promise(resolve => resolve(num));
};

Promise.all([promiseNumber(1),promiseNumber(2),promiseNumber(3)]).then(results=>{
    results.forEach(r=>console.log(r));
});

Promise.allSettled([promiseNumber(1), promiseNumber(2), promiseNumber(3)])
  .then(results => {
    results.forEach(r=>console.log(r.status,r.value))
  });

  async function run() {
  try {
    const results = await Promise.all([
        promiseNumber(1),
        promiseNumber(2),
        promiseNumber(3),
    ]);
    results.forEach(r=>console.log(r));
  } catch (err) {
    console.error(err);
  }
}
run()