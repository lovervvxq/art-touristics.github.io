const carousel = document.querySelector(".carousel");
firstImg = carousel.querySelectorAll("img")[0];
arrowIcons = document.querySelectorAll(".wrapper i");
const images = document.querySelectorAll(".carousel img");

let isDragStart = false;
let startX;
let scrollLeft;
let scrollWidth = carousel.scrollWidth - carousel.clientWidth;
const dragStart = (e) => {
    isDragStart = true;
    startX = e.pageX || e.touches[0].pageX;
    scrollLeft = carousel.scrollLeft;
};

const showHideIcons = () => {
    arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none": "block";
    arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none": "block";
}

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        let firstImgWidth = firstImg.clientWidth + 14;
        carousel.scrollLeft += icon.id =="left" ? -firstImgWidth : firstImgWidth;
        setTimeout(() => showHideIcons(), 60);
    });
});
const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    carousel.classList.add("dragging");
    const x = e.pageX || e.touches[0].pageX;
    const walk = (x - startX);
    carousel.scrollLeft = scrollLeft - walk;
    showHideIcons();
};

const dragStop = () => {
    isDragStart = false;
    carousel.classList.remove("dragging");
};

// Prevent default drag behavior for images
images.forEach((img) => {
    img.addEventListener("dragstart", (e) => e.preventDefault());
});

carousel.addEventListener("mousedown", dragStart);
carousel.addEventListener("touchstart", dragStart);

carousel.addEventListener("mousemove", dragging);
carousel.addEventListener("touchmove", dragging);

carousel.addEventListener("mouseup", dragStop);
carousel.addEventListener("mouseleave", dragStop);
carousel.addEventListener("touchend", dragStop);
carousel.addEventListener("touchcancel", dragStop);