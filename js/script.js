/*Flusso di lavoro:
1. chiedere all'utente di inserire un dato: e-mail.
2. chidere all'utente la sua user name per    accedere.
3. verificare che quella User sia presente        all'interno di una lista "autorizzati"
4. stampare il messagio appropriato in pagina
*/

//creare una lista utenti: creo un array
const autorizedUser =['bim', 'bum', 'bam'];

//const outputMail =document.getElementById('output-email');

//quando chiedo i dati? al clicc di un pulsante:
//1. 2.
const accessBtn =document.querySelector('button')

accessBtn.addEventListener('click', function(){

  
  const userName = prompt('inserisci il tuo user Name, PS: prova in camel case il tuo nome e l\'iniziale del tuo cognome!')

  let checkUser = false;

  for(let i = 0; i< autorizedUser.length; i++){

    //let userCheck = false;

    if(userName === autorizedUser[i]){
      checkUser = true;
    }
  };

  if(checkUser){
    console.log('corretto');
    document.getElementById('output-email').innerHTML = 'benvenuto!'
  }else{
    console.log('sbagliato');
    document.getElementById('output-email').innerHTML = 'iscriviti per accedere!'
  }

})



