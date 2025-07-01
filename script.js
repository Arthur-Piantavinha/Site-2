var key = "Monotropa uniflora"
var input

document.getElementById("Submit").onclick = function(){
    input = document.getElementById("Input").value
    document.getElementById("h21").textContent = ''
    document.getElementById("h22").textContent = ''
    if(key = input){
        document.getElementById("h1").textContent = "Dvd... aopz tlhuz h sva av tl..."
        document.getElementById("h21").textContent = "fvb hyl aol vusf wlyzvu p jhu ahsr av, fvb ruvd?"
        document.getElementById("h22").textContent = "fvb hyl aol vusf vul dov buklyzahukz tl..."
    }
    else{
        document.getElementById("h1").textContent = "Aopz pz ovyypisl."
        document.getElementById("h21").textContent = "Dof dvbsk fvb npcl tl aopz."
    }
}