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

## Release packages

Publishing a GitHub Release with a tag such as `tag/v1.0.3` runs the
**Package extension release** workflow. It packages that tag's source and attaches
`close-other-tabs-1.0.3.zip` to the release. Download this asset for either store;
the automatically generated **Source code (zip)** includes a parent directory and is not the store package.
The tag version must match `manifest.json`.

For an existing release (including `tag/v1.0.3`), after this workflow is merged into
`main`, open **Actions → Package extension release → Run workflow**, select `main`,
and enter the release tag. This also works when the old tag does not contain the workflow.
The workflow attaches a ZIP to the existing release; it does not submit to either store.
An existing asset with the same name is not overwritten; a repeated upload fails.
The workflow needs GitHub Actions enabled and permission for its `GITHUB_TOKEN` to write repository contents.

## Icon

The icon uses [衡山毛筆フォント行書 (KouzanBrushFontGyousyoOTF)](https://opentype.jp/kouzangyousho.htm), which the distributor permits for free commercial and logo use.
The character in `icon/icon.svg` is converted to paths, so rendering does not require the font to be installed.
`icon/icon128.png` is the 128×128 transparent raster version of the same artwork, with a white outline for dark browser themes.
