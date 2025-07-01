var sigma;

document.getElementById("Submit").onclick = function () {
  sigma = document.getElementById("Input").value;
  console.log(sigma)
  document.getElementById("h21").textContent = "";
  document.getElementById("h22").textContent = "";
  if ((sigma === "Monotropa uniflora")) {
    document.getElementById("h1").textContent =
      "Dvd... aopz tlhuz h sva av tl...";
    document.getElementById("h21").textContent =
      "fvb hyl aol vusf wlyzvu p jhu ahsr av, fvb ruvd?";
    document.getElementById("h22").textContent =
      "fvb hyl aol vusf vul dov buklyzahukz tl...";
  } else {
    document.getElementById("h1").textContent = "Aopz pz ovyypisl.";
    document.getElementById("h21").textContent = "Dof dvbsk fvb npcl tl aopz.";
  }
};