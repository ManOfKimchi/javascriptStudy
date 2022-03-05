import Component from "../core/Component.js";

export default class ItemFilter extends Component {
  template() {
    return `
            <button class="filterBtn" data-is-filter="0">All</button>
            <button class="filterBtn" data-is-filter="1">Active</button>
            <button class="filterBtn" data-is-filter="2">Inactive</button>
        `;
  }
  setEvent() {
    const { filterItem } = this.$props;
    this.addEvent("click", ".filterBtn", ({ target }) => {
      filterItem(Number(target.dataset.isFilter));
    });
  }
}
