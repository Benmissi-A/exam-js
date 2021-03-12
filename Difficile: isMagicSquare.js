/* Ecrivez une fonction isMagicSquare qui prendra comme paramètre un tableau de tableaux, comme notre exemple ci dessus, 
et qui retournera true si ce tableau correspond à un carré magique sinon false. */


const square = [
  [2, 7, 6],
  [9, 5, 1],
  [4, 3, 8],
]

const isMagicSquare = (tab) => {
  compare=[]
  
  for(let i = 0 ; i < tab.length ; ++i){           // les variables hSum et vSum comparent la somme des colonnes et des lignes  
    let hSum = 0                                   // elles sont push dans le tableau compare qui ne doit contenir que les memes valeurs
    let vSum = 0
    for(let j = 0 ; j < tab[i].length ; ++j){
      hSum +=tab[i][j] 
      vSum +=tab[j][i]
    }  
    compare.push(hSum+vSum)
    }
    for(let k = 1 ; k < compare.length ; ++k){
      if(compare[k] === compare[k-1]){

      }else{
        return false
      }
    }
    return true
  }
  

console.log(isMagicSquare(square))