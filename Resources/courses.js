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

function toggleDisplayCourse1() {
  if (course1Info.style.display === "block") {
    course1Info.style.display = "none";
    moreInfoButtonCourse1.innerHTML = "+";
  } else {
    course1Info.style.display = "block";
    moreInfoButtonCourse1.innerHTML = "–";
  }
}

function toggleDisplayCourse2() {
  if (course2Info.style.display === "block") {
    course2Info.style.display = "none";
    moreInfoButtonCourse2.innerHTML = "+";
  } else {
    course2Info.style.display = "block";
    moreInfoButtonCourse2.innerHTML = "–";
  }
}

function toggleDisplayCourse3() {
  if (course3Info.style.display === "block") {
    course3Info.style.display = "none";
    moreInfoButtonCourse3.innerHTML = "+";
  } else {
    course3Info.style.display = "block";
    moreInfoButtonCourse3.innerHTML = "–";
  }
}

function toggleDisplayModule1() {
  if (module1Info.style.display === "block") {
    module1Info.style.display = "none";
    moreInfoButtonModule1.innerHTML = "+";
  } else {
    module1Info.style.display = "block";
    moreInfoButtonModule1.innerHTML = "–";
  }
}

function toggleDisplayModule2() {
  if (module2Info.style.display === "block") {
    module2Info.style.display = "none";
    moreInfoButtonModule2.innerHTML = "+";
  } else {
    module2Info.style.display = "block";
    moreInfoButtonModule2.innerHTML = "–";
  }
}

function toggleDisplayModule3() {
  if (module3Info.style.display === "block") {
    module3Info.style.display = "none";
    moreInfoButtonModule3.innerHTML = "+";
  } else {
    module3Info.style.display = "block";
    moreInfoButtonModule3.innerHTML = "–";
  }
}

function toggleDisplayModule4() {
  if (module4Info.style.display === "block") {
    module4Info.style.display = "none";
    moreInfoButtonModule4.innerHTML = "+";
  } else {
    module4Info.style.display = "block";
    moreInfoButtonModule4.innerHTML = "–";
  }
}

function toggleDisplayModule5() {
  if (module5Info.style.display === "block") {
    module5Info.style.display = "none";
    moreInfoButtonModule5.innerHTML = "+";
  } else {
    module5Info.style.display = "block";
    moreInfoButtonModule5.innerHTML = "–";
  }
}

moreInfoButtonCourse1.addEventListener("click", toggleDisplayCourse1);
moreInfoButtonCourse2.addEventListener("click", toggleDisplayCourse2);
moreInfoButtonCourse3.addEventListener("click", toggleDisplayCourse3);
moreInfoButtonModule1.addEventListener("click", toggleDisplayModule1);
moreInfoButtonModule2.addEventListener("click", toggleDisplayModule2);
moreInfoButtonModule3.addEventListener("click", toggleDisplayModule3);
moreInfoButtonModule4.addEventListener("click", toggleDisplayModule4);
moreInfoButtonModule5.addEventListener("click", toggleDisplayModule5);
