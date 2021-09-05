import ProductListPage from "./pages/productList.js";
import { getProducts, getProductInfo } from "./api.js";
import ProductPage from "./pages/productPage.js";

let productStore = {};

export default function App($main) {
  this.$main = $main;
  this.state = {
    products: [],
    product: null,
    tempBag: {
      // key: {
      //     quantity: 0,
      //     option: {}
      // }
    },
    bag: {},
  };

  const productListPage = new ProductListPage({
    $app: this.$main,
    initialState: this.state,
    onProductClick: async (id) => {
      window.history.pushState(
        { data: "" },
        "",
        `${window.location.origin}/web/products/${id}`
      );
      const pPage = this.$main.querySelector(".ProductListPage");
      pPage.style.display = "none";

      this.setState({
        ...this.state,
        product: await getProductInfo(id),
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
  });

  window.onpopstate = () => {
    const pPage = this.$main.querySelector(".ProductListPage");
    pPage.style.display = "block";
  };

  this.init = async () => {
    productStore = await getProducts();
    this.setState({
      ...this.state,
      products: productStore,
    });
  };
  this.setState = (nextState) => {
    this.state = nextState;
    productListPage.setState(this.state);
    productPage.setState(this.state);
  };

  this.init();
}
