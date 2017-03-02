function myFunction() {
  var firstn = document.getElementById("firstn").value;
  var lastn = document.getElementById("lastn").value;
  var date = document.getElementById("date").value;
  var aduattend = document.getElementById("aduattend").value;
  var childattend = document.getElementById("childattend").value;
  var daysattend = document.getElementById("numdays").value;

  var disabeled = [document.getElementById("disyes"), document.getElementById("disno")];
  var dis = [];
  var i;
  for (i = 0; i < disabeled.length; i++) {
    if (disabeled[i].checked) {
      dis += disabeled[i].value + " ";
    }
  }
  var numdisabeled = document.getElementById("numdisabeled").value;

  var allerg = [document.getElementById("allergiesyes"), document.getElementById("allergiesno")];
  var allergies = [];
  var i;
  for (i = 0; i < allerg.length; i++) {
    if (allerg[i].checked) {
      allergies += allerg[i].value + " ";
    }
  }
  var allergiesexplain = document.getElementById("allergiesexplain").value;
  var email = document.getElementById("email").value;
  var partyp = [document.getElementById("none"), document.getElementById("bday"),
  document.getElementById("field"), document.getElementById("group")];
  var party = [];
  var j;
  for (j = 0; j < partyp.length; j++) {
    if (partyp[j].checked) {
      party += partyp[j].value;
    }
  }
  var reservnum = Math.floor((Math.random() * 9999) + 1000);

  var reserv = {firstname:firstn, lastname:lastn, date:date, adultattending:aduattend,
  childrenattending:childattend, daysattending:daysattend, party:party, disabeled:dis,
  numdisabeled:numdisabeled, allergies:allergies, allergiesexplain:allergiesexplain,
  email:email, reservnum:reservnum};
  document.getElementById("left").innerHTML = "First Name: " + reserv["firstname"] + "<br/>" + "Last Name: " + reserv["lastname"] + "<br/>" +
  "Date Attending: " + reserv["date"] + "<br/>" + "Number of Adults Attending: " + reserv["adultattending"] + "<br/>" +
  "Number of Children Attending: " + reserv["childrenattending"] + "<br/>" + "Number of Days Attending: " + reserv["daysattending"] +
  "<br/>" + "Party Package: " + reserv["party"];
  document.getElementById("right").innerHTML = "Handicapped Persons: "
  + reserv["disabeled"] + "<br/>" + "Number of Handicapped Persons: " + reserv["numdisabeled"] + "<br/>" + "People with Allergies: " +
  reserv["allergies"] + "<br/>" + "Explaination of Allergies: " + reserv["allergiesexplain"] + "<br/>" + "Email: " + reserv["email"] +
  "<br/>" + "Reservation Number: " + reserv["reservnum"];
}
