import { observable, observe } from "./Observer.js";

export default class Component {
  $target;
  $state;
  $props;

  constructor($target, $props) {
    this.$target = $target;
    this.$props = $props;
    this.setup();
  }

  setup() {
    this.state = observable(this.initState());
    observe(() => {
      this.render();
      this.setEvent();
      this.mounted();
    });
  }
  initState() {
    return {};
  }
  /**
   * render 후 실행
   */
  mounted() {}
  template() {
    return ``;
  }
  render() {
    this.$target.innerHTML = this.template();
    this.mounted();
  }
  setEvent() {}
  /**
   * 이벤트 버블링 추상화
   * 현재 컴포넌트에 특정 이벤트에 대해 선택한 셀렉터의 이벤트 정의
   * @param {*} eventType
   * @param {*} selector
   * @param {*} callback
   */
  addEvent(eventType, selector, callback) {
    const children = [...this.$target.querySelectorAll(selector)];
    const isTarget = (target) =>
      children.includes(target) || target.closest(selector);
    this.$target.addEventListener(eventType, (event) => {
      if (!isTarget(event.target)) return false;
      callback(event);
    });
  }
  setState(newState) {
    this.$state = { ...this.$state, ...newState };
    this.render();
  }
}
