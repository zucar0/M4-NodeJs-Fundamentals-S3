//Callbacks ejemplos
function primera(call1, call2){
    setTimeout(() =>{
        console.log("1");
        call1();
        call2();
    }), 3000;
}
function segunda(){
    console.log("2");
}
function tercera(){
    console.log("3");
}

primera(segunda, tercera);