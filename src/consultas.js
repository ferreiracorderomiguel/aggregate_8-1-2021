//Muestra las ventas totales de los supermercados Mercadona y Dia juntos, clasificados como "VentasTotales".
db.ventas.aggregate([
    { $match: { $or: [{Cliente: "Mercadona"}, {Cliente: "Dia"}] } },
    { $group: { _id: "Cliente", VentasTotales: { $sum: "$NumUnidades" }  } }
])

/*Muestra la media del coste al público de aquellos productos vendidos por los supermercados Eroski, y que su precio de venta
al público sea mayor o igual a 3 euros.*/
db.ventas.aggregate([ 
    { $match: { Cliente: "Eroski", PrecioUnidad: {$gte: 3} }},
    { $group: { _id: "Cliente", MediaPrecios: { $avg: "$PrecioUnidad" } } },
])

/*Haga la media del precio de venta de todos los productos del supermercado Dia que sean de la marca Nestle.*/
db.ventas.aggregate([
    { $match: { $and: [{Cliente: "Dia"}, {Vendedor: "Nestle"}] }},
    { $group: { _id: "Cliente", MediaProductosNestle: { $avg: "$PrecioUnidad" } }},
])

/*Muestre el total de ventas antes del 1 de enero de 2017, sólo de los productos cuyo precio de venta al público sea
superior a 3 euros, tenga un número de unidades vendidas superior a 140*/
db.ventas.aggregate([
    { $match: { FechaCompra: {$lt:new Date(2017,1,11)}, NumUnidades: {$gt: 140}, PrecioUnidad: {$gt: 3} }},
    { $group: { _id: "Ventas", TotalVentas: { $sum: "$NumUnidades" } } }
])

//Veces que un supermercado ha vendido más productos al público
db.ventas.aggregate([
    { $match: { $or: [{Cliente: "Mercadona"}, {Cliente: "Dia"}, {Cliente: "Codi"}, {Cliente: "Eroski"}  ] }},
    { $group: { _id: "Cliente", SupermercadoQueMásVende: { $max: "$NumUnidades" } }}
])

//Precio del producto más barato vendido a un supermercado.
db.ventas.aggregate([
    { $match: { $or: [{Vendedor: "Calvo"}, {Vendedor: "Nestle"}, {Vendedor: "Gallo"}, {Vendedor: "Bodegas Jerezanas SL"}, {Vendedor: "Hacendado"}, {Vendedor: "Huevos oro"}, {Vendedor: "Haagen Dazs"}, {Vendedor: "Lays"}, {Vendedor: "Coca-cola"}, {Vendedor: "Hellmans"}, {Vendedor: "Monssalus"}, {Vendedor: "Coosur"}, {Vendedor: "Dátiles S.A."}  ] }},
    { $group: { _id: "Vendedor", ProductoMásBarato: { $min: "$PrecioFabrica" } }}
])

//Veces que un supermercado que más vendió en todo 2017.
db.ventas.aggregate([
    { $match: { FechaCompra: {$lt:new Date(2017,0,2)}, FechaCompra: {$gt:new Date(2017,11,32)} }},
    { $group: { _id: "Supermercado", SupermercadoQueMásVendeEn2017: {$max: "$NumUnidades"} }}
])