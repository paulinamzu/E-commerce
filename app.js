$(document).ready(function() {
    let totalProductos = 0;
    let totalPrecio = 0;

    $('#agregarBtn').click(function() {
        let nombreProducto = $('#producto').val();
        let cantidadProducto = $('#cantidad').val();

        // Esto valida que los campos tengan contenido
        if (nombreProducto === "" || cantidadProducto === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        // 
        const precioPorUnidad = 10; 
        let subtotal = cantidadProducto * precioPorUnidad;

        // actualiza el total
        totalProductos += parseInt(cantidadProducto);
        totalPrecio += subtotal;

        // agrega el producto al carrito
        $('#carrito').append(`<p>Has agregado <strong>${cantidadProducto}</strong> unidad(es) de <strong>${nombreProducto}</strong> al carrito. - $${subtotal}</p>`);

        // actualiza el resumen de compra
        $('#totalProductos').text(totalProductos);
        $('#totalPrecio').text(`$${totalPrecio}`);

        // limpia los campos después de agregar al carrito
        $('#producto').val("");
        $('#cantidad').val("");
    });
});
