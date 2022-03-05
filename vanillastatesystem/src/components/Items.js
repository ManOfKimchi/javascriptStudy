import Component from "../core/Component.js";

export default class Items extends Component {
  // setup() {
  //   this.$state = { items: ["item1, item2"] };
  // }
  template() {
    const { filteredItems } = this.$props;
    return `
            <ul>
                ${filteredItems
                  .map(
                    ({ contents, active, seq }) =>
                      `<li data-seq="${seq}">${contents}<button class="toggleBtn" style="color: ${
                        active ? "#09F" : "#F09"
                      }">${active ? "Active" : "Inactive"}</button>
                      <button class="deleteBtn">DELETE</button></li>`
                  )
                  .join("")}
            </ul>
            <button class="addBtn">추가</button>
        `;
  }
  setEvent() {
    console.log("set event called");
    // 엘리먼트 생성될때마다 이벤트를 설정해주는게 비효율적임
    // this.$target.querySelector(".addBtn").addEventListener("click", () => {
    //   const { items } = this.$state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });
    // this.$target.querySelectorAll(".deleteBtn").forEach((deleteBtn) => {
    //   deleteBtn.addEventListener("click", ({ target }) => {
    //     const items = [...this.$state.items];
    //     items.splice(target.dataset.index, 1);
    //     this.setState({ items });
    //   });
    // });
    // 그래서 이벤트 버블링을 이용하여 Items 요소가 이벤트처리하도록 개선
    // this.addEvent("click", ".addBtn", ({ target }) => {
    //   const { items } = this.$state;
    //   this.setState({ items: [...items, `item${items.length + 1}`] });
    // });
    // this.addEvent("click", ".deleteBtn", ({ target }) => {
    //   const items = [...this.$state.items];
    //   items.splice(target.dataset.index, 1);
    //   this.setState({ items });
    // });

    const { deleteItem, toggleItem } = this.$props;
    this.addEvent("click", ".deleteBtn", ({ target }) => {
      deleteItem(Number(target.closest("[data-seq]").dataset.seq));
    });
    this.addEvent("click", ".toggleBtn", ({ target }) => {
      toggleItem(Number(target.closest("[data-seq]").dataset.seq));
    });
  }
}
