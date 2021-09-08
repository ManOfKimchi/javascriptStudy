import { wonConvert, wonValConvert } from "../helper.js";

export default function CartPage({ $app, initialState, onPurchase }) {
  this.state = initialState;
  this.onPurchase = onPurchase;

  // target
  this.$target = document.createElement("div");
  this.$target.className = "CartPage";
  $app.appendChild(this.$target);

  this.render = () => {
    let totalPrice = 0;

    this.$target.innerHTML = `
        <h1>장바구니</h1>
        <div class="Cart">
            <ul>
                ${Object.keys(this.state.bag)
                  .map((key) => {
                    // 상품 단위
                    const bag = this.state.bag[key];
                    const product = this.state.products.find(
                      (p) => p.id === parseInt(key)
                    );
                    // 상품 * 옵션 형태로 flat하게
                    const bagWithOptions = Object.keys(bag.options).map(
                      (optKey) => {
                        const opt = bag.options[optKey];
                        totalPrice +=
                          (product.price + opt.option.price) * opt.quantity;
                        return `
                        <li class="Cart__item">
                          <img src="${product.imageUrl}">
                          <div class="Cart__itemDescription">
                            <div>${opt.option.name} ${wonValConvert(
                          product.price + opt.option.price
                        )}원 ${opt.quantity}개</div>
                            <div>${wonValConvert(
                              (product.price + opt.option.price) * opt.quantity
                            )}원</div>
                          </div>
                        </li>
                      `;
                      }
                    );
                    return bagWithOptions.join("");
                  })
                  .join("")}
            </ul>
            <div class="Cart__totalPrice">
              총 상품가격 ${totalPrice}원
            </div>
            <button class="OrderButton">주문하기</button>
        </div>
    `;

    this.$target
      .querySelector(".OrderButton")
      .addEventListener("click", (e) => {
        this.onPurchase();
      });
  };
  this.setState = ({ products, bag }) => {
    this.state = {
      ...this.state,
      products,
      bag,
    };
    this.render();
  };

  this.render();
}
