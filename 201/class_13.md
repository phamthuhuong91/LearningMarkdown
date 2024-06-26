### Local Storage

## Why would a developer use local storage for a web application?
The web itself is stateless for the most part which means that it does not have a concept of it's current state. Developers can solve this by using local storage made available by the browser. Local storage adds a way to persist things through page reloads and even sessions.

## What information should not be stored in local storage?
Always work under the assumption that local storage is compromised. This will keep you in the mindset of not storing PII, trade scerets, etc in local storage.

## Local storage can store what type of data? How would you convert it to that type before storing?
Local storage uses strings and uses a get and set much like any key value pairs in JS. You can use JSON.stringify to convert data to a string and parse it later with the JSON.parse method.