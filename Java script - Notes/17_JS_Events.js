/*

Events are actions or occurrences that happen in the system you are programming, 
which the system tells you about so you can respond to them in some way if desired. 

Each available event has an event handler, which is a block of code (usually a JavaScript 
function that you as a programmer create) that will be run when the event fires. When such 
a block of code is defined to be run in response to an event firing, we say we are registering
an event handler. Note that event handlers are sometimes called event listeners — they are 
pretty much interchangeable for our purposes, although strictly speaking, they work together.

Event handler properties:

These are the properties that exist to contain event handler code that we have seen most 
frequently during the course

Onclick:

The onclick property is the event handler property being used in this situation. It is 
essentially a property like any other available on the button (e.g. btn.textContent, or btn.style),
but it is a special type — when you set it to be equal to some code, that code is run when the event
fires on the button.

Onfocus

Onblur

on double click

window.onkeypress

btn.onmouseover and btn.onmouseout 

addEventListener() and removeEventListener():

addEventListener() -- This functions in a similar way to the event handler properties, but the 
syntax is obviously different. 

removeEventListener() -- which removes a previously added listener.

Event objects:

Sometimes inside an event handler function, you might see a parameter specified with a name 
such as event, evt, or simply e. This is called the event object, and it is automatically 
passed to event handlers to provide extra features and information

e.target is incredibly useful when you want to set the same event handler on multiple 
elements and do something to all of them when an event occurs on them. You might, for 
example, have a set of 16 tiles that disappear when they are clicked on.

Preventing default behavior:

preventDefault() function on the event object — which stops the form submission — and then
display an error message in the paragraph below our form to tell the user what's wrong
*/
