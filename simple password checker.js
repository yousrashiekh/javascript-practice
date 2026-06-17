let password = 123456;
let attempt = 0;
let enteredpassword;


while (password !== enteredpassword && attempt < 3) {
    enteredpassword = Number(prompt("enter a password"));
    attempt++;

    if (enteredpassword === password) {
        alert("congratulation your password is access🫂")
        break;
    }
    else if(attempt >= 3) {
        alert("your account is locked");
    }

    else {
        alert("your password is denied ,please try leter");
    }
}

