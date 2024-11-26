// Array to hold URLs of temples (replace with actual URLs)
const templeUrls = [
  "55jhyla.html", // Replace with Bhaktapur Durbar Square URL
  "museum.html", // Replace with Bhaktapur Rainy URL
  "index.html", // Replace with Bhaktapur Temple URL
  "vatsyala.html"  // Replace with Nyatapola Temple URL
];

let currentIndex = 0;

// Function to open the popup and show the image
function openPopup(index) {
  currentIndex = index;
  const popupImg = document.getElementById("popup-img");
  popupImg.src = document.querySelectorAll(".gallery-item img")[index].src;
  document.getElementById("popup").style.display = "block";
}

// Function to close the popup
function closePopup() {
  document.getElementById("popup").style.display = "none";
}

// Function to change the image in the popup
function changeImage(direction) {
  currentIndex += direction;
  if (currentIndex < 0) currentIndex = templeUrls.length - 1;
  if (currentIndex >= templeUrls.length) currentIndex = 0;
  const popupImg = document.getElementById("popup-img");
  popupImg.src = document.querySelectorAll(".gallery-item img")[currentIndex].src;
}

// Function to handle double-click for redirection
function redirectToSite() {
  window.open(templeUrls[currentIndex], "_blank");
}
