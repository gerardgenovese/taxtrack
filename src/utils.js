console.log("utils.js running");


const square = x => x + x;

const add = (a, b) => a + b;

//exports - default export - named exports

const subtract = (a,b) => a - b;

export { square, add, subtract as default };


//or 

// export const square = x => x + x;

// export const add = (a, b) => a + b;





