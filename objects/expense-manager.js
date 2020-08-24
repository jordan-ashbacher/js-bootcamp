let myAccount = {
	name: 'Jordan Ashbacher',
	expenses: 0,
	income: 0
};

let addExpense = function(account, amount) {
	account.expenses += amount;
};

let addIncome = function(account, amount) {
	account.income += amount;
};

let resetAccount = function(account) {
	account.expenses = 0;
	account.income = 0;
};

let getAccountSummary = function(account) {
	return `Account of ${account.name} has a balance of $${account.income -
		account.expenses}. $${account.income} in income. $${account.expenses} in expenses.`;
};

addIncome(myAccount, 1600);
addExpense(myAccount, 1000);
console.log(getAccountSummary(myAccount));
resetAccount(myAccount);
console.log(getAccountSummary(myAccount));
