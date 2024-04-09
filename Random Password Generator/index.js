//Random Password Generator


document.getElementById("generate").onclick =  function generatePassword(){

    const passwordLength = document.getElementById("passwordLength").value ;
    const includeLowerCase = document.getElementById("yesL").checked ;
    const includeUpperCase = document.getElementById("yesU").checked ;
    const includeNumbers = document.getElementById("yesN").checked ;
    const includeSymbols = document.getElementById("yesS").checked ;
            
    const lowerCaseChars = "azertyuiopqsdfghjklmwxcvbn";
    const upperCaseChars = "AZERTYUIOPQSDFGHJKLMWXCVBN";
    const numbersChars = "1234567890";
    const symbolsChars = "^$@*!?/(-_)+=";

    let password = "";
    let AllowedChars = "";

    AllowedChars += includeLowerCase ? lowerCaseChars : "";
    AllowedChars += includeUpperCase ? upperCaseChars : "";
    AllowedChars += includeNumbers ? numbersChars : "";
    AllowedChars += includeSymbols ? symbolsChars : "";

    if (passwordLength < 8) {
        document.getElementById("password").textContent =  `minimum length of a password is 8`;
    } else if (AllowedChars.length === 0) {
        document.getElementById("password").textContent = `At least one caracter should be selected`;
    } else {
        for (let i = 0; i < passwordLength; i++) {
            const randomIndex = Math.floor(Math.random() * AllowedChars.length);
            password += AllowedChars[randomIndex];
        }
        document.getElementById("password").textContent = `Generated Password : ${password}` ;
    }
}

