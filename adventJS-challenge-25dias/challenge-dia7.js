/**
 * Mi amigo Dani está trabajando en una tienda y con la llegada de las navidades tiene el almacén hecho 
 * un desastre y no encuentra nada.
 * Vamos a crear una función contains que recibe dos parámetros: un objeto que define el almacén y el producto que buscamos.
 * La función debe devolver un booleano que indique si se encuentra el string como valor en algún nivel del objeto. 
 * Veamos unos ejemplos:

const almacen = {
  'estanteria1': {
    'cajon1': {
      'producto1': 'coca-cola',
      'producto2': 'fanta',
      'producto3': 'sprite'
    }
  },
  'estanteria2': {
    'cajon1': 'vacio',
    'cajon2': {
      'producto1': 'pantalones',
      'producto2': 'camiseta' // <- ¡Está aquí!
    }
  }
}
            
contains(almacen, 'camiseta') // true

const otroAlmacen = {
  'baul': {
    'fondo': {
      'objeto': 'cd-rom',
      'otro-objeto': 'disquette',
      'otra-cosa': 'mando'
    }
  }
}
  
contains(otroAlmacen, 'gameboy') // false

 * Ten en cuenta que la tienda es enorme. Tiene diferentes almacenes y, como has visto en los ejemplos, 
 * cada uno puede tener diferentes organizaciones.Lo importante es buscar que el producto está en los almacénes.
 */

const otherStore = {
    'baul': {
      'fondo': {
        'objeto': 'cd-rom',
        'otro-objeto': 'disquette',
        'otra-cosa': 'mando'
      }
    }
  }
  
  const store = {
      'estanteria1': {
          'cajon1': {
              'producto1': 'coca-cola',
              'producto2': 'fanta',
              'producto3': 'sprite'
          }
      },
      'estanteria2': {
          'cajon1': 'vacio',
          'cajon2': {
              'producto1': 'pantalones',
              'producto2': 'camiseta' // <- ¡Está aquí!
          }
      }
  }
  
  let contain = false
  /**uso recursividad para ver todos los casos posibles*/
  function contains(store, product){
      let next, item
      contain = false
      for(item in store){
          if(store.hasOwnProperty(item)){
              next= store[item];
              if (next == product) {
                      contain = true
                  }
              else if(typeof next== 'object' && next!= null){
                  contains(next,product)
              }
          }
      }
      return contain;
  }
  
  
  let result = contains(store, 'camiseta')
  result = contains(otherStore,'gameboy')
  console.log(result)