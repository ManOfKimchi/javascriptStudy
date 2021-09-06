import { wonConvert } from "./helper.js";

const URL = {
  // getProducts:
  //   "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products",
  getProducts: "data/products.json",
  // getProductInfo:
  //     "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products/",
  productInfoTable: "data/product.json",
};

export const getProducts = async () => {
  const { href, hash } = window.location;
  const path = href.slice(0, href.length - hash.length);
  const res = await fetch(`${path}/${URL.getProducts}`);
  // const res = await fetch(URL.getProducts);
  try {
    if (!res.ok) {
      throw new Exception("상품목록 조회 오류");
    }
    const productsRaw = await res.json();
    return productsRaw.map((product) => wonConvert(product));
  } catch (error) {
    console.error(error.message);
  }
};

export const getProductInfo = async (id) => {
  const res = await fetch(`${window.location.origin}/${URL.productInfoTable}`);
  try {
    if (!res.ok) {
      throw new Exception("productInfoTable");
    }
    const products = await res.json();
    return wonConvert(products.find((p) => p.id === id));
  } catch (error) {
    console.error(error.message);
  }
  // const res = await fetch(`${URL.getProductInfo}${id}`);
  // try {
  //     if (!res.ok) {
  //         throw new Exception("상품정보 조회 오류");
  //     }
  //     const infoRaw = await res.json();
  //     return wonConvert(infoRaw);
  // } catch (error) {
  //     console.error(error.message);
  // }
};

export const getCartBag = async () => {
  const cartSerialized = await localStorage.getItem("cart");
  return cartSerialized ? JSON.parse(cartSerialized) : {};
};
