export default function CartPage({ $app, initialState }) {
  this.state = initialState;

  // target
  this.$target = document.createElement("div");
  this.$target.className = "CartPage";
  $app.appendChild(this.$target);
  // 장바구나 헤더
  this.$header = document.createElement("h1");
  this.$target.appendChild(this.$header);

  this.render = () => {
    this.$target.innerHTML = `
        <div class="Cart">
            <ul>
                CartPage이다.
            </ul>
        </div>
    `;
  };
  this.setState = ({}) => {
    this.state = {
      ...this.state,
    };
  };

  this.render();
}
