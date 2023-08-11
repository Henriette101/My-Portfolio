document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
    e.preventDefault();

    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "navbar") {
    x.className += " responsive";
    document.getElementById('icon_img').src='images/menu2.png';
  } else {
    document.getElementById('icon_img').src='svg logos/menu 2.png';
    x.className = "navbar";
  }
}


