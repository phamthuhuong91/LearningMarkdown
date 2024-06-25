## JavaScript Object Basics

### How would you describe an object to a non-technical friend you grew up with?
The Object type represents one of JavaScript's data types. It is used to store various keyed collections and more complex entities.

### What are some advantages to creating object literals?
Using objects in JavaScript can be beneficial as they allow data to be organized in an efficient and manageable way. 
Objects help you to keep related variables and functions together, allowing you to create modular code that can be reused and abstracted away into reusable components. 
Objects also enable you to create properties that can be shared and reused across multiple instances of the same object, making it possible to create objects with the same structure but different values.


### How do objects differ from arrays?
An array is a special variable that can hold more than one value at a time. It is a list-like structure that consists of an ordered collection of elements, each identified by an index or a key. Arrays are declared using [] square brackets notation in JavaScript.

On the other hand, an object is a collection of key-value pairs that is used to store various related data. An object is referred to as an instance of its object type or class. Objects consist of properties which have keys and values. Objects are declared using {} curly braces notation in JavaScript.

The key difference between Arrays and Objects is how the data is organized. Arrays are used when we need to collection a list of elements of the same data type or structure. On the other hand, objects are used when grouping multiple sets of data that belong together using labels, where each property or key has its own value of any type.


### Give an example for when you would need to use bracket notation to access an object’s property instead of dot notation.
Dot notation is generally preferred over bracket notation because it is more succinct and easier to read. However there are some cases where you have to use square brackets. For example, if an object property name is held in a variable, then you can't use dot notation to access the value, but you can access the value using bracket notation.

### Evaluate the code below. What does the term this refer to and what is the advantage to using this?
The this keyword refers to the current object the code is being written inside. When you only have to create a single object literal, it's not so useful. But if you create more than one, this enables you to use the same method definition for every object you create.

## Introduction To The DOM

### What is the DOM?
The Document Object Model (DOM) is a programming interface for web documents. It represents the page so that programs can change the document structure, style, and content. The DOM represents the document as nodes and objects; that way, programming languages can interact with the page.


### Briefly describe the relationship between the DOM and JavaScript.
The previous short example, like nearly all examples, is JavaScript. That is to say, it is written in JavaScript, but uses the DOM to access the document and its elements. The DOM is not a programming language, but without it, the JavaScript language wouldn't have any model or notion of web pages, HTML documents, SVG documents, and their component parts. The document as a whole, the head, tables within the document, table headers, text within the table cells, and all other elements in a document are parts of the document object model for that document. They can all be accessed and manipulated using the DOM and a scripting language like JavaScript.

The DOM is not part of the JavaScript language, but is instead a Web API used to build websites. JavaScript can also be used in other contexts. For example, Node.js runs JavaScript programs on a computer, but provides a different set of APIs, and the DOM API is not a core part of the Node.js runtime.

The DOM was designed to be independent of any particular programming language, making the structural representation of the document available from a single, consistent API. Even if most web developers will only use the DOM through JavaScript, implementations of the DOM can be built for any language