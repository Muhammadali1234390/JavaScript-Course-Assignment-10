let email = prompt("Enter your email:");

let hasAt = false;
let hasDotNearEnd = false;

// Check if '@' exists
for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    hasAt = true;
    break;
  }
}

// Check if '.' exists at 2nd or 3rd last position
let len = email.length;
if (len >= 4) {
  if (email[len - 2] === '.' || email[len - 3] === '.') {
    hasDotNearEnd = true;
  }
}

if (hasAt && hasDotNearEnd) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
