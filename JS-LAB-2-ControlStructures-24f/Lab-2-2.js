//######## LAB 2-2 LOGIN ########
//1. LINK THIS JS FILE TO THE HTML FILE
alert("hey 2.2");//COMMENT OUT ONCE CONNECTED TO YOUR HTML PAGE

//====VARIABLES===============
//2. CREATE NECESSARY VARIABLES
		// Correct user name
		// Correct password
		// user name input
		// password input


		var userName = "dart";
		var password = "vader";
		var nameInput;
		var passwordInput;
//====LOGIC===================
//3. CREATE POPUP BOX FOR USERNAME
nameInput = prompt("Your User Name");

//4. OUTPUT PROVIDED USERNAME TO JS CONSOLE
console.log(nameInput);
//5. CREATE POPUP BOX FOR PASSWORD
passwordInput = prompt("Your Password");
//6. OUTPUT PROVIDED PASSWORD TO JS CONSOLE
console.log(passwordInput);

//7. CHECK IF PROVIDED USERNAME AND PROVIDED PASSWORD MATCH THE STORED USERNAME/PASSWORD

//3. IF USER CLICKS ANYTHING BUT OKAY, POPUP messageOut WITH noMessage.

//8. IF THEY MATCH, POPUP SUCCESS MESSAGE AND OUTPUT TO CONSOLE

if (userName === nameInput && passwordInput===password) {
    alert("Login successful.");
}

//9. IF THEY DON'T MATCH, POPUP INVALID MESSAGE & OUTPUT TO CONSOLE

else {
    alert("Login Fail")
}