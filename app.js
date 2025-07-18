let email = prompt("Enter your email:");
let hasAt = false;
let dotNearEnd = false;

// Check for '@'
for (let i = 0; i < email.length; i++) {
  if (email[i] === '@') {
    hasAt = true;
    break;
  }
}

// Check for '.' in last 4 characters (2nd, 3rd, or 4th last)
let len = email.length;
if (
  email[len - 2] === '.' ||
  email[len - 3] === '.' ||
  email[len - 4] === '.'
) {
  dotNearEnd = true;
}

// Final result
if (hasAt && dotNearEnd) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}

