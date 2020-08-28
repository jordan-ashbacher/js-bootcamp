const account = {
	name: 'Jordan Ashbacher',
	expenses: [],
	income: [],
	addExpense: function(newExpenseDescription, newExpenseAmount) {
		this.expenses.push({
			description: newExpenseDescription,
			amount: newExpenseAmount
		});
	},
	addIncome: function(newIncomeDescription, newIncomeAmount) {
		this.income.push({
			description: newIncomeDescription,
			amount: newIncomeAmount
		});
	},
	getAccountSummary: function() {
		let totalExpenses = 0;
		let totalIncome = 0;
		let initialBalance = 0;
		this.expenses.forEach(function(expense) {
			totalExpenses += expense.amount;
		});
		this.income.forEach(function(income) {
			totalIncome += income.amount;
		});
		initialBalance = totalIncome - totalExpenses;
		let accountBalance = initialBalance.toFixed(2);
		return `${this
			.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses.`;
	}
};

account.addExpense('Rent', 300);
account.addExpense('Beer', 10.95);
account.addIncome('Unemployment', 407);
console.log(account.getAccountSummary());

// Original getAccountSummary solution using for loop:
// getAccountSummary: function() {
// 	let total = 0;
// 	for (i = 0; i < this.expenses.length; i++) {
// 		total += this.expenses[i].amount;
// 	}
// 	return `${this.name} has $${total} in expenses.`;
// }
