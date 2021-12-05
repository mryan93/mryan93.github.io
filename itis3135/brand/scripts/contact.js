$(document).ready(function(){

 // Datepicker jqueryUI element that allows selection of dates 200 days in the future

 $("#date").datepicker({
  minDate: new Date(),
  maxDate: +200,
  showButtonPanel: true
 });

 // Initialized tooltips for the document object.

 $(document).tooltip();

 /* Creating a variable to store a new OriDomi object. OriDomi is a 
  jquery plugin that simulates a folding effect for a specified element.
  Fold the form out completely to fill out the fields.
 */

  var foldedForm = new OriDomi('.my-wombat', { vPanels: [5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5,5] });

 foldedForm.accordion(30);
});

function displayText(){
 var nameText = document.getElementById("name").value;
 var numText = document.getElementById("number").value;
 var emailText = document.getElementById("email").value;
 var suggestionText = document.getElementById("suggestions").value;
 var dateText = document.getElementById("date").value;

 if(dateText === ""){
 document.getElementById("user-info").innerHTML = "Thank you for your suggestions, " + nameText + "!\nWe will contact you at: " + numText + " or at your email: " + emailText + ".\nHere is what you entered: " + suggestionText + ".\nThanks again, a representative will be in touch shortly.";
 }
 else{
  document.getElementById("user-info").innerHTML = "Thank you for your suggestions, " + nameText + "!\nWe will contact you at: " + numText + " or at your email: " + emailText + ".\nHere is what you entered: " + suggestionText + ". You have chosen to meet with a representative on: " + dateText + ".\nThanks again, a representative will be in touch shortly.";
 }
}


