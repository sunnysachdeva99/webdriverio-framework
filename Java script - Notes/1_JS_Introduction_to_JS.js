/* 

What is JavaScript(JS)?

Ans-- JavaScript (JS) is a lightweight, interpreted, or just-in-time compiled programming language 
with first-class functions. While it is most well-known as the scripting language for Web pages, 
many non-browser environments also use it, such as Node.js, Apache CouchDB and Adobe Acrobat. 

JavaScript is a prototype-based, multi-paradigm, single-threaded, dynamic language, supporting
 object-oriented, imperative, and declarative (e.g. functional programming) styles.


Prerequisites:

    A basic understanding of HTML and CSS.


High-level definition:

    JavaScript is a scripting or programming language that allows you to implement complex features 
    on web pages.It is the third layer of the layer cake of standard web technologies, two of which
    (HTML and CSS).

    1.HTML is the markup language that we use to structure and give meaning to our web content, for example
    defining paragraphs, headings, and data tables, or embedding images and videos in the page.

    2.CSS is a language of style rules that we use to apply styling to our HTML content, for example setting 
    background colors and fonts, and laying out our content in multiple columns.

    3.JavaScript is a scripting language that enables you to create dynamically updating content, control 
    multimedia, animate images, and pretty much everything else.

What Javascript can do?

Ans-- The core client-side JavaScript language consists of some common programming features that allow you
      to do things like:

        1.Store useful values inside variables.
        2.Operations on pieces of text
        3.Running code in response to certain events occurring on a web page.
        4.Application Programming Interfaces (APIs) can be used with JS
            1.Browser APIs (like DOM API)
            2.Third party APIs (like Google Maps API)

What is JavaScript doing on your page?

Ans-- A very common use of JavaScript is to dynamically modify HTML and CSS to update a user interface, via
 the Document Object Model API.

Browser security:

    Each browser tab is its own separate bucket for running code in (these buckets are called "execution 
    environments" in technical terms) — this means that in most cases the code in each tab is run completely
    separately, and the code in one tab cannot directly affect the code in another tab — or on another website.

JavaScript running order:

    When the browser encounters a block of JavaScript, it generally runs it in order, from top to bottom.
    This means that you need to be careful what order you put things in.

Interpreted versus compiled code:

    JavaScript is a lightweight interpreted programming language. The web browser receives the JavaScript code
    in its original text form and runs the script from that. From a technical standpoint, most modern JavaScript
    interpreters actually use a technique called just-in-time compiling to improve performance; the JavaScript 
    source code gets compiled into a faster, binary format while the script is being used, so that it can be run 
    as quickly as possible. However, JavaScript is still considered an interpreteted language, since the compilation 
    is handled at run time, rather than ahead of time.

How do you add JavaScript to your page?

Ans-- JavaScript only needs one friend in the world of HTML — the <script> element.

Internal JavaScript:

    Just before your closing </head> tag--
    <script>
       // JavaScript goes here
    </script>

External JavaScript:

    First, create a new file in the same directory as your sample HTML file. Call it script.js — make sure it has 
    that .js filename extension, as that's how it is recognized as JavaScript.
    Add this snippet : <script src="script.js" defer></script>

Comments:

    A single line comment is written after a double forward slash (//)

    A multi-line comment is written between the strings '/*' and * /

*/

console.log('Welcome to Java Script!!!')