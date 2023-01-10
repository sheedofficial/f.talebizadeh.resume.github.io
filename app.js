/*portfolio*/
const projects = [
  {
    title: "project 1",
    img: "./styles/assets/portfolio-1.jpeg",
    category: "web",
  },
  {
    title: "project 2",
    img: "./styles/assets/portfolio-2.jpeg",
    category: "web",
  },
  {
    title: "project 3",
    img: "./styles/assets/portfolio-3.jpeg",
    category: "web",
  },
  {
    title: "project 4",
    img: "./styles/assets/portfolio-4.jpeg",
    category: "web",
  },
  {
    title: "project 5",
    img: "./styles/assets/portfolio-5.jpeg",
    category: "web",
  },
  {
    title: "project 6",
    img: "./styles/assets/portfolio-6.jpeg",
    category: "web",
  },
  {
    title: "project 7",
    img: "./styles/assets/portfolio-7.jpeg",
    category: "web",
  },
  {
    title: "project 8",
    img: "./styles/assets/portfolio-8.jpeg",
    category: "web",
  },
  {
    title: "project 9",
    img: "./styles/assets/portfolio-9.jpeg",
    category: "web",
  },
];

const projectsGallery = document.getElementById("project-gallery");

document.addEventListener("DOMContentLoaded", function () {
  const allProjects = projects.map(function (project) {
    return `<div class="project-border">
    <figure class="project">
      <img src=${project.img} alt="">
      <figcaption class="project-details">
        <h4 class="project-title">${project.title}</h4>
        <p class="project-category">${project.category}</p>
        <div class="project-links">
          <a href="#"><i class="fa-solid fa-link"></i></a>
          <a href="#"><i class="fa-solid fa-plus"></i></a>
        </div>
      </figcaption>
    </figure>
  </div>

<div class="gap-border"></div>`;
  });
  projectsGallery.innerHTML = `${allProjects.join("")}`;
});

/*hamburger menu*/
function openMenu() {
  document
    .getElementsByClassName("hamburger-menu")[0]
    .classList.add("open-hamburger-menu");
}

function closeMenu() {
  document
    .getElementsByClassName("hamburger-menu")[0]
    .classList.remove("open-hamburger-menu");
}

/*back to top button*/
document.addEventListener("scroll", function () {
  if (window.scrollY >= 200) {
    document.getElementById("back-to-top").classList.add("back-to-top-active");
    return;
  }
  if (window.scrollY < 200) {
    document
      .getElementById("back-to-top")
      .classList.remove("back-to-top-active");
    return;
  }
});
