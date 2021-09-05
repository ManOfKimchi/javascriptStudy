const locale = "ko-KR";

export const wonConvert = (product) => {
  const priceWon = product.price.toLocaleString(locale);
  return {
    ...product,
    priceWon,
  };
};

export const wonValConvert = (price) => {
  return price.toLocaleString(locale);
};
