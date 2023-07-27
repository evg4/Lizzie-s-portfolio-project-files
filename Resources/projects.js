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
}

function showSalsa() {
  resetAll();
  salsaPreview.style.display = "block";
  salsaButton.style.transform = "scale(1.1)";
}

function showColours() {
  resetAll();
  coloursPreview.style.display = "block";
  coloursButton.style.transform = "scale(1.1)";
}

function showDesign() {
  resetAll();
  designPreview.style.display = "block";
  designButton.style.transform = "scale(1.1)";
}

function showSpanish() {
  resetAll();
  spanishPreview.style.display = "block";
  spanishButton.style.transform = "scale(1.1)";
}

function showSuperfoods1() {
  resetAll();
  superfoods1Preview.style.display = "block";
  superfoods1Button.style.transform = "scale(1.1)";
}

function showSuperfoods2() {
  resetAll();
  superfoods2Preview.style.display = "block";
  superfoods2Button.style.transform = "scale(1.1)";
}

function showGreenConsulting() {
  resetAll();
  greenConsultingPreview.style.display = "block";
  greenConsultingButton.style.transform = "scale(1.1)";
}

function showMeetTheTeam() {
  resetAll();
  meetTheTeamPreview.style.display = "block";
  meetTheTeamButton.style.transform = "scale(1.1)";
}

function showStammtisch() {
  resetAll();
  stammtischPreview.style.display = "block";
  stammtischButton.style.transform = "scale(1.1)";
}

function showBakery() {
  resetAll();
  bakeryPreview.style.display = "block";
  bakeryButton.style.transform = "scale(1.1)";
}

function showColourChanger() {
  resetAll();
  colourChangerPreview.style.display = "block";
  colourChangerButton.style.transform = "scale(1.1)";
}

function showSurvey() {
  resetAll();
  surveyPreview.style.display = "block";
  surveyButton.style.transform = "scale(1.1)";
}

function showHat() {
  resetAll();
  hatPreview.style.display = "block";
  hatButton.style.transform = "scale(1.1)";
}

function showShapes() {
  resetAll();
  shapesPreview.style.display = "block";
  shapesButton.style.transform = "scale(1.1)";
}

function showQuizzes() {
  resetAll();
  quizzesPreview.style.display = "block";
  quizzesButton.style.transform = "scale(1.1)";
}

salsaButton.addEventListener("click", showSalsa);
coloursButton.addEventListener("click", showColours);
designButton.addEventListener("click", showDesign);
spanishButton.addEventListener("click", showSpanish);
superfoods1Button.addEventListener("click", showSuperfoods1);
superfoods2Button.addEventListener("click", showSuperfoods2);
greenConsultingButton.addEventListener("click", showGreenConsulting);
meetTheTeamButton.addEventListener("click", showMeetTheTeam);
stammtischButton.addEventListener("click", showStammtisch);
bakeryButton.addEventListener("click", showBakery);
colourChangerButton.addEventListener("click", showColourChanger);
surveyButton.addEventListener("click", showSurvey);
hatButton.addEventListener("click", showHat);
shapesButton.addEventListener("click", showShapes);
quizzesButton.addEventListener("click", showQuizzes);
