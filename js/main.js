var tal = [];
var clickedElement;
var rutor;
window.onload = function(){
    rutor = document.getElementById("Rutor");
   
    console.log(rutor);
    rutor.addEventListener("mouseover", hoverHandler);
    rutor.addEventListener("click", clickHandler);
    function hoverHandler(event){
        if(event.target.tagName=="DIV" && event.target.id != "Rutor" && event.target.innerText == "?"){
            randomTal = 0;
            while(true){
                randomTal = Math.floor(Math.random() * 100 + 1);
                if(!tal.includes(randomTal)){
                    tal.push(randomTal);
                    console.log(tal);
                    break;
                }
            }
            event.target.innerText = randomTal;
        }
    }
    function clickHandler(event){
        if(event.target.tagName=="DIV" && event.target.id != "Rutor" && event.target.innerText != "?"){
            if(clickedElement == null){
                clickedElement = event.target;
            }
            else{
                let _tempRuta = clickedElement.innerText;
                clickedElement.innerText = event.target.innerText;
                event.target.innerText = _tempRuta;
    
                clickedElement = null;
                tempRuta = null;
                
                let _win = checkOrder();
                console.log("u alive?")
                if(_win){
                    console.log("WIN");
                }
            }
        }
    }
    function checkOrder(){
        let _counter = 0;
        console.log(rutor);
        for(_ruta of [...rutor]){
            if(parseInt(_ruta.innerText) >= _counter){
                console.log(_counter);
                _counter=parseInt(_ruta.innerText);
            }
            else{
                return false;
            }
        }
        return true;
    }
}
