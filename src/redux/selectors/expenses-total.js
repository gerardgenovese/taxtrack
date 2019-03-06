const expensesTotal = (expenses) => {
	return expenses
	.map(val => val.amount)
	.reduce((acc,curr) => acc + curr, 0);
};





export default expensesTotal;