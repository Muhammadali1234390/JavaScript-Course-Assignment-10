let email = prompt("Enter your email:");
let hasAt = false;
let hasDotNearEnd = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] == "@") {
    hasAt = true;
  }
}

let len = email.length;
if (email[len - 1] == "." || email[len - 2] == "." || email[len - 3] == ".") {
  hasDotNearEnd = true;
}

if (hasAt && hasDotNearEnd) {
  alert("Valid Email");
} else {
  alert("Invalid Email");
}
