export default function ProductListPage({
  $app,
  initialState,
  onProductClick,
}) {
  this.state = initialState;
  this.onProductClick = onProductClick;
  // target
  this.$target = document.createElement("div");
  this.$target.className = "ProductListPage";
  $app.appendChild(this.$target);
  // 상품목록 header
  this.$header = document.createElement("h1");
  this.$header.innerText = "상품목록";
  this.$target.appendChild(this.$header);
  // list
  this.$list = document.createElement("ul");
  this.$target.appendChild(this.$list);

  this.setState = ({ products }) => {
    this.state = {
      ...this.state,
      products,
    };
    this.render();
  };

  this.$target.addEventListener("click", (e) => {
    const product = e.target.closest(".Product");
    if (!product) return;
    this.onProductClick(parseInt(product.dataset.id));
  });

  this.render = () => {
    // 상품목록 state 기반 화면 구성
    const { products } = this.state;
    this.$list.innerHTML = products.map((p) => {
      return `<li class="Product" data-id="${p.id}">
                <img src="${p.imageUrl}" />
                <div class="Product__info">
                    <div>${p.name}</div>
                    <div>${p.priceWon}원~</div>
                </div>
            </li>`;
    });
  };
  this.render();
}
