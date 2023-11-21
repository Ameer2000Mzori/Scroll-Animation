"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("./style.css");
// selecting our elements
var boxes = document.querySelectorAll(".box");
// functions
var CheckBoxes = function () {
    var triggerBox = (window.innerHeight / 5) * 4;
    boxes.forEach(function (box) {
        var boxTop = box.getBoundingClientRect().top;
        if (boxTop < triggerBox) {
            box.classList.add("show");
        }
        else {
            box.classList.remove("show");
        }
    });
};
// event listners
window.addEventListener("scroll", CheckBoxes);
