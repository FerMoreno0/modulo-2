 var Mythings = [ "Celular" ,"casa","ropa","espejo", "cama","television","reloj", "closet", "decoración","Tapete"]
  console.log ( Mythings[ 0]) // celular
  console.log ( Mythings[ 3]) //espejo
  console.log ( Mythings[ 9])// tapete
  console.log ( Mythings[ 5])//television
  console.log ( Mythings[ 1])//  casa
 
 for (let x = 0; x < Mythings.length; x++) {
    const element = Mythings[x];
console.log( element)
}

for (let x =Mythings.length-1; x >=0 ; x--) {
console.log(`El indice es: ${x}, el valor de Mythings es` ,Mythings[x])
}

let Myarray =[ 1,2,3,4,5,6,7,8,9,10]
for (let x = 0; x< Myarray.length; x++){
    console.log(Myarray [x]* Myarray [x])
}
    
