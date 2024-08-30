function passwordgenerater() {
    let password = "";
    let passwordLength = parseInt(document.getElementById("dropdown").value); // Get the selected password length
    let characters = "123456789qwertyuioplkjhgfdsazxcvbnm!@#$%^&*"; // Characters to use in the password
    
    for (let i = 0; i < passwordLength; i++) { // Loop based on the selected length
        password += characters.charAt(Math.floor(Math.random() * characters.length)); // Append random character
    }
    
    document.getElementById("input-field").value = password; // Set the generated password in the input field
}
