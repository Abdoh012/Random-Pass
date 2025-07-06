// Variables

const input = document.querySelector("input");
const copyBtn = document.querySelector(".fa");
const generateBtn = document.querySelector("button");
const chars = [
  ..."ABCDEFGHIJKLMNOPQRSTUVWXYZ", // Uppercase letters
  ..."abcdefghijklmnopqrstuvwxyz", // Lowercase letters
  ...'!@#$%^&*()-_=+[]{}|;:",.<>?/`~\\', // Common symbols
];
let password = "";
// End of variables
generateBtn.addEventListener("click", () => {
  for (let i = 0; i < 10; i++) {
    password += chars[parseInt(Math.random() * chars.length)];
  }
  input.value = password;
  password = "";
});

copyBtn.addEventListener("click", () => {
  navigator.clipboard.writeText(input.value)
})
