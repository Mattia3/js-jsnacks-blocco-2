const array1 = [15, 2, 7];
const array2 = [5];
//const array1 = ['ciao'];
//const array2 = ['hola', 'hello'];
//controllo lunghezze arrey
let arrayPiccolo;
let arrayGrande;

if(array1.length === array2.length){
  console.log("non fare niente");
  arrayPiccolo = array1;
  arrayGrande = array2;
}
else if (array1.length < array2.length){
  arrayPiccolo = array1;
  arrayGrande = array2;
  console.log(`array1 < array2`)
}
else{
  arrayPiccolo = array2;
  arrayGrande = array1;
  console.log(`array1 < array2`)
}

const differenza = arrayGrande.length - arrayPiccolo.length;
for(let i = 0; i < differenza; i++){
  arrayPiccolo.push(0)
}

console.log(arrayGrande, arrayPiccolo)
