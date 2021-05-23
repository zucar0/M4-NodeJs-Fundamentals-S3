const fs = require('fs');
function readFile(path){
    return new Promise((resolve, reject)=>{
        fs.readFile(path, "utf-8", (err,data) => {
            if(err) return reject(err);
            return resolve(data);
        });
    })
}

readFile("./ar.txt")
    .then((data) => console.log("Then" , data))
    .catch((error)=>console.log("Catch ", error))