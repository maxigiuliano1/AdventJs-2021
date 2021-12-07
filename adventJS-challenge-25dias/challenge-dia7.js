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