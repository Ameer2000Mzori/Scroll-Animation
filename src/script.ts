// selecting our elements
var boxes = document.querySelectorAll(".box");

// functions
const CheckBoxes = () => {
  const triggerBox: number = (window.innerHeight / 5) * 4;

  boxes.forEach((box) => {
    const boxTop = box.getBoundingClientRect().top;

    if (boxTop < triggerBox) {
      box.classList.add("show");
    } else {
      box.classList.remove("show");
    }
  });
};

// event listners
window.addEventListener("scroll", CheckBoxes);
