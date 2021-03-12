/* Ecrire une fonction numberPyramid qui prend 1 paramètre qui correspondra à la base de la pyramide. 
Cette fonction affichera une pyramide dont les motifs pour chaque étage correspondra au numéro de la ligne. */


const numberPyramid = (base) => {
  for(let i=0 ;i<base; ++i){
    console.log((i+1).toString().repeat(i+1))
  }
}
numberPyramid(5)



