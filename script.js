// Navbar
document.getElementById("menu-button").addEventListener("click", function () {
  var path = document.getElementById("menu-icon").querySelector("path");
  var isHamburger =
    path.getAttribute("d") === "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z";

  if (isHamburger) {
    path.setAttribute("d", "M2 2L18 18M2 18L18 2"); // Cancel icon
    path.setAttribute("stroke", "black"); // Cancel icon
    path.setAttribute("stroke-width", "2"); // Cancel icon
  } else {
    path.setAttribute("d", "M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v15z"); // Hamburger icon
  }
  document.getElementById("menu").classList.toggle("hidden");
});

document.addEventListener("DOMContentLoaded", function () {
  var images = document.querySelectorAll(".blur-load");
  images.forEach(function (img) {
    img.loading = "lazy";
  });
});

// Preloader
window.addEventListener("load", function () {
  const preloader = document.getElementById("preloader");
  preloader.classList.add("hidden");
});


//home
let slideIndex = 0;
let slides = document.getElementById("carousel").children;
function showSlide(n) {
  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[n].style.display = "block";
}
function nextSlide() {
  slideIndex++;
  if (slideIndex >= slides.length) {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}
function previousSlide() {
  slideIndex--;
  if (slideIndex < 0) {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}
showSlide(slideIndex);
setInterval(nextSlide, 5000); // Change slide every 5 seconds

// export default {
//   data() {
//     return {
//       moreClicked: false,
//     };
//   },
// };
// var map;
// function initMap() {
//   map = new google.maps.Map(document.getElementById("map"), {
//     center: { lat: -34.397, lng: 150.644 },
//     zoom: 8,
//   });
// }

// Get the quantity input and price element
var quantityInput = document.getElementById('quantity');
var priceElement = document.getElementById('price');

// Listen for changes on the quantity input
quantityInput?.addEventListener('input', function() {
    // Calculate the new price
    var pricePerKg = 100; // Set your price per kg here
    var newPrice = quantityInput.value * pricePerKg;

    // Update the price element
    priceElement.textContent = '₹' + newPrice + '/kg';
});

function openMap(index) {
  const maps = [
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120687.2972462925!2d72.9814!3d19.0427085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a5a021cf3%3A0xe1ee234b679d6010!2sAjwa%20House%20Of%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1709203036438!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d15090.940951287224!2d73.1107475!3d18.9872968!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7e814b0bb5187%3A0xa815b58923684e33!2sAJWA%20House%20of%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1709202923020!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120687.2972462925!2d72.9814!3d19.0427085!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c21a5a021cf3%3A0xe1ee234b679d6010!2sAjwa%20House%20Of%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1709203036438!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d120505.39913719916!2d72.9753574!3d19.2913346!3m2!1i1024!2i768!4f13.1!3m2!1m1!2s!5e0!3m2!1sen!2sin!4v1709203101127!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120596.38493994206!2d72.9446037!3d19.1673593!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7bf135f048dab%3A0xf27d69c97b6008f2!2sAjwa%20House%20Of%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1709203146406!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d3592.225052619021!2d82.9949394!3d25.7961484!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3991c93111ec7fe3%3A0x5631a20e5584db40!2sZAFAR%20Complex!5e0!3m2!1sen!2sin!4v1709203260544!5m2!1sen!2sin",
    "https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d120656.91318421524!2d72.7536905!3d19.0844556!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c95fc588079b%3A0x1bc4c870e3438197!2sAjwa%20House%20Of%20Dry%20Fruits!5e0!3m2!1sen!2sin!4v1709203308610!5m2!1sen!2sin",
  ];
  document.querySelector("iframe").src = maps[index];
}

function redirectToProductDetails(productId) {
  window.location.href = `product-details.html?id=${productId}`;
}

