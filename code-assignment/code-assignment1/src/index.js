// <⚠️ DONT DELETE THIS ⚠️>
import "./styles.css";
const colors = ["#1abc9c", "#3498db", "#9b59b6", "#f39c12", "#e74c3c"];
// <⚠️ /DONT DELETE THIS ⚠️>

/*
✅ The text of the title should change when the mouse is on top of it.
✅ The text of the title should change when the mouse is leaves it.
✅ When the window is resized the title should change.
✅ On right click the title should also change.
✅ The colors of the title should come from a color from the colors array.
✅ DO NOT CHANGE .css, or .html files.
✅ ALL function handlers should be INSIDE of "superEventHandler"
*/
const title = document.querySelector("h2");
const superEventHandler = {
  mouseOver: function () {
    title.innerHTML = "Mouse is here!";
    title.style.color = "#1abc9c";
  },

  mouserLeave: function () {
    title.innerHTML = "Mouse is gone!";
    title.style.color = "#3498db";
  },

  windowResize: function () {
    title.innerHTML = "You just resized";
    title.style.color = "#9b59b6";
  },

  contextMenu: function () {
    title.innerHTML = "That was a right click!";
    title.style.color = "#f39c12";
  },
};

title.addEventListener("mouseover", superEventHandler.mouseOver);
title.addEventListener("mouseleave", superEventHandler.mouserLeave);
window.addEventListener("resize", superEventHandler.windowResize);
window.addEventListener("contextmenu", superEventHandler.contextMenu);
