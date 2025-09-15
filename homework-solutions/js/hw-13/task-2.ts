function validatePassword(password: string): boolean {
    if (password.length < 8 || password.trim().length === 0) {
        return false;
    }

    let hasUpperCase = false;
    let hasLowerCase = false;
    let hasDigit = false;

    for (let i = 0; i < password.length; i++) {
        const char = password[i];

        if (char >= 'A' && char <= 'Z') hasUpperCase = true;
        else if (char >= 'a' && char <= 'z') hasLowerCase = true;
        else if (char >= '0' && char <= '9') hasDigit = true;
        if (hasUpperCase && hasLowerCase && hasDigit) break;
    }

    return hasUpperCase && hasLowerCase && hasDigit;
}

console.log(validatePassword("Password123")); 
console.log(validatePassword("password123")); 
console.log(validatePassword("PASSWORD123"));
console.log(validatePassword("Password"));
console.log(validatePassword("      "));
console.log(validatePassword("Pass 123"));
