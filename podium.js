/* Ecrire une fonction podium qui prend comme paramètre un tableau de number et affiche les 3 meilleures notes tel que ci dessous: */

const tab = [14,20,18,3,15,]

const podium = (array) => {

  array.sort(function(a, b) {
    return a - b
  }).reverse()
  console.log(`1st: ${array[0]}`)
  console.log(`2nd: ${array[1]}`)
  console.log(`3rd: ${array[2]}`)
}
podium(tab)