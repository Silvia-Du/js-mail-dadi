//EMAIL SECTION

const autorizedUser =['bim', 'bum', 'bam'];

//chiedo i dati al clicc di un pulsante:
const accessBtn =document.querySelector('#accesso');
const emailOutputBox =document.querySelector('.output-mail')
const dadiOutputBox =document.querySelector('.output-alert')

//Evento click
accessBtn.addEventListener('click', function(){
  //richiesta dati
  const userName = prompt('inserisci la tua user utente PS: prova in camel case il tuo nome e l\'iniziale del tuo cognome!')

  let checkUser = false;
  //ciclo for per cercare l'uguaglianza
  for(let i = 0; i< autorizedUser.length; i++){

    if(userName === autorizedUser[i]){
      checkUser = true;
    }
  };

  //utilizzo l'ugluaglianza verificata o meno per crare output adeguato
  if(checkUser){
    emailOutputBox.classList.add('display-visible');
    document.getElementById('output-email').innerHTML = 'Benvenuto nella tua area privata!'
  }else{
    emailOutputBox.classList.add('display-visible');
    document.getElementById('output-email').innerHTML = 'iscriviti per accedere!'
  }

})

//DADI SECTION

//creo lista dalla quale estrarre i numeri
const numberList =[1, 2, 3, 4, 5, 6]
const btnGiocaOra =document.querySelector('#btn-gioca')

//evento click
btnGiocaOra.addEventListener('click', function(){

  //genero & stampo numero random umano
  let randomHuman = Math.floor(Math.random() * numberList.length);
  const numPlayerEstratto = numberList[randomHuman];
  document.getElementById('output-human').innerHTML = numPlayerEstratto;

  //genero & stampo numero random pc
  let randomPc = Math.floor(Math.random() * numberList.length);
  const numPcEstratto = numberList[randomPc];
  document.getElementById('output-pc').innerHTML = numPcEstratto;

  //condizioni di vincita o perdita
  if(numPlayerEstratto === numPcEstratto){
    console.log('pareggio');
    document.getElementById('game-result').innerHTML='Noo hai Pareggiato!Riprova';

  }else if(numPlayerEstratto > numPcEstratto){
    console.log('hai vinto');
    document.getElementById('game-result').innerHTML='hai vinto! se vinci due volte di fila sei il più bello!'
  }else{
    console.log('hai perso');
    document.getElementById('game-result').innerHTML='Hai perso! Ritenta la fortuna!'
  }


})




