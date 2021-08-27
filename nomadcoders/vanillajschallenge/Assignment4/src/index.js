// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
checked

✅ The text of the title should change when the mouse is leaves it.
checked

✅ When the window is resized the title should change.
checked

✅ On right click the title should also change.
checked

✅ The colors of the title should come from a color from the colors array.
checked

✅ DO NOT CHANGE .css, or .html files.
checked

✅ ALL function handlers should be INSIDE of "superEventHandler"
checked
*/
const TEXT = {
  MOUSEOVER: "The mouse is here!",
  MOUSELEAVE: "The mouse is gone!",
  RESIZE: "You just Resized!",
  CONTEXTMENU: "That was a right click.",
};
const headerEl = document.querySelector("h2");
const superEventHandler = {
  header: {
    mouseover: () => {
      headerEl.innerText = TEXT.MOUSEOVER;
      headerEl.style.color = colors[0];
    },
    mouseleave: () => {
      headerEl.innerText = TEXT.MOUSELEAVE;
      headerEl.style.color = colors[1];
    },
  },
  window: {
    resize: () => {
      if (headerEl.innerText === TEXT.RESIZE) return;
      headerEl.innerText = TEXT.RESIZE;
      headerEl.style.color = colors[2];
    },
    contextmenu: () => {
      headerEl.innerText = TEXT.CONTEXTMENU;
      headerEl.style.color = colors[3];
    },
  },
};

headerEl.addEventListener("mouseover", superEventHandler.header.mouseover);
headerEl.addEventListener("mouseleave", superEventHandler.header.mouseleave);
window.addEventListener("resize", superEventHandler.window.resize);
window.document.addEventListener(
  "contextmenu",
  superEventHandler.window.contextmenu
);
