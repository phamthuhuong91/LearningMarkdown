## Local Storage

### Why would a developer use local storage for a web application?
If your application requires storing user-generated content or long-term user data such as profiles, saved preferences, or history, local storage is the preferred choice. It ensures that users' data remains accessible across multiple sessions, enhancing the overall user experience.

The web itself is stateless for the most part which means that it does not have a concept of it's current state. Developers can solve this by using local storage made available by the browser. Local storage adds a way to persist things through page reloads and even sessions.

### What information should not be stored in local storage?
Always work under the assumption that local storage is compromised. Personally Identifiable Information (PII), authentication tokens, user locations and API keys, etc., should never be stored in the local storage.

### Local storage can store what type of data? How would you convert it to that type before storing?
Local storage uses strings and uses a get and set much like any key value pairs in javascript. You can use JSON.stringify to convert data to a string and parse it later with the JSON.parse method.

The setItem() method allows you to store values in localStorage. It takes two parameters: a key and a value. The key can be referenced later to fetch the value attached to it. Here’s how it should look:

localStorage.setItem('name', 'Obaseki Nosa');
In the code above, you can see that name is the key and Obaseki Nosa is the value. As we’ve already noted, localStorage can only store strings. To store arrays or objects in localStorage, you would have to convert them to strings.

To do this, we use the JSON.stringify() method before passing to setItem(), like so:

const userArray = ["Obaseki",25]
localStorage.setItem('user', JSON.stringify(userArray));

getItem() allows you to access the data stored in the browser’s localStorage object. This method accepts only one parameter, the key, and returns the value as a string:

localStorage.getItem('name');
This returns a string with a value of "Obaseki Nosa". If the specified key doesn’t exist in localStorage, it’ll return null. In the case of the array, we make use of the JSON.parse() method, which converts a JSON string into a JavaScript object:

JSON.parse(localStorage.getItem('user'));