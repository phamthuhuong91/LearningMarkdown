## What is Markdown?

It is a lightweight markup language used for formatting plaintext documents. 

In an application like Microsoft Word (a WYSIWYG- What You See Is What you Get- editor), you click buttons to format words and phrases, and the changes are visible immediately. Markdown isn’t like that. When you create a Markdown-formatted file, you add Markdown syntax to the text to indicate which words and phrases should look different.

## Why do we use Markdown?

- Markdown can be used for everything. People use it to create websites, documents, notes, books, presentations, email messages, and technical documentation.

- Markdown is portable. Files containing Markdown-formatted text can be opened using virtually any application. If you decide you don’t like the Markdown application you’re currently using, you can import your Markdown files into another Markdown application. That’s in stark contrast to word processing applications like Microsoft Word that lock your content into a proprietary file format.

- Markdown is platform independent. You can create Markdown-formatted text on any device running any operating system.

- Markdown is future proof. Even if the application you’re using stops working at some point in the future, you’ll still be able to read your Markdown-formatted text using a text editing application. This is an important consideration when it comes to books, university theses, and other milestone documents that need to be preserved indefinitely.

- Markdown is everywhere. Websites like Reddit and GitHub support Markdown, and lots of desktop and web-based applications support it.

## Markdown Syntax

<details>
  <summary><strong>Heading</strong></summary>
  <br> 
To create a heading, add number signs (#) in front of a word or phrase. The number of number signs you use should correspond to the heading level. For example, to create a heading level two <pre>&lt;h2&gt;</pre>, or use two number signs <pre>## My Header</pre>

<table>
  <tr>
    <th>Markdown</th>
    <th>HTML</th>
    <th>Rendered Output</th>
  </tr>
  <tr>
    <td># Heading level 1</td>
    <td><pre>&lt;h1&gt;Heading level 1&lt;/h1&gt;</pre></td>
    <td><h1>Heading level 1</h1></td>
  </tr>
  <tr>
    <td>## Heading level 2</td>
    <td><pre>&lt;h2&gt;Heading level 2&lt;/h2&gt;</pre></td>
    <td><h2>Heading level 2</h2></td>
  </tr>
  <tr>
    <td>### Heading level 3</td>
    <td><pre>&lt;h3&gt;Heading level 3&lt;/h3&gt;</pre></td>
    <td><h3>Heading level 3</h3></td>
  </tr>
  <tr>
    <td>#### Heading level 4</td>
    <td><pre>&lt;h4&gt;Heading level 4&lt;/h4&gt;</pre></td>
    <td><h4>Heading level 4</h4></td>
  </tr>
  <tr>
    <td>##### Heading level 5</td>
    <td><pre>&lt;h5&gt;Heading level 5&lt;/h5&gt;</pre></td>
    <td><h5>Heading level 5</h5></td>
  </tr>
  <tr>
    <td>###### Heading level 6</td>
    <td><pre>&lt;h6&gt;Heading level 6&lt;/h6&gt;</pre></td>
    <td><h6>Heading level 6</h6></td>
  </tr>
</table>

</details>

<details>
  <summary><strong>Bold and Italic</strong></summary>
  <br> 
  
To bold text, add two asterisks or underscores before and after a word or phrase. To bold the middle of a word for emphasis, add two asterisks without spaces around the letters.

To italicize text, add one asterisk or underscore before and after a word or phrase. To italicize the middle of a word for emphasis, add one asterisk without spaces around the letters.

<table>
  <tr>
    <th>Best Practice?</th>
    <th>Markdown</th>
    <th>HTML</th>
    <th>Rendered Output</th>
  </tr>
  <tr>
    <td>&#9989</td>
    <td>Be the best of **whatever** you are</td>
    <td>Be the best of <pre>&lt;strong&gt;whatever&lt;/strong&gt;</pre> you are</td>
    <td>Be the best of <strong>whatever</strong> you are</td>
  </tr>
  <tr>
    <td>&#9940</td>
    <td>Be the best of __whatever__ you are</td>
    <td>Be the best of <pre>&lt;b&gt;whatever&lt;/b&gt;</pre> you are</td>
    <td>Be the best of <b>whatever</b> you are</td>
  </tr>
   <tr>
    <td>&#9989</td>
    <td>Be the best of *whatever* you are</td>
    <td>Be the best of <pre>&lt;em&gt;whatever&lt;/em&gt;</pre> you are</td>
    <td>Be the best of <em>whatever</em> you are</td>
  </tr>
  <tr>
    <td>&#9940</td>
    <td>Be the best of _whatever_ you are</td>
    <td>Be the best of <pre>&lt;i&gt;whatever&lt;/i&gt;</pre> you are</td>
    <td>Be the best of <i>whatever</i> you are</td>
  </tr>
   <tr>
    <td>&#9989</td>
    <td>Be the best of ****whatever**** you are</td>
    <td>Be the best of <pre>&lt;em&gt;&lt;strong&gt;whatever&lt;strong&gt;&lt;/em&gt;</pre> you are</td>
    <td>Be the best of <em><strong>whatever</strong></em> you are</td>
  </tr>
  
</table>

</details>


### How do you create a link with Markdown?

### What are the three symbols you can use to create an unordered (bulleted) list with Markdown?
