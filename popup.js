let changeColor = document.getElementById("changeColor");

chrome.storage.sync.get("color", ({ color }) => {
  changeColor.style.backgroundColor = color;
});
//The keyword async before a function makes the function return a promise:
//The await expression causes async function execution to pause until a Promise is settled(fulfiment or rejected)
//// When the button is clicked, inject setPageBackgroundColor into current page will occur
changeColor.addEventListener("click", async () => {
    let [tab] = await chrome.tabs.query({ active: true, currentWindow: true });
/// chrome.scripting API is used to inject JavaScript and CSS into websites like content script..though have some diffs.
    chrome.scripting.executeScript({
      target: { tabId: tab.id },
      function: setPageBackgroundColor,
  
  });
  });
  
  // The body of this function will be executed as a content script inside the current page
  function setPageBackgroundColor() {
    chrome.storage.sync.get("color", ({ color }) => {
      document.body.style.backgroundColor = color;

    });
  }
  