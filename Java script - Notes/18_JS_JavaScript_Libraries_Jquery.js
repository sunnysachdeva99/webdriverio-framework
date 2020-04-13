/*

Jquery:

    jQuery is a JavaScript Library that focuses on simplifying DOM manipulation, AJAX calls,
     and Event handling. It is used by JavaScript developers frequently.

Download jQuery:

    npm install jquery

jQuery uses a format, $(selector).action() to assign an element(s) to an event. To explain 
it in detail, $(selector) will call jQuery to select selector element(s), and assign it to
an event API called .action().

Finding HTML Element by Id:
    var myElement = $("#id01");

Finding HTML Elements by Tag Name:
    var myElements = $("p");

Finding HTML Elements by Class Name:
    var myElements = $(".intro");

Finding HTML Elements by CSS Selectors:
    var myElements = $("p.intro");

Get HTML Content:
    var content = myElement.html();

Hiding HTML Elements:
    myElement.hide();

    myElement.show(); -- to show

Styling HTML Elements:
    myElement.css("font-size","35px");

Removing Elements
    Remove an HTML element: 
        $("#id").remove();

Get Parent Element
    Return the parent of an HTML element:
        var myParent = myElement.parent();


    */