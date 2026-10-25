# Close Other Tabs Extension

## What's this?

Add "Close other tabs" button and "Close other tabs and windows" context menu, on Google Chrome and Firefox.

## Installation

* [Chrome Webstore](https://chrome.google.com/webstore/detail/close-other-tabs/ahenmkdinicgmbodgnfojondbdpkbojd)
* [Add-ons for Firefox](https://addons.mozilla.org/firefox/addon/close-other-tabs/)

Requires Chrome 121+ or Firefox 121+. Both browsers use the same package:
Chrome runs `background.service_worker`, and Firefox runs `background.scripts`.
The Firefox add-on ID matches the existing AMO listing, and the extension declares that it does not collect or transmit data.

To create the ZIP for either store, run this PowerShell command from the repository root:

```powershell
Compress-Archive -Path manifest.json, background.js, _locales, icon -DestinationPath close-other-tabs-1.0.3.zip
```

Before submitting, load the directory through `chrome://extensions` (Developer mode → Load unpacked)
or select `manifest.json` through `about:debugging#/runtime/this-firefox` (Load Temporary Add-on).
Using disposable tabs and windows, check that the toolbar button closes only the other tabs in its window,
and that the context menu also closes other windows. Check the icon on both light and dark themes.

## Icon

The icon uses [衡山毛筆フォント行書 (KouzanBrushFontGyousyoOTF)](https://opentype.jp/kouzangyousho.htm), which the distributor permits for free commercial and logo use.
The character in `icon/icon.svg` is converted to paths, so rendering does not require the font to be installed.
`icon/icon128.png` is the 128×128 transparent raster version of the same artwork, with a white outline for dark browser themes.
