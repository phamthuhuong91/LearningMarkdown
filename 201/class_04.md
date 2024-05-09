## Learn HTML
### Creating Hyperlinks

***To create a basic link, we wrap text or other content inside what element?***
&lt;a&gt;

***The href attribute contains what information?***
The web address

***What are some ways we can ensure links on our pages are accessible to all readers?***
- Screen reader users like jumping around from link to link on the page, and reading links out of context.
- Search engines use link text to index target files, so it is a good idea to include keywords in your link text to effectively describe what is being linked to.
- Visual readers skim over the page rather than reading every word, and their eyes will be drawn to page features that stand out, like links. They will find descriptive link text useful.


## CSS Layout

### CSS Layout: Normal Flow CSS Layout: Positioning

***What is meant by “normal flow”?***
Normal flow is the default way of laying out elements on an HTML page.

***What are a few differences between block-level and inline elements?***
- By default, block-level elements are laid out in the block flow direction, which is based on the parent's writing mode (initial: horizontal-tb). Each element will appear on a new line below the last one, with each one separated by whatever margin that's been specified. In English, for example, (or any other horizontal, top to bottom writing mode) block-level elements are laid out vertically.

- Inline elements behave differently. They don't appear on new lines; instead, they all sit on the same line along with any adjacent (or wrapped) text content as long as there is space for them to do so inside the width of the parent block level element. If there isn't space, then the overflowing content will move down to a new line.

***___ positioning is the default for every html element.***
Static positioning

***Name a few advantages to using absolute positioning on an element.***
- Can create isolated UI features that don't interfere with the layout of other elements on the page. For example, popup information boxes, control menus, rollover panels, UI features that can be dragged and dropped anywhere on the page, and so on.
- Rather than positioning the element based on its relative position within the normal document flow, they specify the distance the element should be from each of the containing element's sides.

What is a key difference between fixed positioning and absolute positioning?
- An element with position: fixed; is positioned relative to the viewport, which means it always stays in the same place even if the page is scrolled. The top, right, bottom, and left properties are used to position the element. A fixed element does not leave a gap in the page where it would normally have been located.

- An element with position: absolute; is positioned relative to the nearest positioned ancestor (instead of positioned relative to the viewport, like fixed). However; if an absolute positioned element has no positioned ancestors, it uses the document body, and moves along with page scrolling.

## Learn JS
### Functions – Reusable Blocks of Code

***Describe the difference between a function declaration and a function invocation.***

A JavaScript function is defined (declared) with the function keyword, followed by a name, followed by parentheses () along with the code to be executed.

The code inside the function will execute when "something" **invokes** (calls) the function

***What is the difference between a parameter and an argument?***

Function **parameters** are listed inside the parentheses () in the function definition.

Function **arguments** are the values received by the function when it is invoked.

## Miscellaneous

***6 Reasons for Pair Programming***

Pick 2 benefits to pair programming and reflect on how these benefits could help you on your coding journey.

- Learning from fellow students
- Engaged collaboration