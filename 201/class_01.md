
## Getting Started

### Compose a short poem describing how HTTP sends data between computers? 

The browser sends an HTTP request to the server, asking it to send a copy if the website to the client. All the data sent between client and server are using TCP/IP. 

If the request is approved, the server starts sending the website's file (data packets) to the browser. The browser assembles these data packets into a complete web page and display it to the clients.

### Describe how HTML, CSS, and JS files are “parsed” in the browser?

The HTML are parsed first. The browser will search for any &lt;link&gt; element references to external CSS stylesheet and any &lt;script&gt; element references to scripts.

The browser sends another request to the server for the corresponding CSS files and JavaScript files, and from those parses the CSS and JavaScript.

The browser generates an in-memory DOM tree from the parsed HTML, generates an in-memory CSSOM structure from the parsed CSS, and compiles and executes the parsed JavaScript.

As the browser builds the DOM tree and applies the styles from the CSSOM tree and executes the JavaScript, a visual representation of the page is painted to the screen, and the user sees the page content and can begin to interact with it.

### How can you find images to add to a Website?
You can search for it using Google, save the image to the appropriate folder or copy the image's web address for later use. 

Or you can make the image yourself. 

### How do you create a String vs a Number in JavaScript?

// Numbers:

let x = 10;

The Number() method can be used to convert JavaScript variables to numbers. If the number cannot be converted, NaN (Not a Number) is returned.

// String:

let x = "String";

The toString() method returns a number as a string.

### What is a Variable and why are they important in JavaScript?

Variables are containers that store values. These are needed if you want to do anything interesting in programming. If the value does not change, then you cannot do anything dynamic. 

## Introduction to HTML

### What is an HTML attribute?

It provides additional information about HTML elements. 

### Describe the Anatomy of an HTMl element.

An HTML element is defined by a start tag, some content, and an end tag.

### What is the difference between &lt;article&gt; and &lt;section&gt; element tags?

The &lt;article&gt; tag specifies independent, self-contained content. The article should make sense on its own and should be distributed independently from the rest of the site.

The &lt;section&gt; defines a section in a document. It is used to either group different articles into different purposes or subjects, or define the different sections of a single article.

### What Elements does a “typical” website include?

&lt;!DOCTYPE html&gt;

&lt;html lang="en"&gt;
  
  &lt;head&gt;
  &lt;/head&gt;
  
  &lt;body&gt;    

&lt;main&gt;          
&lt;/main&gt;

&lt;/body&gt;

&lt;/html&gt;

### How does metadata influence Search Engine Optimization?

Many &lt;meta&gt; elements include content attribute, which specifies the actual meta content. Specifying a description that includes keywords relating to the content of your page is useful as it has the potential to make your page appear higher in relevant searches performed in search engines (such activities are termed Search Engine Optimization, or SEO.)

### How is the &lt;meta&gt; HTML tag used when specifying metadata?

&lt;meta&gt; tags always go inside the &lt;head&gt; element, and are typically used to specify character set, page description, keywords, author of the document, and viewport settings.

## Miscellaneous

### How to start to design a Website.

#### What is the first step to designing a Website?

Set tup the goals and visions for the website.

#### What is the most important question to answer when designing a Website?

 - What exactly do you want to accomplish?
 - How the website can assist you to accomplish your goal?
 - How it can be done? What is the layout needed to be?  

### Semantics

#### Why should you use an &lt;h1&gt; element over a &lt;span&gt; element to display a top level heading?

The &lt;span&gt; tag is an inline container used to mark up a part of a text or part of the document. While the &lt;h1&gt; defines the most important heading, which represents the main heading/subject for the whole page.

#### What are the benefits of using semantic tags in our HTML?

Some of benefits from writing semantic markup:

- Search engine will consider its contents as important keywords to influence the page's search ranking.
- Screen readers can use it as a signpost to help vissually impaired users navigate a page.
- Finding blocks of meaningful code is significantly easier than searching through endless &lt;div&gt; with or without semantic or namespaced classes.
- Suggests to the developer the type of data that will be populated.
- Semantic naming mirrors proper custom element/component naming.

### What is JavaScript?

1. Describe 2 things that require JavaScript in the Browser?
- The line that display the date and time.
- Popup window
2. How can you add JavaScript to an HTML document?

***Internal JavaScript***: JavaScript code is inserted between &lt;script&gt; and &lt;/script&gt; tags. 

***External JavaScript***: &lt;scrip src="path_or_file_name.js"&gt;&lt;/script&gt; 
