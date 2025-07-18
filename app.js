let email = prompt("Enter your email:");

let hasAt = false;
let hasDotInLast3 = false;

// Check for '@'
for (let i = 0; i < email.length; i++) {
  if (email[i] == '@') {
    hasAt = true;
    break;
  }
}

// Check for '.' in last 3 characters
let len = email.length;
for (let i = len - 1; i >= len - 3; i--) {
  if (email[i] == '.') {
    hasDotInLast3 = true;
    break;
  }
}

// Final validation
if (hasAt && hasDotInLast3) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
