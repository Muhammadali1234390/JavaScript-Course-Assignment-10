let email = prompt("Enter your email:");

let hasAt = false;
let dotAtEnd = false;

// Loop to check for '@'
for (let i = 0; i < email.length; i++) {
  if (email[i] == '@') {
    hasAt = true;
  }
}

// Check if '.' is at 2nd or 3rd last position
let len = email.length;

if (len >= 4) {
  if (email[len - 2] == '.' || email[len - 3] == '.') {
    dotAtEnd = true;
  }
}

if (hasAt && dotAtEnd) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
