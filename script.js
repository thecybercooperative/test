//Get the button
var mybutton = document.getElementById("btnScrollTop");

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 110 || document.documentElement.scrollTop > 110) {
    mybutton.style.display = "block"; 
  } else {
    mybutton.style.display = "none";
  }
}

//The button smoothly sends you to the top of the page
mybutton.addEventListener("click", function(){
  window.scrollTo({
    top:0,
    left:0,
    behavior:"smooth"
  });
});

//Get the FAQ question element
const questions = document.getElementsByClassName('accordion-title')

//Open or close on click depending on status
for (const question of questions) {
  const answer = question.parentElement.querySelector('.accordion-content')
  const remove = question.parentElement.querySelector(".remove")
  const add = question.parentElement.querySelector(".add")
  let open = false

  function openAnswer() {
    if (open == true) {
      add.style.display = "block";
      remove.style.display = "none";
      answer.style.overflow = "hidden";
      answer.style.maxHeight = '0';
      open = false; 
    } else {
      add.style.display = "none";
      remove.style.display = "block";
      answer.style.maxHeight = "300px";
      answer.style.overflow = "visible";
      open = true;
    }
  }

  question.addEventListener('click', openAnswer)
}