// import "@babel/polyfill";

const fn = () => {
  console.log(...[1,2,3]);
  new Promise(() => {})
};

class Test {

}

const b = [1, 2, 3].includes(1)
