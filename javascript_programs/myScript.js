function changeParaGaphContent(){
    document.getElementById("demo2").innerHTML = "Demo2 - This Content is changed by External JS"
}

function myFunction(){
    document.getElementById("demo1").innerHTML = "Demo1 - This is changed";
}
document.write("<br /> This content is from document.write()")
window.alert("This is an alert message")
console.log("This content is to Print on Console")