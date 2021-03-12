/* Même exercice que précédemment mais ajouter deux boucles do-while et while pour effectuer le traitement. */

const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve']
// 1  boucle for

for(let i = 0 ; i < tab.length ; ++i){
  console.log(`${tab[i]}, length: ${tab[i].length}`)
}

// 2 boucle for-of

for(elem of tab){
  console.log(`${elem}, length: ${elem.length}`)
}

// 3 boucle do while

tab.forEach(elem => {
  console.log(`${elem}, length: ${elem.length}`)
});

// 4  boucle while

let i = 0
while(i < tab.length){
  console.log(`${tab[i]}, length: ${tab[i].length}`)
  i++
}

// 5  boucle do while

i = 0
do{
  console.log(`${tab[i]}, length: ${tab[i].length}`)
  i++
}while(i < tab.length)