let email = prompt("Enter your email:");
let hasAt = false;
let hasDot = false;

// 1. Check if '@' exists
for (let i = 0; i < email.length; i++) {
  if (email[i] == '@') {
    hasAt = true;
  }
}

// 2. Check if '.' is found in the last 3 characters
let len = email.length;

if (
  (email[len - 1] == '.' || email[len - 2] == '.' || email[len - 3] == '.')
  && len >= 5 // ensure enough characters
) {
  hasDot = true;
}

// 3. Final validation
if (hasAt && hasDot) {
  alert("✅ Valid Email");
} else {
  alert("❌ Invalid Email");
}
