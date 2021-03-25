// async keyword in front of function always determine that this  function would return a promise
// await literally suspends the function execution until the promise settles, 
// and then resumes it with the promise result. That doesn’t cost any CPU resources, 
// because the JavaScript engine can do other jobs in the meantime: execute other scripts, handle events, etc.

async function f() {

    let promise = new Promise((resolve, reject) => {
      setTimeout(() => resolve("done!"), 1000)
    });
  
    let result = await promise; // wait until the promise resolves (*)
    alert(result); // "done!"
  }
  
  f();