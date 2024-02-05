window.onload = function(){
    rutor = document.getElementById("Rutor");

    tal = [];    
    for(Ruta of rutor.getElementsByTagName("div")){
        p = Ruta.getElementsByTagName("p")[1];
        console.log(p)
        while(true){
            randomTal = Math.round(Math.random() * 100);
            if(!tal.includes(randomTal)){
                tal.push(randomTal);
                p.innerText = randomTal;
                console.log(tal);
                break;
            }
        }
    }

    console.log(rutor);
    rutor.addEventListener("click", function (event){
        if(event.target.tagName=="DIV"){
            event.target.children[0].classList.toggle("visible");
            event.target.children[1].classList.toggle("visible");

        }
    });
}