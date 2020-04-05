const text = document.querySelector('#demo');
const h2 = document.querySelector('h2');
text.innerHTML = "Changed by - document.querySelector('#demo')";
h2.innerHTML= "Changed by - document.querySelector('h2')"

document.getElementById('demo1').innerHTML= "Changed by getElementById(id)";

var h3 = document.getElementsByTagName('h3');
document.write("This is h3 content -- "+h3[0].innerHTML)

var x = document.getElementsByClassName("intro");
document.getElementById("demo2").innerHTML = 
'The first paragraph (index 0) with class="intro": ' + x[0].innerHTML;

var x = document.querySelectorAll("p.intro");
document.getElementById("demo3").innerHTML = 
'The first paragraph (index 1) with class="intro": ' + x[1].innerHTML;