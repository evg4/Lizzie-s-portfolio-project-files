function toggleDisplay(domElement) {
  if (domElement.style.display === "block") {
    domElement.style.display = "none";
  } else {
    domElement.style.display = "block";
  }
}

export { toggleDisplay };
