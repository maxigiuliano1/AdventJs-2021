/**
 * En el taller de Santa 🎅 se están preparando los trineos de motor eléctrico para poder hacer la ruta perfecta para dejar los regalos.
 * La ruta empieza en el punto 0 y de ahí va hacia la derecha en línea recta.
 * El Keanu Relfes 🧝 nos ha preparado una lista de obstáculos a evitar. 
 * El problema es que nos ha dado la lista de posiciones de los obstáculos desordenada... 😅 
 * aunque al menos nunca la posición 0 puede tener un obstáculo.
 * Encima, el trineo sólo se puede configurar para saltar un número fijo de posiciones... 😱
 * 
 * Necesitamos una función que nos diga la longitud mínima del salto del trineo para ir evitando todos los obstáculos en la ruta.

const obstacles = [5, 3, 6, 7, 9]
getMinJump(obstacles) // -> 4

// S es salto, X es obstáculo
/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  .  X  .  X  X  X  .  X  . 
S-----------S-----------S-------


const obstacles = [2, 4, 6, 8, 10]
getMinJump(obstacles) // -> 7

/* Así quedaría la representación:
0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10
.  .  X  .  X  .  X  .  X  .  X 
S--------------------S---------

// Longitudes de salto:
// 1 caería en el 2
// 2 caería en el 2
// 3 caería en el 6
// 4 caería en el 4
// 5 caería en el 10
// 6 caería en el 6
// 7 es el ideal!!! ✅

getMinJump([1, 2, 3, 5]) // -> 4
getMinJump([3, 7, 5]) // -> 2
getMinJump([9, 5, 1]) // -> 2

 * La dificultad del reto está en pensar que sólo podemos configurar el salto del trineo una vez 
 * y que buscamos el salto mínimo que nos serviría para sortear todos los obstaculos.
 */

function getMinJump(obstacles) {
    obstacles.sort()
    let bandera = false
    let minJump = 0
     for(let i = 1; i <= 10; i++){
      let result = 0
      minJump = i
      for(let j = 1; j <= obstacles.length; j++){
        result += minJump
        if(obstacles.includes(result)){
          bandera = false
          break
        }else{
          bandera = true
        }
      }
      if(bandera == true) break
    }
    return minJump
  }
  
  console.log(getMinJump([2, 4, 6, 8, 10]))
  
  console.log(getMinJump([3, 7, 5]))
  
  console.log(getMinJump([1, 2, 3, 5]))