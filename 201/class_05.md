## HTML Media

### Using Images In HTML. Read Common Image Types and Choosing Image Formats.

***What is a real world use case for the alt attribute being used in a website?***
Specifies an alternate text for the image, if the image for some reason cannot be displayed

***How can you improve accessibility of images in an HTML document?***
Add alt text and title if you want your images to be conveyed to all users.
If the picture is purely decorative, provide at least null alt text (alt=””).
Avoid text in images. If it is impossible, make sure that this text is repeated in alt text.

***Provide an example of when the figure element would be useful in an HTML document.***
A figure sometimes says a thousand words, for example a map.

***Describe the difference between a gif image and an svg image, pretend you are explaining to an elder in your community.***
An SVG image will look super crisp on any screen resolution, no matter how much you scale it up. Whereas GIFs—a raster image format—do not. Try zooming in a page that contains a GIF image and watch the GIF become pixelated and its contents blurred.

***What image type would you use to display a screenshot on your website and why?***
PNG. 

**JPEG – Joint Photographic Experts Group**

Pros:
- Universal browser support
- Small file and email attachment size, fast loading
- Supports displaying millions of colors  
- Sharp, good quality photo images

Cons: 
- Does not support transparent backgrounds
- Lossy image cpoor text readability 
- Not to be used for computer-generated graphics

**PNG – Portable Network Graphic**

Pros: 
- Universal browser support
- Supports transparency
- Best used for graphical elements
- Lossless compression
- Small file size with limited colors

Cons: 
- Large file size with millions of colors
- Not ideal for printing–optimized for the screen

**WebP**

Pros: 
- Smaller file size for the same image quality
- Uses both lossy and lossless compression
- Supports transparency

Cons: 
- Not supported by all browsers, specifically Safari and Internet Explorer
- Not supported by all CMS platforms, including Squarespace

**SVG – Scalable Vector Graphic**

Pros: 
- Universal browser support
- Small file size
- Loss-free scaling for basic shapes and text
- Supported by illustration software

Cons: 
- Not an ideal format for images or complex drawings
- Not supported by all CMS platforms, but there are workarounds
- Not supported by some default image editors

**GIF – Graphics Interchange Format**

Pros: 
- Animation support: used for small animations and low-resolution - video clips
- Universal browser support
- Small file size

Cons: 
- Loss of quality of photographs
- Limited colors due to 8-bit (PNG and JPG supports 24-bit)
- Copyright issues

## Learn CSS
### Using Color in CSS. Styling HTML Text Elements

***Describe the difference between foreground and background colors of an HTML element, pretend you are talking to someone with no technical knowledge.***
The color property defines the foreground color of an HTML element's content (text) and the background-color property defines the element's background color

***Your friend asks you to give his colorless blog website a touch up. How would you use color to give his blog some character?***
Properties that can have color: Text, Boxes, Border
Check color contrast using https://coolors.co/

***What should you consider when choosing fonts for an HTML document?***

Choosing the right font has a huge impact on how the readers experience a website. The right font can create a strong identity for your brand. Using a font that is easy to read is important. The font adds value to your text. It is also important to choose the correct color and text size for the font.

In CSS there are five generic font families:

- **Serif fonts** have a small stroke at the edges of each letter. They create a sense of formality and elegance.
- **Sans-serif** fonts have clean lines (no small strokes attached). They create a modern and minimalistic look.
- **Monospace fonts** - here all the letters have the same fixed width. They create a mechanical look. 
- **Cursive fonts** imitate human handwriting.
- **Fantasy fonts** are decorative/playful fonts.

Here are some important things to bear in mind about web fonts:

- Fonts generally aren't free to use. You have to pay for them and/or follow other license conditions, such as crediting the font creator in your code (or on your site). You shouldn't steal fonts and use them without giving proper credit.

- All major browsers support WOFF/WOFF2 (Web Open Font Format versions 1 and 2). Even older browsers such as IE9 (released in 2011) support the WOFF format.

- WOFF2 supports the entirety of the TrueType and OpenType specifications, including variable fonts, chromatic fonts, and font collections.

- The order in which you list font files is important. If you provide the browser with a list of multiple font files to download, the browser will choose the first font file it's able to use. That's why the format you list first should be the preferred format — that is, WOFF2 — with the older formats listed after that. Browsers that don't understand one format will then fall back to the next format in the list.

- If you need to work with legacy browsers, you should provide EOT (Embedded Open Type), TTF (TrueType Font), and SVG web fonts for download. This article explains how to use the Fontsquirrel Webfont Generator to generate the required files.

***What do font-size, font-weight, and font-style do to HTML text elements?***

The **font-size** property sets the size of the text. Being able to manage the text size is important in web design. However, you should not use font size adjustments to make paragraphs look like headings, or headings look like paragraphs. 

The **font-weight** property sets how thick or thin characters in text should be displayed.

The **font-style** property is mostly used to specify italic text.

This property has three values:

- normal - The text is shown normally
- italic - The text is shown in italics
- oblique - The text is "leaning" (oblique is very similar to italic, but less supported)

***Describe two ways you could add spacing around the characters displayed in an h1 element.**

- letter-spacing
- word-spacing
