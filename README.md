# react-project

Template npm project with workflow set up.
Counter button as example

'npm start' to continuately compile your changes (index.html must refer to bundle.js)
'npm run build' to compile the release version (index.html must refer to bundle.min.js)

When seraching use this exclude pattern: -*.min.js,-bundle.*,-cache*


## Flux Messsage flow

Virtual Dom  ->  DispatchedActions  ->  Store  ->  (AppDispatcher)  ->  Main.react refreshes
