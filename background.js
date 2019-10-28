chrome.contextMenus.create({
  title: "Close Other Tabs",
  onclick: function(info, tab) {
    chrome.tabs.query({ active: false, currentWindow: true }, function(tabs) {
      const tabIds = tabs.map(t => t.id);
      chrome.tabs.remove(tabIds);
    });
  }
});

// chrome.contextMenus.create({
//   title: "Close Other Windows",
//   onclick: function(info, tab){
//     chrome.tabs.query({currentWindow: false},
//       function(tabs){
//         const tabIds = tabs.map(t=>t.id);
//         chrome.tabs.remove(tabIds);
//       });
//   }
// });
