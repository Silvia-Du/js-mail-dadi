/*Flusso di lavoro:
1. chiedere all'utente di inserire un dato: e-mail.
2. chidere all'utente la sua user name per    accedere.
3. verificare che quella User sia presente        all'interno di una lista "autorizzati"
4. stampare il messagio appropriato in pagina
*/

const autorizedUser =['bim', 'bum', 'bam'];

//chiedo i dati al clicc di un pulsante:
//1. 2.
const accessBtn =document.querySelector('#accesso')

accessBtn.addEventListener('click', function(){

  const userName = prompt('inserisci la tua user utente PS: prova in camel case il tuo nome e l\'iniziale del tuo cognome!')

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

//dadi

const numberList =[1, 2, 3, 4, 5, 6]

console.log('lista lenght', numberList.length);

const btnGiocaOra =document.querySelector('#btn-gioca')

btnGiocaOra.addEventListener('click', function(){


  let randomHuman = Math.floor(Math.random() * numberList.length);
  const numPlayerEstratto = numberList[randomHuman];
  document.getElementById('output-human').innerHTML = numPlayerEstratto;


  let randomPc = Math.floor(Math.random() * numberList.length);
  const numPcEstratto = numberList[randomPc];
  document.getElementById('output-pc').innerHTML = numPcEstratto;

  if(numPlayerEstratto === numPcEstratto){
    console.log('pareggio');

  }else if(numPlayerEstratto > numPcEstratto){
    console.log('hai vinto');
  }else{
    console.log('hai perso');
  }


})




