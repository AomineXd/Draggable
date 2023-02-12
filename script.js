const carousel = document.querySelector('.carousel'),
firstImg = carousel.querySelectorAll("img")[0]
arrowIcons = document.querySelectorAll('.wrapper i');


let isDragStart = false, prevPageX, prevScrollLeft;
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
let firstImgWidth = firstImg.clientWidth + 20; // getting first img width & adding 14 margin value
let scrollWidth = carousel.scrollWidth - carousel.clientWidth


const showHideIcons = () => {
  arrowIcons[0].style.display = carousel.scrollLeft == 0 ? "none" : "block";
  arrowIcons[1].style.display = carousel.scrollLeft == scrollWidth ? "none" : "block";
  
}

arrowIcons.forEach(icon => {
  icon.addEventListener("click", () => {
     // if clicked icons is left, reduce width value from the carousel scroll  left else add to it
       carousel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth;
       setTimeout(() => showHideIcons(), 120);
   })
})

const dragStart = (e) => {
  // updatating global variables value on mouse down event
    isDragStart = true
    prevPageX = e.pageX
    prevScrollLeft = carousel.scrollLeft
}

const dragging  = (e) => {
  // scrolling images/carousel to left according to mouse pointer
  if(!isDragStart) return;
  e.preventDefault();
  carousel.classList.add("dragging");
  let positionDiff = e.pageX - prevPageX
  carousel.scrollLeft = prevScrollLeft - positionDiff
  showHideIcons()
}

const dragStop = () => {
  isDragStart = false
    carousel.classList.remove("dragging");
}
carousel.addEventListener("mousedown", dragStart )
carousel.addEventListener("mousemove", dragging )
carousel.addEventListener("mouseup", dragStop )

