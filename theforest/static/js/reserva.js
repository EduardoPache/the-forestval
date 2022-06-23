var form = document.getElementById("form");
form.onsubmit = function(e){
  e.preventDefault();
  var name = document.getElementById("name");
  var lName = document.getElementById("lName");
  var phone = document.getElementById("phone");
  var date = document.getElementById("date");
  var aPax = document.getElementById("aPax");
  
  console.log(name);
  console.log(lName);
  console.log(phone);
  console.log(date);
  console.log(aPax);
  
  
}
