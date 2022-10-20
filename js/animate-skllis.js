
let section = document.querySelector('.our-skills');
let spans = document.querySelectorAll('.the-progress span');



window.addEventListener('scroll', function (e) {
  if (window.scrollY >= section.offsetTop-350) {
    console.log("Reached Section Three");
    spans.forEach((span) => {
      span.style.width = span.dataset.width;
    });
  };
})