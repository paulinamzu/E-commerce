const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.product-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('mouseover', function() { 
        mainImage.style.opacity = '0'; 
        setTimeout(() => {
            mainImage.src = this.src; 
            mainImage.style.opacity = '1'; 
        }, 300); 
    });
});

// Mensaje de gracias por la compra
const buyNowButton = document.querySelector('.buy-buttons button:first-child');
const successMessage = document.getElementById('success-message');

buyNowButton.addEventListener('click', function() {
    successMessage.classList.add('show'); 
    setTimeout(() => {
        successMessage.classList.remove('show'); 
    }, 3000);
});

// Se Muestra cuadro de más formas de entrega
const moreDeliveryOptions = document.querySelector('.more-delivery-options');
const deliveryInfoBox = document.getElementById('delivery-info-box');
const closeDeliveryInfoButton = document.getElementById('close-delivery-info');

moreDeliveryOptions.addEventListener('click', function() {
    deliveryInfoBox.classList.add('show-delivery-info'); 
});

// Se cierra el cuadro de entrega
closeDeliveryInfoButton.addEventListener('click', function() {
    deliveryInfoBox.classList.remove('show-delivery-info'); // Oculta cuadro
});
