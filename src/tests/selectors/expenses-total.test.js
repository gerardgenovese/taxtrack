import expensesTotal from "../../redux/selectors/expenses-total";
import expenses from "../fixtures/expenses";


test("should return 0 if no expenses", () => {
	const res = expensesTotal([]);
	expect(res).toBe(0);
});

test("should correctly add up a single value", () => {
	const res = expensesTotal([expenses[0]]);
	expect(res).toBe(195);
});

test("should correctly add up a multiple value", () => {
	const res = expensesTotal(expenses);
	expect(res).toBe(114195);
});