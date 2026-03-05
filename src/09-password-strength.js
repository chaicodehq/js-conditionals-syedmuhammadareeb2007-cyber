/**
 * 🔒 SecureApp Password Checker
 *
 * You're building the signup page for SecureApp, a new productivity tool.
 * The product manager wants a password strength meter that gives users
 * real-time feedback as they type their password.
 *
 * The checker evaluates 5 criteria:
 *   1. At least 8 characters long
 *   2. Contains at least one uppercase letter (A-Z)
 *   3. Contains at least one lowercase letter (a-z)
 *   4. Contains at least one number (0-9)
 *   5. Contains at least one special character (!@#$%^&*()_+-=[]{}|;:,.<>?)
 *
 * Strength levels based on how many criteria are met:
 *   - 0–1 criteria → "weak"
 *   - 2–3 criteria → "medium"
 *   - 4 criteria   → "strong"
 *   - All 5        → "very strong"
 *
 * Rules:
 *   - Empty string → "weak"
 *   - Non-string input → "weak"
 *
 * @param {string} password - The password to evaluate
 * @returns {string} "weak", "medium", "strong", or "very strong"
 */
export function checkPasswordStrength(password) {
  // Your code here
  let criteriaMet=0;

  if (typeof password !== "string" || password.trim() === "") {
     return "weak";
  } 
  
  if (password.length>=8){
     criteriaMet++;  //1
     
  }

  for (let i = 0; i < password.length; i++) {
  if (password[i] >= 'A' && password[i] <= 'Z') {
     criteriaMet++;   //2
     break;
  }
}

  for (let i = 0; i < password.length; i++) {
  if (password[i] >= 'a' && password[i] <= 'z') {
     criteriaMet++;   //3
     break;
  }
}

  for (let i = 0; i < password.length; i++) {
  if (password[i] >= '0' && password[i] <= '9') {
     criteriaMet++;   //4
     break;
  }
}

 if( /[^a-zA-Z0-9]/.test(password) )  criteriaMet++;    //5

 
if (criteriaMet <= 1) {
    return "weak";
  } 
  else if (criteriaMet <= 3) {
    return "medium";
  } 
  else if (criteriaMet === 4) {
    return "strong";
  } 
  else if (criteriaMet === 5) {
    return "very strong";
  } 
}
