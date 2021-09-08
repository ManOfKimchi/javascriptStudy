import { wonValConvert } from "../helper.js";

export default function ProductPage({
  $app,
  initialState,
  onSelect,
  optionInputChange,
  onAddToCart,
}) {
  this.state = initialState;
  this.onSelect = onSelect;
  this.optionInputChange = optionInputChange;
  this.onAddToCart = onAddToCart;

  // ProductPage
  this.$target = document.createElement("div");
  this.$target.className = "ProductDetailPage";
  $app.appendChild(this.$target);

  // ProductHeader
  this.$header = document.createElement("h1");
  this.$header.innerText = "상품 정보";
  this.$target.appendChild(this.$header);

  // ProductDetail
  this.$detail = document.createElement("div");
  this.$detail.className = "ProductDetail";
  this.$target.appendChild(this.$detail);

  this.render = () => {
    const { product, tempBag } = this.state;
    this.$detail.textContent = "";
    if (!product) {
      this.$target.style.display = "none";
      return;
    } else {
      this.$target.style.display = "block";
      this.$detail.innerHTML = `
                <img src="${product.imageUrl}" />
                <div clas="ProductDetail__info">
                    <h2>${product.name}</h2>
                    <div class="ProductDetail__price">${product.priceWon}~</div>
                    <select>
                        <option>선택하세요.</option>
                        ${product.productOptions
                          .map((option) => {
                            const surfix =
                              option.price > 0
                                ? `(+${wonValConvert(option.price)})`
                                : "";
                            return `
                            <option data-id=${option.id}>${option.name}${surfix}</option>
                            `;
                          })
                          .join("")}
                    </select>
                    <div class="ProductDetail__selectedOptions">
                        <h3>선택된 상품</h3>
                        <ul>
                            ${Object.values(tempBag)
                              .map(({ quantity, option }) => {
                                return `
                                    <li>
                                        ${option.name} ${wonValConvert(
                                  (product.price + option.price) * quantity
                                )}원
                                        <div>
                                            <input data-id="${
                                              option.id
                                            }" type="number" value="${quantity}">개
                                        </div>
                                    </li>
                                `;
                              })
                              .join("")}
                        </ul>
                        <div class="ProductDetail__totalPrice">${wonValConvert(
                          Object.values(tempBag).reduce(
                            (prev, { quantity, option }) => {
                              return (
                                prev + (product.price + option.price) * quantity
                              );
                            },
                            0
                          )
                        )}원</div>
                        <button class="OrderButton">주문하기</button>
                    </div>
                </div>
            `;

      const combo = this.$detail.querySelector("select");
      combo.addEventListener("change", (e) => {
        const select = e.target;
        const option = select.options[select.selectedIndex];
        if (option) {
          this.onSelect(parseInt(option.dataset.id));
        }
      });
      const quantities = this.$detail.querySelectorAll(
        ".ProductDetail__selectedOptions input"
      );
      quantities.forEach((input) => {
        input.addEventListener("change", (e) => {
          this.optionInputChange(parseInt(e.target.value), input.dataset.id);
        });
      });
      const orderBtn = this.$detail.querySelector(".OrderButton");
      orderBtn.addEventListener("click", (e) => {
        if (Object.keys(this.state.tempBag).length) {
          this.onAddToCart(this.state.tempBag);
        } else {
          console.warn("Disable 처리 할 것");
        }
      });
    }
  };
  this.setState = ({ product, tempBag }) => {
    this.state = {
      ...this.state,
      product,
      tempBag,
    };
    this.render();
  };
  this.render();
}
