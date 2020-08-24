let isValidPassword = function(password) {
	return !password.includes('password') && password.length > 8;
};

console.log(isValidPassword('abc'));
console.log(isValidPassword('abc123!@$'));
console.log(isValidPassword('abcpassword123'));
