// this is a self-invoking anonymus function
// it's also called a module [my variation of the module pattern]
// it encapsule all of your cystom code and make sit private.

(() => {
  // make asociations (select) with elements in the HTML markup using CSS selectors.
  let theHeading = document.querySelector(".main-heading");

  //scrip your behavior with functions
  function logElement() {
    console.log('clicked on the heading');
  }

  // add event handling here (user "triggers")
  // assign the event you want to lister for, and the function that sould be run
  theHeading.addEventListener("click", logElement);

})();
