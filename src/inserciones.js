//Primeramente vamos a insertar una serie de datos en una nueva coleccion
db.inventory.insertMany([
    { item: "journal", qty: 25, size: { h: 14, w: 21, uom: "cm" }, status: "A" },
    { item: "notebook", qty: 50, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "paper", qty: 100, size: { h: 8.5, w: 11, uom: "in" }, status: "D" },
    { item: "planner", qty: 75, size: { h: 22.85, w: 30, uom: "cm" }, status: "D" },
    { item: "postcard", qty: 45, size: { h: 10, w: 15.25, uom: "cm" }, status: "A" }
 ]);
//Para insertar otros datos debemos mantener la estructura de los objetos anteriores
db.inventory.insertOne({ item: "pilot", qty: 125, size: { h: 10, w: 0.5, uom: "cm" }, status: "A" })
//Pero lo más lógico y útil es insertar con el operador many
db.inventory.insertMany([
    { item: "sharpener", qty: 42, size: { h: 2, w: 1, uom: "cm" }, status: "A" },
    { item: "bloc", qty: 12, size: { h: 8.5, w: 11, uom: "in" }, status: "A" },
    { item: "rubber", qty: 325, size: { h: 1, w: 2, uom: "in" }, status: "D" },
    { item: "bag", qty: 4, size: { h: 42, w: 35, uom: "cm" }, status: "D" },
    { item: "brush", qty: 22, size: { h: 15, w: 0.75, uom: "cm" }, status: "A" }
 ]);