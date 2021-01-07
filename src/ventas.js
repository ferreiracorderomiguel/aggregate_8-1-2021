db.ventas.drop()

db.getCollection('ventas').find({})

db.ventas.remove({})
//{ Artículo: "", PrecioUnidad: , NumUnidades: , FechaCompra: new Date(), PrecioFabrica: , Cliente: "", Vendedor: "" },

db.ventas.insertMany([
    { Artículo: "Atún Claro", PrecioUnidad: 3.5, NumUnidades: 314, FechaCompra: new Date(2001,0,20), PrecioFabrica: 1.75, Cliente: "Mercadona", Vendedor: "Calvo" },
    { Artículo: "Cereales Chocapic", PrecioUnidad: 2.15, NumUnidades: 420, FechaCompra: new Date(2015,4,26), PrecioFabrica: 1.34, Cliente: "Dia", Vendedor: "Nestle" },
    { Artículo: "Arroz claro", PrecioUnidad: 1.37, NumUnidades: 43, FechaCompra: new Date(2014,5,15), PrecioFabrica: 0.75, Cliente: "Dia", Vendedor: "Gallo" },
    { Artículo: "Vinagre 0.5L", PrecioUnidad: 5.6, NumUnidades: 27, FechaCompra: new Date(2020,1,13), PrecioFabrica: 5, Cliente: "Codi", Vendedor: "Bodegas Jerezanas SL" },
    { Artículo: "Pizza jamón y queso", PrecioUnidad: 2.75, NumUnidades: 568, FechaCompra: new Date(2019,4,4), PrecioFabrica: 1.85, Cliente: "Mercadona", Vendedor: "Hacendado" },
    { Artículo: "Huevos (docena)", PrecioUnidad: 2, NumUnidades: 266, FechaCompra: new Date(2018,8,7), PrecioFabrica: 1.4, Cliente: "Dia", Vendedor: "Huevos oro" },
    { Artículo: "Helado Haagen Dazs sabor vainilla", PrecioUnidad: 3.9, NumUnidades: 62, FechaCompra: new Date(1999,5,6), PrecioFabrica: 3.7, Cliente: "Eroski", Vendedor: "Haagen Dazs" },
    { Artículo: "Patatas fitas Lays sabor jamón", PrecioUnidad: 1.25, NumUnidades: 235, FechaCompra: new Date(2002,3,27), PrecioFabrica: 0.9, Cliente: "Eroski", Vendedor: "Lays" },
    { Artículo: "Coca-cola pack 6 latas", PrecioUnidad: 4, NumUnidades: 488, FechaCompra: new Date(2017,4,18), PrecioFabrica: 3.25, Cliente: "Dia", Vendedor: "Coca-cola" },
    { Artículo: "Nestle tableta chocolate blanco", PrecioUnidad: 2.75, NumUnidades: 553, FechaCompra: new Date(2013,9,2), PrecioFabrica: 2, Cliente: "Mercadona", Vendedor: "Nestle" },
    { Artículo: "Mayonesa", PrecioUnidad: 3, NumUnidades: 825, FechaCompra: new Date(2020,11,23), PrecioFabrica: 2, Cliente: "Mercadona", Vendedor: "Hellmans" },
    { Artículo: "Pack 6 Botellas de agua 1,5L", PrecioUnidad: 3.14, NumUnidades: 1452, FechaCompra: new Date(2019,4,15), PrecioFabrica: 1.5, Cliente: "Eroski", Vendedor: "Monssalus" },
    { Artículo: "Aceite de oliva virgen extra 5L", PrecioUnidad: 6, NumUnidades: 144, FechaCompra: new Date(2017,5,3), PrecioFabrica: 5.15, Cliente: "Eroski", Vendedor: "Coosur" },
    { Artículo: "Dátiles pack 5kg", PrecioUnidad: 13.8, NumUnidades: 267, FechaCompra: new Date(2005,4,1), PrecioFabrica: 11.3, Cliente: "Eroski", Vendedor: "Dátiles S.A." },
    { Artículo: "Batidos pack 6 sabor vainilla", PrecioUnidad: 4, NumUnidades: 149, FechaCompra: new Date(2014,5,2), PrecioFabrica: 2.9, Cliente: "Dia", Vendedor: "Nestle" },
]);