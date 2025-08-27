function animateCard(card) {
  card.style.transform = "scale(1.05)";
  card.style.boxShadow = "0 0 25px #00bfff";
  setTimeout(() => {
    card.style.transform = "scale(1)";
    card.style.boxShadow = "0 0 15px #00bfff";
  }, 300);
}

function buyNow() {
  alert("Redirecting to payment page...");
  window.location.href = "https://your-payment-link.com"; // Replace with your Gumroad or Payhip URL
}
