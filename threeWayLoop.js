/* Ecrire dans un même fichier ThreeWayLoop.js, 3 boucles différentes for, for-of, forEach qui effectueront le même traitement. 
Ce traitement consistera à afficher tous les éléments d'un tableau de string suivis de leur taille. 
Par exemple pour le tableau suivant const tab = ['Alice', 'Bob', 'Charlie', 'Dan', 'Eve'] nous obtiendrons l'affichage suivant 3 fois (1 fois par loop): */

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
