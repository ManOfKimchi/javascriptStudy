import { wonConvert } from "./helper.js";

const URL = {
  // getProducts:
  //   "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products",
  getProducts: "../data/products.json",
  getProductInfo:
    "https://uikt6pohhh.execute-api.ap-northeast-2.amazonaws.com/dev/products/",
};

export const getProducts = async () => {
  const res = await fetch("../data/products.json");
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
  const res = await fetch(`${URL.getProductInfo}${id}`);
  try {
    if (!res.ok) {
      throw new Exception("상품정보 조회 오류");
    }
    const infoRaw = await res.json();
    return wonConvert(infoRaw);
  } catch (error) {
    console.error(error.message);
  }
};
