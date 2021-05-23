//Promesas
let promesa = new Promise((resolve,reject)=>{
	setTimeout(()=>{
		let numero = Math.random();
		console.log(numero);
		if(numero >= 0.5) resolve("Exito");
		reject("Error");
	}, 500);
})

promesa
    .then((data)=> console.log("Then ", data))
    .catch((error)=> console.log("Catch ", error))