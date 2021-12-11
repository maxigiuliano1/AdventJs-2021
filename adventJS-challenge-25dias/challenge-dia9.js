/**
 * En la fábrica de Papa Noél 🎅 se acerca el día especial... y todavía tenemos un montón de cosas por contar. 😅
 * Por suerte a Mark Zucktheelf 🧝 se le ha ocurrido crear una función que permita agrupar un array, 
 * que puede ser de valores u objetos, a través de una función o de una propiedad.
 * Nos trae un montón de ejemplos:

groupBy([6.1, 4.2, 6.3], Math.floor) // { 6: [6.1, 6.3], 4: [4.2] }
groupBy(['one', 'two', 'three'], 'length') // { 3: ['one', 'two'], 5: ['three'] }
groupBy([{age: 23}, {age: 24}], 'age') // { 23: [{age: 23}], 24: [{age: 24}] }

groupBy(
  [1397639141184, 1363223700000],
  timestamp => new Date(timestamp).getFullYear()
)
// { 2013: [1363223700000], 2014: [1397639141184] }

groupBy([
  { title: 'JavaScript: The Good Parts', rating: 8 },
  { title: 'Aprendiendo Git', rating: 10 },
  { title: 'Clean Code', rating: 9 },
], 'rating')
// { 8: [{ title: 'JavaScript: The Good Parts', rating: 8 }],
//   9: [{ title: 'Clean Code', rating: 9 }],
//   10: [{ title: 'Aprendiendo Git', rating: 10 }] }
 */


function groupBy(collection, it) {
    let object = {}
    if(typeof it === 'function'){
      collection.forEach((item)=>{
        let result = it(item)
        if(!object[result]){
          object[result] = []
          object[result].push(item)
        }else{
          object[result].push(item)
        }
      })
    }else if(typeof it === 'string'){
        collection.forEach((item)=>{
          let result = item[it]
          if(!object[result]){
            object[result] = []
            object[result].push(item)
          }else{
            object[result].push(item)
          }
        })
      }
      return object
    }
  
console.log(groupBy([1397639141184, 1363223700000],timestamp => new Date(timestamp).getFullYear()))