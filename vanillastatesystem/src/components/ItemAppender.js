import Component from "../core/Component.js";

export default class ItemAppender extends Component {
  template() {
    return `<input type="text" class="appender" placeholder="..." />`;
  }
  setEvent() {
    const { addItem } = this.$props;
    this.addEvent("keyup", ".appender", ({ key, target }) => {
      if (key !== "Enter") return;
      addItem(target.value);
    });
  }
  mounted() {
    this.$target.querySelector(".appender").focus();
  }
}
