let color = '#000000'

chrome.runtime.onInstalled.addListener(() => {
  //chrome.storage API is used to store, retrieve, and track changes to user data. works like local storage API with some key differences
  // chrome API chrome.storage will sync the data & store the variable 
  chrome.storage.sync.set({ color });
  //

  console.log('Default background color set to %cblack', `color: ${color}`);
});


