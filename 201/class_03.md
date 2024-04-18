
## Learn HTML
### Ordered and Unordered lists.

- When should you use an unordered list in your HTML document?
When the order of the items is meaningless.

- How do you change the bullet style of unordered list items?
The CSS list-style-type property can be used to define the list item marker. It can be one of the following values: disc, circle, square, none.

- When should you use an ordered list vs an unorder list in your HTML document?
I will use the orderlist when the order of the items is crucial, such as a step by step introduction, or a course summary. Otherwise, I will just use an unorder list.

- Describe two ways you can change the numbers on list items provided by an ordered list?
The type attribute of the <ol> tag, defines the type of the list item marker
type ="1" - The list item will be numbered with numbers. (default)
type ="A" - The list item will be numbered with uppercase letters.
type ="a" - The list item will be numbered with lowercase letters.
type ="I" - The list item will be numbered with uppercase roman letters.
type ="i" - The list item will be numbered with lowercase roman letters.
The start attribute is used when you want to count from a specified number.

## Learn CSS. The Box Model.

- Describe the CSS properties of margin and padding as characters in a story.What is their role in a story titled: “The Box Model”?

Margins are used to create space around elements, outside of any defined borders. Padding is used to create space around an element's content, inside of any defined borders. 

- List and describe the four parts of an HTML elements box as referred to by the box model.
    - Content box: The area where your content is display.
    - Padding box: The area around the content as whitespace.
    - Border box: It wraps around the content and any padding.
    - Margin box: This is the outermost layer, wrapping the content, padding and border as whitespce between this box and other elements.

## Learn JS. Arrays. Operators and Expressions. Conditionals. Loops.

- What data types can you store inside of an Array?
Varous data type cam be stored inside of an Array, such as: strings, numbers, objects and even other arrays.

- Is the people array a valid JavaScript array? If so, how can I access the values stored? If not, why?
The people array is a valid JavaScript array. You can access the array by using this syntax: array_name[location].

 const people = [['pete', 32, 'librarian', null], ['Smith', 40, 'accountant', 'fishing:hiking:rock_climbing'], ['bill', null, 'artist', null]];

List five shorthand operators for assignment in javascript and describe what they do.

=	Example: x  = y	Meaning: x = y

+=	Example: x += y	Meaning: x = x + y

-=	Example: x -= y	Meaning: x = x - y

*=	Example: x *= y	Meaning: x = x * y

/=	Example: x /= y	Meaning: x = x / y

%=	Example: x %= y	Meaning: x = x % y

**=	Example: x **= y Meaning: x = x ** y

- Read the code below and evaluate the last expression and explain what the result would be and why.

 let a = 10;
 let b = 'dog';
 let c = false;

 // evaluate this
 (a + c) + b;

The result should be 10dog. The addition will add the numbers and strings

- Describe a real world example of when a conditional statement should be used in a JavaScript program.

Check an individual is old enough to vote or not.

- Give an example of when a Loop is useful in JavaScript.

Ask user to give an appropriate input.