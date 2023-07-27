import { toggleDisplay } from "./Modules/dom-functions.js";

let moreInfoButtonCourse1 = document.getElementById(
  "more-info-button-course-1"
);
let moreInfoButtonCourse2 = document.getElementById(
  "more-info-button-course-2"
);
let moreInfoButtonCourse3 = document.getElementById(
  "more-info-button-course-3"
);
let moreInfoButtonModule1 = document.getElementById(
  "more-info-button-module-1"
);
let moreInfoButtonModule2 = document.getElementById(
  "more-info-button-module-2"
);
let moreInfoButtonModule3 = document.getElementById(
  "more-info-button-module-3"
);
let moreInfoButtonModule4 = document.getElementById(
  "more-info-button-module-4"
);
let moreInfoButtonModule5 = document.getElementById(
  "more-info-button-module-5"
);

let course1Info = document.getElementById("course-1");
let course2Info = document.getElementById("course-2");
let course3Info = document.getElementById("course-3");
let module1Info = document.getElementById("module-1");
let module2Info = document.getElementById("module-2");
let module3Info = document.getElementById("module-3");
let module4Info = document.getElementById("module-4");
let module5Info = document.getElementById("module-5");

function toggleSign(sign) {
  if (sign.innerHTML === "+") {
    sign.innerHTML = "–";
  } else {
    sign.innerHTML = "+";
  }
}

moreInfoButtonCourse1.addEventListener("click", () => {
  toggleDisplay(course1Info);
  toggleSign(moreInfoButtonCourse1);
});
moreInfoButtonCourse2.addEventListener("click", () => {
  toggleDisplay(course2Info);
  toggleSign(moreInfoButtonCourse2);
});
moreInfoButtonCourse3.addEventListener("click", () => {
  toggleDisplay(course3Info);
  toggleSign(moreInfoButtonCourse3);
});
moreInfoButtonModule1.addEventListener("click", () => {
  toggleDisplay(module1Info);
  toggleSign(moreInfoButtonModule1);
});
moreInfoButtonModule2.addEventListener("click", () => {
  toggleDisplay(module2Info);
  toggleSign(moreInfoButtonModule2);
});
moreInfoButtonModule3.addEventListener("click", () => {
  toggleDisplay(module3Info);
  toggleSign(moreInfoButtonModule3);
});
moreInfoButtonModule4.addEventListener("click", () => {
  toggleDisplay(module4Info);
  toggleSign(moreInfoButtonModule4);
});
moreInfoButtonModule5.addEventListener("click", () => {
  toggleDisplay(module5Info);
  toggleSign(moreInfoButtonModule5);
});
