const images = [
  "./slider_image/slider1.jpg",
  "./slider_image/slider2.jpg",
  "./slider_image/slider3.jpg",
  "./slider_image/slider4.jpg",
  "./slider_image/slider5.jpg",
  "./slider_image/slider6.jpg",
  "./slider_image/slider7.jpg",
  "./slider_image/slider8.jpg",
  "./slider_image/slider9.jpg",
  "./slider_image/slider0.jpg",
  "./slider_image/slider11.jpg",
  "./slider_image/slider12.jpg",
  "./slider_image/slider13.jpg",
];
const imgElement = document.getElementById("img-slider");
let imgIndex = 0;
setInterval(() => {
  if (imgIndex === images.length) {
    imgIndex = 0;
  }
  const imgUrl = images[imgIndex];
  console.log(imgUrl, imgIndex);
  imgElement.setAttribute("src", imgUrl);
  imgIndex++;
}, 3000);
