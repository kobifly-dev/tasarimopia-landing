document.querySelectorAll('[data-product-image]').forEach((image) => {
  const card = image.closest('.product-card');

  const showProduct = () => card.classList.add('has-image');

  if (image.complete && image.naturalWidth > 0) {
    showProduct();
  }

  image.addEventListener('load', showProduct, { once: true });
});

document.getElementById('current-year').textContent = new Date().getFullYear();
