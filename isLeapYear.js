/* 
Ecrivez une fonction isLeapYear qui prendra comme paramètre un nombre, qui correspondra à une année, et qui retournera true si l'année est bissextile ou bien false si elle ne l'est pas. D'après wikipedia:

    Depuis l'ajustement du calendrier grégorien, l'année n’est bissextile (comportant 366 jours) que dans l’un des deux cas suivants :

    - si l'année est divisible par 4 et non divisible par 100 ;
    - si l'année est divisible par 400 (« divisible » signifie que la division donne un nombre entier, sans reste).

Pour calculer le reste d'une division il faut utiliser l'opérateur % */

const annee = 8

const isLeapYear = (year) => {

  if((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)){
    return true
  }else{

    return false
  }

}

console.log(`l'anee ${annee} est bissextile ? : ${isLeapYear(annee)} `)