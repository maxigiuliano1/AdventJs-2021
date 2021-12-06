/**Considera una lista/array de ovejas. Cada oveja tiene un nombre y un color. 
 * Haz una función que devuelva una lista con todas las ovejas que sean de color rojo 
 * y que su nombre contenga las letras n y a, sin importar el orden, las mayúsculas o espacios. 
 * Por ejemplo, si tenemos las ovejas:

const ovejas = [
  { name: 'Noa', color: 'azul' },
  { name: 'Euge', color: 'rojo' },
  { name: 'Navidad', color: 'rojo' },
  { name: 'Ki Na Ma', color: 'rojo'}
]

 * Al ejecutar el método debería devolver lo siguiente:

const ovejasFiltradas = contarOvejas(ovejas)
console.log(ovejasFiltradas)
// [{ name: 'Navidad', color: 'rojo' },
//  { name: 'Ki Na Ma', color: 'rojo' }]

Nivel de reto: Facil
*/


  const ovejas = [
    { name: 'Noa', color: 'azul' },
    { name: 'Euge', color: 'rojo' },
    { name: 'Navidad', color: 'rojo' },
    { name: 'Ki Na Ma', color: 'rojo'}
  ]
  
  function contarOvejas(ovejas) {
    var ovejasFiltradas = []
    for(let oveja in ovejas){
      let nombre = ovejas[oveja].name.toLowerCase()
      let color = ovejas[oveja].color.toLowerCase()
      if(color.indexOf('rojo') != -1){
        if(nombre.indexOf('a') !== -1 && nombre.indexOf('n') !== -1){
          
          ovejasFiltradas.push(ovejas[oveja])
        }
      }
    }
    return ovejasFiltradas
  }
  
  const ovejasFiltradas = contarOvejas(ovejas);
  console.log(ovejasFiltradas)