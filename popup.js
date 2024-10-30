const showPopupButton = document.getElementById('showPopup');
const closePopupButton = document.getElementById('closePopup');
const popup = document.getElementById('popup');

// Fungsi untuk membuka pop-up
showPopupButton.addEventListener('click', () => {
  popup.classList.add('active');
});

// Fungsi untuk menutup pop-up
closePopupButton.addEventListener('click', () => {
  popup.classList.remove('active');
});