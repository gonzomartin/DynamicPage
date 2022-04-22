(() => {
  const buttonL = document.querySelector(".ILiss");
	const infoLiss = document.querySelector(".LinfoCont");
  const buttons = document.querySelectorAll(".Liss");
	const infoGonzo = document.querySelector(".GinfoCont");
  const imgGonzo = document.querySelector(".GImg");
  const imgLiss = document.querySelector(".LImg");
  const nameInfoEl = document.querySelector('.nameInfo');
  const resumeInfoEl = document.querySelector('.resumeInfo');
  const paraInfoEl = document.querySelector('.paragraph');


	/* function showInfoL() {
		infoLiss.classList.toggle("slideToggle");

	}

  function showInfoG() {
		infoGonzo.classList.toggle("slideToggle");

	} */

  const nameInfo = [
    `Gonzalo Martin`,
    `Lissa M. Barco`
  ]

  const resumeInfo = [
    `25, Colombian, Visual Comunication Designer.`,
    `28, Colombian, Lawyer but artist from the hearth.`

  ]

  const paragraph = [
    `I was born in Cali, Colombia, and raised in Palmira. Since I was a little kid I’ve always been really into artistic and manual stuff, my passion when I was a youngman was playing with clay, i used to do it everyday with my dad, he was the real artist at that time. Since then as any other human I have been going through different circumstances and now I'm a professional Visual Communication Designer from the Javeriana University in Cali, Colombia and nowadays I'm studying Interactive Media Design at Fanshawe College in Canada.`,
    `Maria is my wife and the complement that gives a head to everything in my life, she is my art director and have been the one behind any radical change that have occur during the develope of all the projects i have done. She is by far the more loving and caring women, she has been my dream team for sure.`

  ]

  function setData () {
    let index = this.dataset.offset;
    nameInfoEl.textContent = nameInfo[index];
    resumeInfoEl.textContent = resumeInfo[index];
    paraInfoEl.textContent = paragraph[index];
  }





	buttons.forEach(button => button.addEventListener("click", setData));



})();
