chrome.contextMenus.create({
  title: chrome.i18n.getMessage("menu_title"),
  onclick: function(info, tab) {
    const windowId = tab.windowId;

    closeTabs(windowId);

    // close other windows
    chrome.windows.getAll({}, function(windows) {
      const targets = windows.filter(w => w.id !== windowId);
      for (t of targets) {
        chrome.windows.remove(t.id);
      }
    });
  }
});

chrome.browserAction.onClicked.addListener(function(tab) {
  const windowId = tab.windowId;
  closeTabs(windowId);
});

// close same window tabs
function closeTabs(windowId) {
  chrome.tabs.query({ active: false, windowId: windowId }, function(tabs) {
    const tabIds = tabs.map(t => t.id);
    chrome.tabs.remove(tabIds);
  });
}
