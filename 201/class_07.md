## Domain Modeling

### Explain why we need domain modeling.
Domain modeling is the process of creating a conceptual model in code for a specific problem. A model describes the various entities, their attributes and behaviors, as well as the constraints that govern the problem domain. An entity that stores data in properties and encapsulates behaviors in methods is commonly referred to as an object-oriented model.

A domain model that's articulated well can verify and validate the understanding of a specific problem among various stakeholders. As a communication tool, it defines a vocabulary that can be used within and between both technical and business teams.

## HTML Table Basics

### Why should tables not be used for page layouts?
The World Wide Web Consortium (W3C®) discourages use of tables for layout because they are striving for a web in which content and structure are completely separate from presentation. This allows content to be rendered meaningfully across a wide variety of devices. In the W3C's world view, cascading style sheets (CSS) is the vehicle by which presentation and layout are defined. Also, layout tables tend to be very complex, and often include multiple layers of nested tables, which can be burdensome if screen readers announce table properties as users enter and exit them.

If tables are used for layout, the key to making them accessible is to be sure the content makes logical sense when read in the order in which it will be read by screen readers and text-only browsers, which render tables from top to bottom (by row) and left to right (by column).

### List and describe 3 different semantic HTML elements used in an HTML
&lt;th&gt;	Defines a header cell in a table

&lt;tr&gt;	Defines a row in a table

&lt;td&gt;	Defines a cell in a table

&lt;caption&gt;	Defines a table caption

&lt;colgroup&gt;	Specifies a group of one or more columns in a table for formatting
&lt;thead&gt;	Groups the header content in a table

&lt;tbody&gt;	Groups the body content in a table

&lt;tfoot&gt;	Groups the footer content in a table

## Introducing Constructors

### What is a constructor and what are some advantages to using it?
Sometimes we need to create many objects of the same type.
To create an object type we use an object constructor function.
It is considered good practice to name constructor functions with an upper-case first letter.

### How does the term this differ when used in an object literal versus when used in a constructor?
In the constructor function, this has no value.
The value of this will become the new object when a new object is created.

## Object Prototypes Using A Constructor

### Explain prototypes and inheritance via an analogy from your previous work experience.
Prototypes are hidden objects that are used to share the properties and methods of parent class to child classes. 
Prototype inheritance in javascript is the linking of prototypes of a parent object to a child objects to share and utilize the properties of a parent class using a child class 
It is similar to the constructor function in the lab 7. All the function needed are in the constructor. When the new store info is added, the sales data will be generated automatically. 