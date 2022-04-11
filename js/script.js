/*Flusso di lavoro:
1. chiedere all'utente di inserire un dato: e-mail.
2. chidere all'utente la sua user name per    accedere.
3. verificare che quella User sia presente        all'interno di una lista "autorizzati"
4. stampare il messagio appropriato in pagina
*/

//quando chiedo i dati? al clicc di un pulsante:
//1. 2.
const accessBtn =document.querySelector('button')
console.log(accessBtn);

accessBtn.addEventListener('click', function(){

  const eMail = prompt('inserisci qui la tua e mail');

  const UserName = prompt('inserisci il tuo user name')
})

//creare una lista utenti: creo un array