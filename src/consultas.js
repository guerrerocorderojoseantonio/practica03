/*Tras haber realizado las inserciones  ya podemos empezar a utilizar la base de datos y 
podemos buscar datos dentro de la coleccion inventory con el comando "db.inventory.find({})"
Si queremos hacerlo más coplejo dentro de los corchetes especificaremos el campo y el valor 
que queremos buscar "db.inventory.find({ qty:50})" */

//por ejemplo en la siguiente orden buscaremos los objetos cuya cantidad sea 50
db.inventory.find({ qty:50})
//y con esta los que sean el objeto pilot
db.inventory.find({ item:"pilot"})
//y en la ultima consulta simple mostraremos los objetos con estado A
db.inventory.find({status:"A"})
//Ahora buscaremos los objetos que sean de estado A y tengan menos de 50 articulos
db.inventory.find({qty:{ $lt:50}, status:"A"})
//Con la siguiente encontraremos los objetos de estado A y D con cantidad mayor a 55
db.inventory.find({qty:{ $gt: 55}, status:{ $in: [ "A", "D"]}})
//Ahora veremos que se puede buscar dos valores a un mismo campo 
db.inventory.find({$and:[{ qty: {$ne:25}}, {qty: {$exists:true}}]})
/*Y por último veremos que se puede buscar o una cosa o otra
en este caso los objetos de status A o los que cuyas existencias sean 
mayor  de 50 */
db.inventory.find({ $or: [{status:"A"}, {qty: { $gt: 50}}]})