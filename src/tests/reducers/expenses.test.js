import expensesReducer from "../../redux/reducers/expenses";
import expenses from "../fixtures/expenses";

test("should set default state", () => {
	const state = expensesReducer(undefined, { type: "@@INIT" });
	expect(state).toEqual([]);
});

test("should remove expense by id", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: expenses[1].id
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[0], expenses[2]]);
});

test("should not remove expense if id not found", () => {
	const action = {
		type: "REMOVE_EXPENSE",
		id: 4
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should return the object with added expense", () => {
	const expense = {
		id: 109,
		description: "Laptop",
		note: "",
		createdAt: 20000,
		amount: 29500
	};
	const action = {
		type: "ADD_EXPENSE",
		expense
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([...expenses, expense])
});

test("should edit an expense", () => {
	const amount = 12200;
	const action = {
		type: "EDIT_EXPENSE",
		id: expenses[1].id,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state[1].amount).toBe(amount);
});

test("should not edit an expense if ID not found", () => {
	const amount = 12200;
	const action = {
		type: "EDIT_EXPENSE",
		id: 5,
		updates: {
			amount
		}
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual(expenses);
});

test("should set expenses", () => {
	const action = {
		type: "SET_EXPENSES",
		expenses: [expenses[1]]
	};
	const state = expensesReducer(expenses, action);
	expect(state).toEqual([expenses[1]]);
});