function sendMail(){

emailjs.send(

"service_e0ybgrf",
"template_17uy12g",

{

name:document.querySelectorAll("input")[0].value,

email:document.querySelectorAll("input")[1].value,

age:document.querySelectorAll("input")[2].value,

country:document.querySelectorAll("input")[3].value,

skills:document.querySelectorAll("input")[4].value,

discord:document.querySelectorAll("input")[5].value,

reason:document.querySelector("textarea").value

}

)

.then(function(){

alert(
"Application submitted.\n\nPlease wait for the email.\nMinimum 1 day required."
);

});

}

