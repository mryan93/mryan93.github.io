function displayText(){
 var nameText = document.getElementById("name").value;
 var numText = document.getElementById("number").value;
 var emailText = document.getElementById("email").value;
 var suggestionText = document.getElementById("suggestions").value;

 document.getElementById("user-info").innerHTML = "Thank you for your suggestions, " + nameText + "!\nWe will contact you at: " + numText + " or at your email: " + emailText + ".\nHere is what you entered: " + suggestionText + ".\nThanks again, a representative will be in touch shortly.";
}
