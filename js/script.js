/*Flusso di lavoro:
1. chiedere all'utente di inserire un dato: e-mail.
2. chidere all'utente la sua user name per    accedere.
3. verificare che quella User sia presente        all'interno di una lista "autorizzati"
4. stampare il messagio appropriato in pagina
*/

//creare una lista utenti: creo un array
const autorizedUser =
['simoneT','giovanniP','stefanoC','mihaiB',
'riccardoB',
'manuelB',
'brunoB',
'guidoB',
'pierluigiC',
'enricoD',
'silviaD',
'carloDDM',
'francescoE'];
//console.log(autorizedUser, autorizedUser.length);


//quando chiedo i dati? al clicc di un pulsante:
//1. 2.
const accessBtn =document.querySelector('button')

accessBtn.addEventListener('click', function(){

  const eMail = prompt('inserisci qui la tua e mail');
  const UserName = prompt('inserisci il tuo user Name, PS: prova in camel case il tuo nome e l\'iniziale del tuo cognome!')

  for(let i = 0; i< autorizedUser.length; i++){
  
    //console.log(i, autorizedUser[i]);
    if(autorizedUser[i]===UserName){
      console.log('giusto');
    }else{
      console.log('sbagliato');
    }
  };

})



