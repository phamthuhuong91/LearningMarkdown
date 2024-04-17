# Class 02

## HTML Text Fundamentals. HTML Advanced Text Formatting.

### Why is it important to use semantic elements in our HTML?
It is used to define parts of the web page. This helps the developers to organize and structure the we bpage much more easier. Below are some samples of semanatics elements that can be used to define different parts of a web page.
- &lt;article&gt;
- &lt;aside&gt;
- &lt;header&gt;
- &lt;footer&gt;
- &lt;main&gt;
- &lt;nav&gt;
- &lt;section&gt;

### How many levels of headings are there in HTML? 
Six

### What are some uses for the &lt;sup&gt; and &lt;sub&gt; elements?
The &lt;sup&gt; tag defines superscript text. which can be used for footnotes or references.  
The &lt;sub&gt; tag are used for subscript text, which is normally used for chemical formulas. 

### When using the &lt;abbr&gt; element, what attribute must be added to provide the full expansion of the term? 
The &lt;abbr&gt; tag defines an abbrreviation or an acronym. It should be used along with tittle attribute to show the description of the term when your mouse hovers the element.  

## Learn CSS

### What are ways we can apply CSS to our HTML?
- External CSS: include a reference to the external sheet style inside the &lt;link&gt; element, inside the &lt;head&gt; section.
- Interal CSS: defined inside the &lt;style&gt; element, inside the &lt;head&gt; section.
- Inline CSS: used to apply unique style to a single element. Add the attribute to the relevent element. 

### Why should we avoid using inline styles?
This is not an efficent way to style the HTML. One styling change might require a lot of editing for just one page. Inline CSS also mixes the content with the presentational code, making everything more difficult to read and understand.

### Review the block of code below and answer the following questions:
   h2 {
     color: black;
     padding: 5px;
   }

***What is representing the selector?*** h2, select all the &lt;h2&gt; elements

***Which components are the CSS declarations?*** The pairing of a property with a value is called declarartion, aka color: black or padding: 5px.

***Which components are considered properties?*** color and padding.

## Learn JS

### What data type is a sequence of text enclosed in single quote marks? 
String.

### List 4 types of JavaScript operators.
- Assignment Operator
- Addition Operator
- Multiplication Operator
- Comparison Operator

### Describe a real world Problem you could solve with a Function.
Convert Fahrenheit to Celsius and vice versa.

## Making Decisions In Your Code – Conditionals.

- An if statement checks a (condition) and if it evaluates to (true), then the code block will execute.

### What is the use of an else if?
An if statement checks a (condition) and if it evaluates to (true), then the code block will execute. If the condition evaluates to false, the second bloack of code - after the else statement - runs instead.

### List 3 different types of comparison operators.
- ==	equal to
- ===	equal value and equal type
- !=	not equal
- !==	not equal value or not equal type
- <	less than
- <=	less than or equal to
- ?	ternary operator

### What is the difference between the logical operator && and ||?
&& logical and
|| logical or