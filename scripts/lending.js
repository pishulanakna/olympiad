"use strict"

//плавная прокрутка при нажатии
const scrolling = () => {
  const btnStart = document.querySelector("#start");

  const smoothScroll = (section, speed) => {
    const scroll = document.documentElement.scrollTop;
    const scrolltarget = section.offsetTop;
    if (scroll < scrolltarget) {
      if (speed > scrolltarget - scroll) {
        speed = scrolltarget - scroll;
      }
      console.log(speed);
      scrollBy(0,speed);
      requestAnimationFrame(() => smoothScroll(section, speed));
    }
  }

  btnStart.addEventListener("click", event => {
    event.preventDefault();
    smoothScroll(document.querySelector(btnStart.getAttribute("href")), 100);
  });
}
scrolling();

