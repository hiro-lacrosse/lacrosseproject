let num = 0;

// Replace image and alt with the array
imgArray = [
    ["img/lacrosse1.jpeg", "lacrosse1"],
["img/lacrosse2.jpeg", "lacrosse2"],
["img/lacrosse3.jpeg", "lacrosse3"],
 
];

// Replace with you image id(manual change)
function slideshow(slide_num) {
  document.getElementById("slide").src = imgArray[slide_num][0];
  document.getElementById("slide").alt = imgArray[slide_num][1];
}

// autoplay
function playImageArray() {
  if (num == imgArray.length) {
    num = 0;
  }
  document.getElementById("slide").src = imgArray[num][0];
  num += 1;
}
