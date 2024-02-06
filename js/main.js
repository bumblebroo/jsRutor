var tal = [];
var ruta1;
var ruta2;
window.onload = function(){
    rutor = document.getElementById("Rutor");
   
    console.log(rutor);
    rutor.addEventListener("mouseover", function (event){
        if(event.target.tagName=="DIV" && event.target.id != "Rutor" && event.target.children[0].innerText == "?"){
            randomTal = 0;
            while(true){
                randomTal = Math.round(Math.random() * 100);
                if(!tal.includes(randomTal)){
                    tal.push(randomTal);
                    console.log(tal);
                    break;
                }
            }
            event.target.children[0].innerText = randomTal;
        }
    });
}