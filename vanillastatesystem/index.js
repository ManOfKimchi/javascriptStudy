// import App from "./src/App.js";
// import { observable, observe } from "./src/core/Observer.js";
import { App } from "./src/App_state.js";

const $main = document.querySelector("#app");
// new App($main);
new App($main);

// const state = observable({
//   a: 10,
//   b: 20,
// });

// const render = () => {
//   $main.innerHTML = `
//         <p>a + b = ${state.a + state.b}</p>
//         <input id="stateA" value="${state.a}"/>
//         <input id="stateB" value="${state.b}"/>
//     `;

//   $main.querySelector("#stateA").addEventListener("change", ({ target }) => {
//     state.a = Number(target.value);
//   });
//   $main.querySelector("#stateB").addEventListener("change", ({ target }) => {
//     state.b = Number(target.value);
//   });
// };

// observe(render);

/// publish 예제
// const state = new Publish({
//   a: 10,
//   b: 20,
// });

// const adder = new Subscriber(() => console.log(`a + b = ${state.a + state.b}`));
// const multiplier = new Subscriber(() =>
//   console.log(`a * b = ${state.a * state.b}`)
// );

// adder.subscribe(state);
// multiplier.subscribe(state);

// state.notify();
// state.stateChanged({ a: 100, b: 200 });

/// observer 예제#1
// let a = 10;
// const state = {};
// Object.defineProperty(state, "a", {
//   get() {
//     console.log(`get: ${a}`);
//     return a;
//   },
//   set(value) {
//     a = value;
//     console.log(`set: ${a}`);
//   },
// });
// console.log(`state.a = ${state.a}`);
// state.a = 100;

/// observer 예제#2
// const state = {
//   a: 10,
//   b: 20,
// };
// const stateKeys = Object.keys(state);
// for (const key of stateKeys) {
//   let _value = state[key];
//   Object.defineProperty(state, key, {
//     get() {
//       console.log(`get: state.${key} is ${_value}`);
//       return _value;
//     },
//     set(value) {
//       _value = value;
//       console.log(`set: state.${key} is ${_value}`);
//     },
//   });
// }

// console.log(`a + b = ${state.a + state.b}`);

// state.a = 100;
// state.b = 200;

// console.log(state.a);

/// observer 예제#3 - 옵저버 형태로
// const state = {
//   a: 10,
//   b: 20,
// };
// const stateKeys = Object.keys(state);
// const observer = () => console.log(`a + b = ${state.a + state.b}`);
// for (const key of stateKeys) {
//   let _value = state[key];
//   Object.defineProperty(state, key, {
//     get() {
//       return _value;
//     },
//     set(value) {
//       _value = value;
//       observer();
//     },
//   });
// }

// observer();

// state.a = 100;
// state.b = 200;

/// observer 예제#4 - 여러 개의 옵저버
// let currentObserver = null;
// const state = {
//   a: 10,
//   b: 20,
// };
// const stateKeys = Object.keys(state);
// for (const key of stateKeys) {
//   let _value = state[key];
//   const observers = new Set();
//   Object.defineProperty(state, key, {
//     get() {
//       if (currentObserver) observers.add(currentObserver);
//       return _value;
//     },
//     set(value) {
//       _value = value;
//       observers.forEach((observer) => observer());
//     },
//   });
// }

// const plus = () => {
//   currentObserver = plus;
//   console.log(`a + b = ${state.a + state.b}`);
// };
// const minus = () => {
//   currentObserver = minus;
//   console.log(`a - b = ${state.a - state.b}`);
// };

// plus(); // 10 + 20
// state.a = 100; // 100 + 20
// minus(); // 100 - 20
// state.b = 200; // 100 + 200, 100 - 200

// state.a = 1; // 1 + 200, 1 - 200
// state.b = 2; // 1 + 2, 1 - 2

/// observer 예제#5 - 함수화
// let currentObserver = null;
// const observe = (fn) => {
//   currentObserver = fn;
//   fn();
//   currentObserver = null;
// };
// const observable = (obj) => {
//   Object.keys(obj).forEach((key) => {
//     let _value = obj[key];
//     const observers = new Set();

//     Object.defineProperty(obj, key, {
//       get() {
//         if (currentObserver) observers.add(currentObserver);
//         return _value;
//       },
//       set(value) {
//         _value = value;
//         observers.forEach((fn) => fn());
//       },
//     });
//   });

//   return obj;
// };

// const state = observable({ a: 10, b: 20 });
// observe(() => console.log(`a = ${state.a}`));
// observe(() => console.log(`b = ${state.b}`));
// observe(() => console.log(`a + b = ${state.a + state.b}`));
// observe(() => console.log(`a - b = ${state.a - state.b}`));

// state.a = 100;
// state.b = 200;
