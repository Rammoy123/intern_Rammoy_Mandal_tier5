let page = document.getElementById("buttonDiv");
let selectedClassName = "current";
const presetButtonColors = ["#3aa757", "#e8453c", "#f9bb2d", "#4688f1"];

// Reacts to a button click by marking the selected button and saving the selection
function handleButtonClick(event) {
  // Remove styling from the previously selected color
  let current = event.target.parentElement.querySelector(
    `.${selectedClassName}`
  );
  if (current && current !== event.target) {
    current.classList.remove(selectedClassName);
  }

  // Mark the button as selected
  let color = event.target.dataset.color;
  event.target.classList.add(selectedClassName);
  //setting the clicked color to color value
  chrome.storage.sync.set({ color });
}
// Add a button to the page for each supplied color
function constructOptions(buttonColors) {
  chrome.storage.sync.get("color", (data) => {
    let currentColor = data.color;
    // For each color we were provided…
    for (let buttonColor of buttonColors) {
      // …create a button with that color…
      let button = document.createElement("button");
      button.dataset.color = buttonColor;
      //injecting content script inline
      button.style.backgroundColor = buttonColor;

      // the currently selected color is marked
      if (buttonColor === currentColor) {
        button.classList.add(selectedClassName);
      }

      //  when that button is clicked registration of listener occur
      button.addEventListener("click", handleButtonClick);
      page.appendChild(button);
    }
  });
}

// Initialization of the page by constructing the color options
constructOptions(presetButtonColors);