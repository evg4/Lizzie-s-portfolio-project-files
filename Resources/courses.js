let moreInfoButtonCourse1 = document.getElementById(
  "more-info-button-course-1"
);
let lessInfoButtonCourse1 = document.getElementById(
  "less-info-button-course-1"
);
let course1Info = document.getElementById("course-1");

let moreInfoButtonCourse2 = document.getElementById(
  "more-info-button-course-2"
);
let lessInfoButtonCourse2 = document.getElementById(
  "less-info-button-course-2"
);
let course2Info = document.getElementById("course-2");

let moreInfoButtonCourse3 = document.getElementById(
  "more-info-button-course-3"
);
let lessInfoButtonCourse3 = document.getElementById(
  "less-info-button-course-3"
);
let course3Info = document.getElementById("course-3");

let moreInfoButtonModule1 = document.getElementById(
  "more-info-button-module-1"
);
let lessInfoButtonModule1 = document.getElementById(
  "less-info-button-module-1"
);
let module1Info = document.getElementById("module-1");

let moreInfoButtonModule2 = document.getElementById(
  "more-info-button-module-2"
);
let lessInfoButtonModule2 = document.getElementById(
  "less-info-button-module-2"
);
let module2Info = document.getElementById("module-2");

let moreInfoButtonModule3 = document.getElementById(
  "more-info-button-module-3"
);
let lessInfoButtonModule3 = document.getElementById(
  "less-info-button-module-3"
);
let module3Info = document.getElementById("module-3");

let moreInfoButtonModule4 = document.getElementById(
  "more-info-button-module-4"
);
let lessInfoButtonModule4 = document.getElementById(
  "less-info-button-module-4"
);
let module4Info = document.getElementById("module-4");

let moreInfoButtonModule5 = document.getElementById(
  "more-info-button-module-5"
);
let lessInfoButtonModule5 = document.getElementById(
  "less-info-button-module-5"
);
let module5Info = document.getElementById("module-5");

//NOTE: if I ever need to add other courses that are made of up modules, I can't use the id module-1 etc because they are used here.

function showCourse1() {
  course1Info.style.display = "block";
  moreInfoButtonCourse1.style.display = "none";
  lessInfoButtonCourse1.style.display = "block";
}

function hideCourse1() {
  course1Info.style.display = "none";
  moreInfoButtonCourse1.style.display = "block";
  lessInfoButtonCourse1.style.display = "none";
}

function showCourse2() {
  course2Info.style.display = "block";
  moreInfoButtonCourse2.style.display = "none";
  lessInfoButtonCourse2.style.display = "block";
}

function hideCourse2() {
  course2Info.style.display = "none";
  moreInfoButtonCourse2.style.display = "block";
  lessInfoButtonCourse2.style.display = "none";
}

function showCourse3() {
  course3Info.style.display = "block";
  moreInfoButtonCourse3.style.display = "none";
  lessInfoButtonCourse3.style.display = "block";
}

function hideCourse3() {
  course3Info.style.display = "none";
  moreInfoButtonCourse3.style.display = "block";
  lessInfoButtonCourse3.style.display = "none";
}

function showModule1() {
  module1Info.style.display = "block";
  moreInfoButtonModule1.style.display = "none";
  lessInfoButtonModule1.style.display = "block";
}

function hideModule1() {
  module1Info.style.display = "none";
  moreInfoButtonModule1.style.display = "block";
  lessInfoButtonModule1.style.display = "none";
}

function showModule2() {
  module2Info.style.display = "block";
  moreInfoButtonModule2.style.display = "none";
  lessInfoButtonModule2.style.display = "block";
}

function hideModule2() {
  module2Info.style.display = "none";
  moreInfoButtonModule2.style.display = "block";
  lessInfoButtonModule2.style.display = "none";
}

function showModule3() {
  module3Info.style.display = "block";
  moreInfoButtonModule3.style.display = "none";
  lessInfoButtonModule3.style.display = "block";
}

function hideModule3() {
  module3Info.style.display = "none";
  moreInfoButtonModule3.style.display = "block";
  lessInfoButtonModule3.style.display = "none";
}

function showModule4() {
  module4Info.style.display = "block";
  moreInfoButtonModule4.style.display = "none";
  lessInfoButtonModule4.style.display = "block";
}

function hideModule4() {
  module4Info.style.display = "none";
  moreInfoButtonModule4.style.display = "block";
  lessInfoButtonModule4.style.display = "none";
}

function showModule5() {
  module5Info.style.display = "block";
  moreInfoButtonModule5.style.display = "none";
  lessInfoButtonModule5.style.display = "block";
}

function hideModule5() {
  module5Info.style.display = "none";
  moreInfoButtonModule5.style.display = "block";
  lessInfoButtonModule5.style.display = "none";
}

moreInfoButtonCourse1.addEventListener("click", showCourse1);
lessInfoButtonCourse1.addEventListener("click", hideCourse1);
moreInfoButtonCourse2.addEventListener("click", showCourse2);
lessInfoButtonCourse2.addEventListener("click", hideCourse2);
moreInfoButtonCourse3.addEventListener("click", showCourse3);
lessInfoButtonCourse3.addEventListener("click", hideCourse3);
moreInfoButtonModule1.addEventListener("click", showModule1);
lessInfoButtonModule1.addEventListener("click", hideModule1);
moreInfoButtonModule2.addEventListener("click", showModule2);
lessInfoButtonModule2.addEventListener("click", hideModule2);
moreInfoButtonModule3.addEventListener("click", showModule3);
lessInfoButtonModule3.addEventListener("click", hideModule3);
moreInfoButtonModule4.addEventListener("click", showModule4);
lessInfoButtonModule4.addEventListener("click", hideModule4);
moreInfoButtonModule5.addEventListener("click", showModule5);
lessInfoButtonModule5.addEventListener("click", hideModule5);
