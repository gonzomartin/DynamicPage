(() => {
  const buttonL = document.querySelector(".ILiss");
	const infoLiss = document.querySelector(".LinfoCont");
  const buttonG = document.querySelector(".GLiss");
	const infoGonzo = document.querySelector(".GinfoCont");
  const imgGonzo = document.querySelector(".GImg");
  const imgLiss = document.querySelector(".LImg");


	function showInfoL() {
		infoLiss.classList.toggle("slideToggle");
    
	}

  function showInfoG() {
		infoGonzo.classList.toggle("slideToggle");

	}


	buttonG.addEventListener("click", showInfoG);
  buttonL.addEventListener("click", showInfoL);


})();
