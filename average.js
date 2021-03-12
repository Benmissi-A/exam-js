/* Ecrire une fonction average qui prend comme paramètre un tableau de number et retourne la moyenne de tous les nombres de ce tableau. */

const tab = [1,2,3]

const average = (array) => {
  let sum = 0
  for(elem of array){
    sum += elem
  }
  return sum / array.length
}

console.log(average(tab))