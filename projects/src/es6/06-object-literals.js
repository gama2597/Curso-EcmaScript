// enhaced object literals

function newUser(user, age, country, uId) {
  return {
    user,
    age,
    country,
    uId,
  };
}

console.log(newUser("Gabriel", 25, "PE", 1));
