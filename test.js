console.log("1")
setTimeout(() => {console.log("2");})
Promise.resolve().then(() => {setImmediate(() => {console.log("3");});})
console.log("4");