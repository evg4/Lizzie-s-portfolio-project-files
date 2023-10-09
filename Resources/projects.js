import { toggleDisplay } from "./Modules/dom-functions.js";

let instructions = document.getElementById("instructions");
let instructionsAbove = document.getElementById("instructions-above");
let salsaButton = document.getElementById("salsa-button");
let salsaPreview = document.getElementById("preview-salsa");
let coloursButton = document.getElementById("colours-button");
let coloursPreview = document.getElementById("preview-colours");
let designButton = document.getElementById("design-button");
let designPreview = document.getElementById("preview-design-system");
let spanishButton = document.getElementById("spanish-button");
let spanishPreview = document.getElementById("preview-spanish");
let superfoods1Button = document.getElementById("superfoods-1-button");
let superfoods1Preview = document.getElementById("preview-superfoods-1");
let superfoods2Button = document.getElementById("superfoods-2-button");
let superfoods2Preview = document.getElementById("preview-superfoods-2");
let greenConsultingButton = document.getElementById("green-consulting-button");
let greenConsultingPreview = document.getElementById(
  "preview-green-consulting"
);
let meetTheTeamButton = document.getElementById("meet-the-team-button");
let meetTheTeamPreview = document.getElementById("preview-meet-the-team");
let stammtischButton = document.getElementById("stammtisch-button");
let stammtischPreview = document.getElementById("preview-stammtisch-sundays");
let bakeryButton = document.getElementById("bakery-button");
let bakeryPreview = document.getElementById("preview-belles-bakery");
let colourChangerButton = document.getElementById("colour-changer-button");
let colourChangerPreview = document.getElementById("preview-colour-changer");
let surveyButton = document.getElementById("survey-button");
let surveyPreview = document.getElementById("preview-survey");
let hatButton = document.getElementById("hat-button");
let hatPreview = document.getElementById("preview-hat");
let shapesButton = document.getElementById("shapes-button");
let shapesPreview = document.getElementById("preview-shapes");
let quizzesButton = document.getElementById("quizzes-button");
let quizzesPreview = document.getElementById("preview-quizzes");
let rhymeButton = document.getElementById("rhyme-button");
let rhymePreview = document.getElementById("preview-rhyme");
let foodButton = document.getElementById("food-button");
let foodPreview = document.getElementById("preview-food");
let friendButton = document.getElementById("friend-button");
let friendPreview = document.getElementById("preview-friend");
let libraryButton = document.getElementById("library-button");
let libraryPreview = document.getElementById("preview-library");
let quizMemberButton = document.getElementById("quizmember-button");
let quizMemberPreview = document.getElementById("preview-quizmember");
let timerButton = document.getElementById("timer-button");
let timerPreview = document.getElementById("preview-timer");
let jammmingButton = document.getElementById("jammming-button");
let jammmingPreview = document.getElementById("preview-jammming");
let blogButton = document.getElementById("blog-button");
let blogPreview = document.getElementById("preview-blog");
let plannerButton = document.getElementById("planner-button");
let plannerPreview = document.getElementById("preview-planner");
let packingButton = document.getElementById("packing-button");
let packingPreview = document.getElementById("preview-packing");

function scaleButton(buttonElement) {
  if (buttonElement.style.transform === "scale(1)") {
    buttonElement.style.transform = "scale(1.1)";
  }
}

function resetAll() {
  //display
  instructions.style.display = "none";
  instructionsAbove.style.display = "none";
  salsaPreview.style.display = "none";
  coloursPreview.style.display = "none";
  designPreview.style.display = "none";
  spanishPreview.style.display = "none";
  superfoods1Preview.style.display = "none";
  superfoods2Preview.style.display = "none";
  greenConsultingPreview.style.display = "none";
  meetTheTeamPreview.style.display = "none";
  stammtischPreview.style.display = "none";
  bakeryPreview.style.display = "none";
  colourChangerPreview.style.display = "none";
  surveyPreview.style.display = "none";
  hatPreview.style.display = "none";
  shapesPreview.style.display = "none";
  quizzesPreview.style.display = "none";
  rhymePreview.style.display = "none";
  foodPreview.style.display = "none";
  friendPreview.style.display = "none";
  libraryPreview.style.display = "none";
  quizMemberPreview.style.display = "none";
  timerPreview.style.display = "none";
  jammmingPreview.style.display = "none";
  blogPreview.style.display = "none";
  plannerPreview.style.display = "none";
  packingPreview.style.display = "none";
  //buttons
  salsaButton.style.transform = "scale(1)";
  coloursButton.style.transform = "scale(1)";
  designButton.style.transform = "scale(1)";
  spanishButton.style.transform = "scale(1)";
  superfoods1Button.style.transform = "scale(1)";
  superfoods2Button.style.transform = "scale(1)";
  greenConsultingButton.style.transform = "scale(1)";
  meetTheTeamButton.style.transform = "scale(1)";
  stammtischButton.style.transform = "scale(1)";
  bakeryButton.style.transform = "scale(1)";
  colourChangerButton.style.transform = "scale(1)";
  surveyButton.style.transform = "scale(1)";
  hatButton.style.transform = "scale(1)";
  shapesButton.style.transform = "scale(1)";
  quizzesButton.style.transform = "scale(1)";
  rhymeButton.style.transform = "scale(1)";
  foodButton.style.transform = "scale(1)";
  friendButton.style.transform = "scale(1)";
  libraryButton.style.transform = "scale(1)";
  quizMemberButton.style.transform = "scale(1)";
  timerButton.style.transform = "scale(1)";
  jammmingButton.style.transform = "scale(1)";
  blogButton.style.transform = "scale(1)";
  plannerButton.style.transform = "scale(1)";
  packingButton.style.transform = "scale(1)";
}

salsaButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(salsaPreview);
  scaleButton(salsaButton);
});
coloursButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(coloursPreview);
  scaleButton(coloursButton);
});
designButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(designPreview);
  scaleButton(designButton);
});
spanishButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(spanishPreview);
  scaleButton(spanishButton);
});
superfoods1Button.addEventListener("click", () => {
  resetAll();
  toggleDisplay(superfoods1Preview);
  scaleButton(superfoods1Button);
});
superfoods2Button.addEventListener("click", () => {
  resetAll();
  toggleDisplay(superfoods2Preview);
  scaleButton(superfoods2Button);
});
greenConsultingButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(greenConsultingPreview);
  scaleButton(greenConsultingButton);
});
meetTheTeamButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(meetTheTeamPreview);
  scaleButton(meetTheTeamButton);
});
stammtischButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(stammtischPreview);
  scaleButton(stammtischButton);
});
bakeryButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(bakeryPreview);
  scaleButton(bakeryButton);
});
colourChangerButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(colourChangerPreview);
  scaleButton(colourChangerButton);
});
surveyButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(surveyPreview);
  scaleButton(surveyButton);
});
hatButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(hatPreview);
  scaleButton(hatButton);
});
shapesButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(shapesPreview);
  scaleButton(shapesButton);
});
quizzesButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(quizzesPreview);
  scaleButton(quizzesButton);
});
rhymeButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(rhymePreview);
  scaleButton(rhymeButton);
});
foodButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(foodPreview);
  scaleButton(foodButton);
});
friendButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(friendPreview);
  scaleButton(friendButton);
});
libraryButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(libraryPreview);
  scaleButton(libraryButton);
});
quizMemberButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(quizMemberPreview);
  scaleButton(quizMemberButton);
});

timerButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(timerPreview);
  scaleButton(timerButton);
});

jammmingButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(jammmingPreview);
  scaleButton(jammmingButton);
});

blogButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(blogPreview);
  scaleButton(blogButton);
});

plannerButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(plannerPreview);
  scaleButton(plannerButton);
});

packingButton.addEventListener("click", () => {
  resetAll();
  toggleDisplay(packingPreview);
  scaleButton(packingButton);
});

/* Because I only want one preview box to be displayed at a time, 
I have used the resetAll() before toggleDisplay. 
However, this means that the toggle element doesn't work because, 
upon a click, everything is always being reset to "none" 
so clicking will then always result in "block". 
Can't yet think of a way round this? 
Also I'm happy with this functionality - it just feels like a 
"wrong" use of the function. */
