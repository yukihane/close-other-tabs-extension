chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    title: chrome.i18n.getMessage("menu_title"),
    id: "closeOtherTabs",
    contexts: ["all"],
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.menuItemId === "closeOtherTabs") {
    const windowId = tab.windowId;

    closeTabs(windowId);

    // close other windows
    chrome.windows.getAll({}, function (windows) {
      const targets = windows.filter((w) => w.id !== windowId);
      for (const t of targets) {
        chrome.windows.remove(t.id);
      }
    });
  }
});

chrome.action.onClicked.addListener(function (tab) {
  const windowId = tab.windowId;
  closeTabs(windowId);
});

// close same window inactive tabs
function closeTabs(windowId) {
  chrome.tabs.query({ active: false, windowId: windowId }, function (tabs) {
    const tabIds = tabs.map((tab) => tab.id);
    chrome.tabs.remove(tabIds);
  });
}
