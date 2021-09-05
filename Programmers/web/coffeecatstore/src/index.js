import App from "./app.js";

const main = document.querySelector(".App");
new App(main);

// const routerMap = {
//   // 상품목록
//   "": function () {
//     console.log("web");
//   },
//   "aaa/": function () {
//     console.log("web");
//   },
//   // 상품상세
//   "aaa/bbb/": function () {
//     console.log("web/product");
//   },
//   // 장바구니
//   "aaa/ccc/": function () {
//     console.log("web/cart");
//   },
// };

// const router = () => {
//   console.log("hash change");
//   const hashValue = location.hash.replace("#", "");
//   // aaa, bbb, :id <-> aaa, bbb, 1

//   const routeTargets = Object.keys(routerMap).filter((key) =>
//     hashValue.startsWith(key)
//   );
//   const hashLen = hashValue.split("/").length;
//   const routeVal = routeTargets.find(
//     (key) => key.split("/").length === hashLen
//   );
//   routerMap[routeVal] && routerMap[routeVal]();
// };
// window.addEventListener("DOMContentLoaded", router);
// window.addEventListener("hashchange", router);
