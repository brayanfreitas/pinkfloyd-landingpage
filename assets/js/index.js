document.querySelectorAll('nav a').forEach(anchor => {
  console.log()
  
  anchor.addEventListener('click', function (e) {
    e.preventDefault();
    console.log("AAAAAAAAAA")
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
  });
});