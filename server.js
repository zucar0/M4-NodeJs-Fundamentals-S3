//Callbacks
function saludar(nombre){
    console.log('Hola ', nombre);
}
function entrada(nombre, callback){
    callback(nombre);
}
entrada('Antonio', saludar);
