Duck Habit Hub v24.41 Performance Update

Upload these 3 files to the ROOT of your repo and replace the old versions:
- index.html
- script-v24-41.js
- sw-v24-41.js

What changed:
- The service worker no longer tries to pre-cache almost every asset in the whole app.
- Only the app shell is cached up front.
- Images, game files, and other assets now cache as they are actually used.
- Character warmup now only preloads the selected character's equipped look + expressions,
  instead of preloading every wardrobe asset for every OC at startup.

This should make the app load noticeably faster, especially on iPad/phone.
