function newUser(name, age, country) {
  var name = name || "Gabriel";
  var age = age || 25;
  var country = country || "Peru";
  console.log(name, age, country);
}

newUser();
newUser("Antonio", 26, "Peru");

function newAdmin(name = "Gabriel", age = 25, country = "PE") {
  console.log(name, age, country);
}

newAdmin();
newAdmin("Antonio", 26, "PE");
