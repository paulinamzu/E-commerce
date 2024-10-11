const thumbnails = document.querySelectorAll('.thumbnail-images img');
const mainImage = document.querySelector('.product-image');

thumbnails.forEach(thumbnail => {
    thumbnail.addEventListener('click', function() {
        mainImage.src = this.src;
    });
});


const buyNowButton = document.querySelector('.buy-buttons button:first-child');
const successMessage = document.getElementById('success-message');

buyNowButton.addEventListener('click', function() {
    successMessage.style.display = 'block'; // Mostrar el mensaje
    setTimeout(() => {
        successMessage.style.display = 'none'; // Ocultar a lso 3 segundos
    }, 3000);
});


const moreDeliveryOptions = document.querySelector('.more-delivery-options');
const deliveryInfoBox = document.getElementById('delivery-info-box');
const closeDeliveryInfoButton = document.getElementById('close-delivery-info');

moreDeliveryOptions.addEventListener('click', function() {
    deliveryInfoBox.style.display = 'block'; // Mostrar cuadro 
});

// Cerrar el cuadro de entrega
closeDeliveryInfoButton.addEventListener('click', function() {
    deliveryInfoBox.style.display = 'none'; // Ocultar el cuadro
});
