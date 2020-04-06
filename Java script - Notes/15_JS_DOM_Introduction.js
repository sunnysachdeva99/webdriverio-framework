/*
What is the DOM?

The Document Object Model (DOM) is a programming interface for HTML and XML documents. It 
represents the page so that programs can change the document structure, style, and content. 
The DOM represents the document as nodes and objects. That way, programming languages can connect 
to the page.

A Web page is a document. This document can be either displayed in the browser window or as the 
HTML source. But it is the same document in both cases. The Document Object Model (DOM) represents 
that same document so it can be manipulated. The DOM is an object-oriented representation of the 
web page, which can be modified with a scripting language such as JavaScript.

The W3C DOM and WHATWG DOM standards are implemented in most modern browsers. Many browsers extend 
the standard, so care must be exercised when using them on the web where documents may be accessed 
by various browsers with different DOMs.

DOM and JavaScript:

In the beginning, JavaScript and the DOM were tightly intertwined, but eventually, they evolved 
into separate entities. The page content is stored in the DOM and may be accessed and manipulated 
via JavaScript, so that we may write this approximative equation:

API = DOM + JavaScript

Fundamental Data Types:

Document:
    When a member returns an object of type document is the root document object itself. 

Node:
    Every object located within a document is a node of some kind. In an HTML document,
     an object can be an element node but also a text node or attribute node.

Element:
    The element type is based on node. It refers to an element or a node of type element 
    returned by a member of the DOM API. 

NodeList:
    A nodeList is an array of elements, like the kind that is returned by the method 
    document.getElementsByTagName(). 

Attribute:
    When an attribute is returned by a member (e.g., by the createAttribute() method), 
    it is an object reference that exposes a special (albeit small) interface for attributes. 

NamedNodeMap:
    A namedNodeMap is like an array, but the items are accessed by name or index, though this 
    latter case is merely a convenience for enumeration, as they are in no particular order 
    in the list. 

Core Interfaces in the DOM:

document.getElementById(id)
document.getElementsByTagName(name)
document.createElement(name)
parentNode.appendChild(node)
element.innerHTML
element.style.left
element.setAttribute()
element.getAttribute()
element.addEventListener()
window.content
window.onload
window.scrollTo()

*/