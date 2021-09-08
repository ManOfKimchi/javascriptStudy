import ProductListPage from "./pages/productList.js";
import {
  getProducts,
  getProductInfo,
  getCartBag,
  clearCartBag,
} from "./api.js";
import ProductPage from "./pages/productPage.js";
import Router from "./router.js";
import CartPage from "./pages/cartPage.js";

let productStore = {};

export default function App($main) {
  this.$main = $main;
  this.state = {
    products: [],
    product: null,
    // 개별 상품 임시로 담는 곳
    tempBag: {
      // key: {
      //     quantity: 0,
      //     option: {}
      // }
    },
    // 장바구니 데이터
    bag: {
      // productkey: {
      //   name: "",
      //   price: 0,
      //   options: {
      //     optionKey: {
      //       quantity: 0,
      //       option: {
      //         price: 0,
      //         name: "",
      //       },
      //     },
      //   },
      // },
    },
  };

  this.updatePageDisplay = (showList = [], hideList = []) => {
    showList.forEach((el) => (el.style.display = "block"));
    hideList.forEach((el) => (el.style.display = "none"));
  };

  const productListPage = new ProductListPage({
    $app: this.$main,
    initialState: this.state,
    onProductClick: async (id) => {
      this.router.at("#web/product/");
      const product = await getProductInfo(id);
      this.setState({
        ...this.state,
        product,
        tempBag: {},
      });
    },
  });
  const productPage = new ProductPage({
    $app: this.$main,
    initialState: this.state,
    onSelect: (id) => {
      const option = this.state.product.productOptions.find((p) => p.id === id);
      if (!this.state.tempBag[id]) {
        this.state.tempBag[id] = {
          quantity: 1,
          option,
        };
      }
      if (option) {
        this.setState(this.state);
      }
    },
    optionInputChange: (value, id) => {
      if (value === 0) {
        delete this.state.tempBag[id];
      } else {
        this.state.tempBag[id].quantity = value;
      }
      this.setState(this.state);
    },
    onAddToCart: (tempBag) => {
      const { product } = this.state;
      // tempBag 의 항목들을 기존 장바구니에 더하는 식으로
      // 너무 계산방법이 더럽나?
      // -> 데이터 구조의 문제 -> 로직이 쓸데없이 복잡함
      for (const key in tempBag) {
        if (Object.hasOwnProperty.call(tempBag, key)) {
          const tmpItem = tempBag[key];
          const tmpOption = tmpItem.option;
          const bagItem = this.state.bag[product.id];
          if (bagItem) {
            // 이미 담긴 상품이면 옵션만 추가로 반영함
            // 기존에 담았는데 가격이 바뀌면..?
            // 기존에 담긴 옵션과 새로 넣어야 하는 옵션으로 또 분기해야..
            if (Object.hasOwnProperty.call(bagItem.options, key)) {
              bagItem.options[key].quantity += tmpItem.quantity;
            } else {
              bagItem.options[key] = {
                quantity: tmpItem.quantity,
                option: { ...tmpOption },
              };
            }
          } else {
            this.state.bag[product.id] = {
              name: product.name,
              price: product.price,
              options: {
                [key]: {
                  ...tmpItem,
                },
              },
            };
          }
        }
      }
      // localstorage에 저장
      localStorage.setItem("cart", JSON.stringify(this.state.bag));

      // 장바구니 페이지로 이동
      this.router.at("#web/cart/");
      this.setState({
        ...this.state,
        product: null,
        tempBag: {},
      });
    },
  });
  const cartPage = new CartPage({
    $app: this.$main,
    initialState: this.state,
    onPurchase: async () => {
      await clearCartBag();
      this.setState({
        ...this.state,
        bag: {},
      });
      window.location.href = `${window.location.origin}/#web/`;
    },
  });
  this.router = new Router({
    // 상품목록
    "": () => {
      this.updatePageDisplay(
        [productListPage.$target],
        [productPage.$target, cartPage.$target]
      );
    },
    "web/": () => {
      this.updatePageDisplay(
        [productListPage.$target],
        [productPage.$target, cartPage.$target]
      );
    },
    // 상품상세
    "web/product/": () => {
      this.updatePageDisplay(
        [productPage.$target],
        [productListPage.$target, cartPage.$target]
      );
    },
    // 장바구니
    "web/cart/": () => {
      this.updatePageDisplay(
        [cartPage.$target],
        [productListPage.$target, productPage.$target]
      );
    },
  });

  this.init = async () => {
    productStore = await getProducts();
    const cart = await getCartBag();
    this.setState({
      ...this.state,
      products: productStore,
      bag: cart,
    });
  };
  this.setState = (nextState) => {
    this.state = nextState;
    console.log("main state changed", nextState);
    if (productListPage.$target.style.display != "none")
      productListPage.setState(this.state);
    if (productPage.$target.style.display != "none")
      productPage.setState(this.state);
    if (cartPage.$target.style.display != "none") cartPage.setState(this.state);
  };

  this.init();
}
