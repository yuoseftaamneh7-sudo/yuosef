

const reveals = document.querySelectorAll(".reveal");

const observer = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("activ");
        observer.unobserve(entry.target); // يشتغل مرة وحدة
      }
    });
  },
  {
    threshold: 0.2
  }
);

reveals.forEach(el => observer.observe(el));











const toTop = document.getElementById("toTop");

window.addEventListener("scroll", () => {
  if (window.scrollY > 300) {
    toTop.style.display = "block";
  } else {
    toTop.style.display = "none";
  }
});

toTop.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});


const skillBars = document.querySelectorAll(".progress-bar");

const skillObserver = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const bar = entry.target;
      bar.style.width = bar.dataset.progress;
    }
  });
}, { threshold: 0.5 });

skillBars.forEach(bar => {
  skillObserver.observe(bar);
});

