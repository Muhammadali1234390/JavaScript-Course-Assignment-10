let email = prompt("Enter your email:");
let hasAt = false;
let hasDot = false;

// Check for '@'
for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    hasAt = true;
    break;
  }
}

// Check if dot exists in the last 2, 3, or 4 characters
let len = email.length;

if (
  email[len - 2] === '.' ||
  email[len - 3] === '.' ||
  email[len - 4] === '.'
) {
  hasDot = true;
}

// Final decision
if (hasAt && hasDot) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
