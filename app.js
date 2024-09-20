$(document).ready(function() {
    var productos = [
      { nombre: "Smartphone", costo: "$500", unidades: 20, calificacion: "4.5", categoria: "tecnologia" },
      { nombre: "Laptop", costo: "$1000", unidades: 10, calificacion: "4.8", categoria: "tecnologia" },
      { nombre: "Camiseta", costo: "$20", unidades: 100, calificacion: "4.2", categoria: "ropa" },
      { nombre: "Sofá", costo: "$300", unidades: 5, calificacion: "4.7", categoria: "hogar" },
      
    ];
  
    var table = $('#tabla-productos').DataTable({
      data: productos,
      columns: [
        { data: 'nombre' },
        { data: 'costo' },
        { data: 'unidades' },
        { data: 'calificacion' }
      ]
    });
  
    // Filtro por categoría
    $('#categoria').on('change', function() {
      var categoria = $(this).val();
      if (categoria) {
        table.column(0).search(categoria).draw();
      } else {
        table.column(0).search('').draw();
      }
    });
  });
  