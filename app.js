$(document).ready(function() {
    let totalProductos = 0;
    let totalPrecio = 0;

    $('#agregarBtn').click(function() {
        let nombreProducto = $('#producto').val();
        let cantidadProducto = $('#cantidad').val();

        // Validar que los campos tengan contenido
        if (nombreProducto === "" || cantidadProducto === "") {
            alert("Por favor, completa ambos campos.");
            return;
        }

        // Suponiendo un precio fijo por ahora (puedes modificarlo para incluir precios)
        const precioPorUnidad = 1599; // Cambia esto según el precio real
        let subtotal = cantidadProducto * precioPorUnidad;

        // Actualizar el total
        totalProductos += parseInt(cantidadProducto);
        totalPrecio += subtotal;

        // Agregar el producto al carrito
        $('#carrito').append(`<p>Has agregado <strong>${cantidadProducto}</strong> unidad(es) de <strong>${nombreProducto}</strong> al carrito. - $${subtotal}</p>`);

        // Actualizar el resumen de compra
        $('#totalProductos').text(totalProductos);
        $('#totalPrecio').text(`$${totalPrecio}`);

        // Limpiar los campos después de agregar al carrito
        $('#producto').val("");
        $('#cantidad').val("");
    });
});
