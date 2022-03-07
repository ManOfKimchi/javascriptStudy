import Component from "./core/Component.js";
import { Store } from "./core/Store.js";

const InputA = () => `<input id="stateA" value="${Store.state.a}" size="5"/>`;
const InputB = () => `<input id="stateB" value="${Store.state.b}" size="5"/>`;
const Calculator = () => `<p>a + b = ${Store.state.a + Store.state.b}</p>`;

export class App extends Component {
  template() {
    return `
        ${InputA()}
        ${InputB()}
        ${Calculator()}
    `;
  }

  setEvent() {
    const { $target } = this;
    $target
      .querySelector("#stateA")
      .addEventListener("change", ({ target }) => {
        Store.setState({ a: Number(target.value) });
      });
    $target
      .querySelector("#stateB")
      .addEventListener("change", ({ target }) => {
        Store.setState({ b: Number(target.value) });
      });
  }
}
