function toggleMenu() {
  document.getElementById('nav-menu').classList.toggle('active');
}

function toggleDropdown(event) {
  event.preventDefault();
  const parent = event.target.closest('.dropdown');
  parent.classList.toggle('open');
}


// Slider_Section

const slides = document.querySelectorAll('.slide');
let current = 0;

function showNext() {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}

setInterval(showNext, 3000);


// Slider_End


// Cards Section of  index page
function flipCard(card) {
  card.classList.toggle('flipped');
}





// Slider Code (already there above)




// 🔥 Counter Logic
const counters = document.querySelectorAll(".counter-box h2");
let started = false;

const startCount = (counter) => {
  const target = +counter.getAttribute("data-count");
  let current = 0;
  const speed = Math.ceil(target / 60);

  const update = () => {
    current += speed;
    if (current > target) current = target;
    counter.innerText = current + "+"; // ✅ ADD "+" here
    if (current < target) requestAnimationFrame(update);
  };
  update();
};

// Trigger on visible
const observer = new IntersectionObserver(
  (entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting && !started) {
        counters.forEach(startCount);
        started = true;
        observer.disconnect();
      }
    });
  },
  { threshold: 0.5 }
);

observer.observe(document.querySelector(".counter-section"));


// Know Me
AOS.init({
      duration: 1000,
      once: true
    });




