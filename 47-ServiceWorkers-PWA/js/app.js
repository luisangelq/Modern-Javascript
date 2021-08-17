/*
PWA: Load all information less than 5s
- It can work offline
- installable

ServiceWorker:
- Its the base of the PWA there are scripts that run all the time
- It can work offline
- Doesnt have access to the DOM
- Load instantly 

Functions not available in ServiceWorker:
- window (use self)
- document (use caches)
- localStorage (use fetch)
*/

