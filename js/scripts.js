
var statprint = {
  open : "<div class = 'main' > ",
  name : "<div class = 'stat name'>",
  nickname : ", </div><br> The 『",
  nameEnd : "』 <br>",
  mght : "<div class = 'stat might'> might = ",
  spry : "</div> <br> <div class= 'stat spryness'> spryness = ",
  judge : "</div><br> <div class='stat judgement'> judgement = ",
  echo : "</div><br> <div class='stat echo'> echo = ",
  mag :  "</div> <br> <div class='stat magnetism'> magnetism =  ",
  fortune :  "</div> <br> <div class='stat fortune'> fortune =  ",
  end : "</div> </div>"
};
// stat order: might, spryness, judgement, echo, magnetism, fortune
function Contact(firstName, lastName, phoneNumber) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.phoneNumber = phoneNumber;
}
var characterList;

function Character(firstName, lastName, altname, might, spryness, judgement, echo, magnetism, fortune)
{
this.firstName = firstName;
this.lastName = lastName;
this.altname = altname;
this.might = might;
this.spryness = spryness;
this.judgement = judgement;
this.echo = echo;
this.magnetism = magnetism;
this.fortune = fortune;

}

var input = {
  firstName : $("#firstName").val(),
  lastName : $("#lastName").val(),
  altname : $("#altname").val(),
  might : $("#might").val(),
  spryness : $("#spryness").val(),
  judgement : $("#judgement").val(),
  echo : $("#echo").val(),
  magnetism : $("#magnetism").val(),
  fortune : $("#fortune").val()

}

Contact.prototype.fullName = function() {
  return this.firstName + " " + this.lastName;
}

function CreateACharacter()
{
var createdChar =   "var" + input.firstName + input.lastName " = new Character(\'" + input.firstName + "'," input.lastname, 'Marooned Merc', 4, 10, 8, 5, 6, 2);";
}
$(document).ready(function() {
    eval(createdChar);
// stat order: might, spryness, judgement, echo, magnetism, fortune
    var characterList.nori = new Character("Nori", "Ishi", "Enterprising Feline", 7, 10, 1, 8, 9, 1);
  var testContact = new Contact("Ada", "Lovelace", "503-555-1111");
   // Stuff to do as soon as the DOM is ready
   console.log(testContact);
   PrintChar(garrick);
   $("#createsend").submit(function(event){
   event.preventDefault();
   input = {
     firstName : $("#firstName").val(),
     lastName : $("#lastName").val(),
     altname : $("#altname").val(),
     might : $("#might").val(),
     spryness : $("#spryness").val(),
     judgement : $("#judgement").val(),
     echo : $("#echo").val(),
     magnetism : $("#magnetism").val(),
     fortune : $("#fortune").val()

   }
   CreateACharacter();

   });
  });

  function PrintChar(charname)
  {

    $("#characters").append("<div id='" + charname.firstname + charname.lastname + "'>" + statprint.open +
      statprint.name + charname.firstName + " " + charname.lastName +
      statprint.nickname + charname.altname +
      statprint.mght  + charname.might +
      statprint.spry + charname.spryness +
      statprint.judge + charname.judgement +
      statprint.echo + charname.echo +
      statprint.mag + charname.magnetism +
      statprint.fortune + charname.fortune
    );

  }
