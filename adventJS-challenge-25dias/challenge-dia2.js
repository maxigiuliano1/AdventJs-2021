/**Te ha llegado una carta ✉️ con todos los regalos que debes preparar. 
 * El tema es que es una cadena de texto y es muy difícil de leer 😱. 
 * ¡Menos mal que han puesto cada regalo separado por espacio! 
 * (aunque ten cuidado, porque al ser niños, igual han colado más espacios de la cuenta)
 * Encima nos hemos dado cuenta que algunas palabras vienen con un _ delante de la palabra, por ejemplo _playstation, 
 * que significa que está tachado y no se tiene que contar.
 * 
 * Transforma el texto a un objeto que contenga el nombre de cada regalo y las veces que aparece. Por ejemplo, si tenemos el texto:
const carta = 'bici coche balón _playstation bici coche peluche'

 * Al ejecutar el método debería devolver lo siguiente:
const regalos = listGifts(carta)
console.log(regalos)
output:
    {
        bici: 2,
        coche: 2,
        balón: 1,
        peluche: 1
    }
*/

const letter = 'bici coche balón _playstation bici coche peluche _nintendo'
/**funcion que retorna un arreglo de regalos sin contar las que tienen "_" ya que esas significan que estan eliminadas */
function arrayWords(letter){
    let words = []
    let ultimateLetter, formWords = ""
    let deleteWord = false
    for (let index = 0; index < letter.length; index++) {
        if(letter[index] != " "){
            formWords += letter[index]
            if(letter[index] == "_"){
                deleteWord = true
            }
        }else if(letter[index] == " " && deleteWord == true){
            deleteWord = false
            formWords = ""
        }else if(letter[index] == " "){
            words.push(formWords)
            formWords = ""
        }
        if(index == letter.length-1 ){
            ultimateLetter = letter[index]
        }
    }
    if(ultimateLetter != " " && deleteWord != true){
        words.push(formWords)
    }
    return words
}
/**conteo de la cantidad de regalos que se repiten en la lista */
function listGifts(letter) {
    let gifts = {} 
    const words = arrayWords(letter)
    for(const word of words){
        if(gifts[word]){
            gifts[word] += 1
        } else{
            gifts[word] = 1
        }
    }
 return gifts
}

const gifts = listGifts(letter)
console.log(gifts)