const account = {
	name: 'Jordan Ashbacher',
	expenses: [],
	addExpense: function(newExpenseDescription, newExpenseAmount) {
		return this.expenses.push({
			description: newExpenseDescription,
			amount: newExpenseAmount
		});
	},
	getAccountSummary: function() {
		let total = 0;
		for (i = 0; i < this.expenses.length; i++) {
			total += this.expenses[i].amount;
		}
		return `${this.name} has $${total} in expenses.`;
	}
};

account.addExpense('Rent', 300);
account.addExpense('Beer', 10.95);
console.log(account.getAccountSummary());

// Original getAccountSummary solution using for loop:
// getAccountSummary: function() {
// 	let total = 0;
// 	for (i = 0; i < this.expenses.length; i++) {
// 		total += this.expenses[i].amount;
// 	}
// 	return `${this.name} has $${total} in expenses.`;
// }
