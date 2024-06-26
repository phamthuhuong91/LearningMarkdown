## Audio and Video in HTML; Domain Modeling Revisited

These topics are important to understand where we were, where we are, and where we are going with web technologies. It is also important to know and understand that technologies change day-by-day and even minute-by-minute. Flex was the hotness a few years back and now Grid is king.

### Explain how the ability to use video and audio on the web has evolved since the early 2000s

Video used to have to have additional plugins to play in a browser. Not to mention additional codecs.
They used Adobe Flash.
Microsoft Silverlight (very short lived).
Codecs and video plugins were PLAGUED with malware, spyware, and viral software. Unless the video was VERY short and low quality streaming really was non-existent and most videos had to be downloaded. Download software with resume support was a lifesaver in those days. When I was in 5th or 6th grade I remember spending two whole weeks downloading a 2 minute trailer for the game StarCraft. Something that now would happen in an instant.

### Describe the use of the src and controls attributes in the
MDN notes the src attribute as working just as an img attribute in specifying where the file is located. The controls attribute gives the user a way to control the media, such as starting or stopping the video.

### Why is it important to have fallback content inside the
The fallback content allows the browser to render the fallback content in case it is unable to support playing it.

### Write a very short story where and
Audio and video are an integral part of the web now. I am not a creative writer so I will go with that!

### How does Grid layout differ from Flex
The biggest difference that I have noted is the conceptual difference with how a 'grid' works. With Flex you can define a container (box) and then slice that box veritcally as needed. Where Grid seems to make it easier both slicing vertically and horizontally. This would have been very useful in the two hour drill from Class 10 lab-a namely the ingredient section.

### Grid container, grid item, and grid line are a few important terms to understand when using Grid. Please describe these terms in a few sentences
Inspired by CSS Tricks.

Grid container - This is the element that has display: grid and defines the area of where the grid is to be applied.
Grid item - These are the children of the grid container.
Grid line - These are the dividing lines that make up the grid.
Besides making a site visually appealing across different screen sizes, why should developers make images responsive
To avoid the art direction problem and people switching resolutions. MDN.

### Define the following  attributes srcset and sizes. Write an example of how they are used
srcset and sizes allows developers to use multiple sizes of images based on resolution.
An example would be to define a 800x800img for desktops with a resolution of higher than 1024x768 or 128x128 for a cell phone.

### How is srcset more helpful for responsive images than CSS or JavaScript
This is because the parser in the browser is able to download images based on resolution before CSS and JS are parsed.