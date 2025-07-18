let email = prompt("Enter your email:");
let hasAt = false;

for (let i = 0; i < email.length; i++) {
  if (email[i] == '@') {
    hasAt = true;
    break;
  }
}

let len = email.length;
let last1 = email[len - 1];
let last2 = email[len - 2];
let last3 = email[len - 3];

if (hasAt && (last1 == '.' || last2 == '.' || last3 == '.')) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
