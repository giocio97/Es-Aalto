const inputParola = document.querySelector("input");
const myButton = document.querySelector("button");
const tabella = document.querySelector("tbody");



    function nuovaRiga() {
        
                    // parola utente 
        let parolaUser = inputParola.value;
        console.log(parolaUser);
        var newString = "";
        inputParola.value = "";
                    // parola utente inversa
        for (var i = parolaUser.length - 1; i >= 0; i--) { 
            newString += parolaUser[i]; 
        }
        console.log (newString);
                    
                    // vocali
        let voc = new Array('a','e','i','o','u');
        var conteggio = 0;
        vocaliParola = parolaUser.split; 
        for(var i in vocaliParola){
            if(voc.contains(vocaliParola[i])){
                conteggio++;
            }
        }
        console.log(conteggio);
        

       

      
                     // tabella 
        const riga = document.createElement('tr');
        
        riga.classList.add("riga-a");
       

        tabella.append(riga);
         const parolatd = document.createElement('td');
         riga.append(parolatd);
         parolatd.append( parolaUser);

         const parolaReverse = document.createElement('td');
         riga.append(parolaReverse);
        parolaReverse.append(newString);

        const parolaVocali = document.createElement('td');
         riga.append(parolaVocali);
         parolaVocali.append(conteggio);
        
        

        return newString;
     

        
        
        
        
    }

    
      



