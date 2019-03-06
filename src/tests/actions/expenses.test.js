import thunk from 'redux-thunk';
import configureMockStore from "redux-mock-store";
import { 	
	addExpense, 
	startAddExpense, 
	editExpense, 
	startEditExpense, 
	removeExpense, 
	setExpenses, 
	startSetExpenses, 
	startRemoveExpense } from "../../redux/actions/expenses";
import expenses from "../fixtures/expenses";
import database from "../../firebase/firebase";

//create config for test cases
const uid = "thisismytestuid";
const defaultAuthState = { auth: { uid } };
const createMockStore = configureMockStore([thunk]);

//write data to firebase
beforeEach((done) => {
	const expensesData = {};
	expenses.forEach(({ id, description, note, amount, createdAt }) => {
		expensesData[id] = {description, note, amount, createdAt};
	});
database.ref(`users/${uid}/expenses`).set(expensesData).then(() => done());
});

test("should setup remove expense action object", () => {
	const action = removeExpense({ id: "123abc" });
	expect(action).toEqual({
		type: "REMOVE_EXPENSE",
		id: "123abc"
	});
});

test("should remove expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[2].id;
	store.dispatch(startRemoveExpense({ id })).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "REMOVE_EXPENSE",
			id
		});
		return database.ref(`users/${uid}/expenses/${id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val()).toBeFalsy();
		done();
	});
});

test("should setup edit expense action object", () => {
	const action = editExpense("123", { note: "note value" });
	expect(action).toEqual({
		type: "EDIT_EXPENSE",
		id: "123",
		updates: {
			note: "note value"
		}
	});
});

test("should edit expense from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	const id = expenses[0].id;
	const updates = { amount: 21045 };
	store.dispatch(startEditExpense(id, updates)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "EDIT_EXPENSE",
			id,
			updates
		});
		return database.ref(`users/${uid}/expenses/${id}`).once("value");
	}).then((snapshot) => {
		expect(snapshot.val().amount).toBe(updates.amount);
		done();
	});
});

//before redux thunk
// test("should setup add expense action object with provided values", () => {
// 	const expenseData = {
// 		description: "rent",
// 		note: "this was last months rent",
// 		amount: "109500",
// 		createdAt: 1000,
// 	};
// 	const action = addExpense(expenseData);
// 	expect(action).toEqual({
// 		type: "ADD_EXPENSE",
// 		expense: {
// 			...expenseData,
// 			id: expect.any(String)
// 		}
// 	})
// });

//with redux thunk
test("should setup add expense action object with provided values", () => {

	const action = addExpense(expenses[2]);
	expect(action).toEqual({
		type: "ADD_EXPENSE",
		expense: expenses[2]
	})
});


//test cases for async generator
test("should add expense to database and store", (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseData = {
		description: "Mouse",
		amount: 3000,
		note: "This one is better",
		createdAt: 1000
	};
	store.dispatch(startAddExpense(expenseData)).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseData
			}
		});
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseData);
		done();
	});
});

test("should add expense to defaults to database and store", (done) => {
	const store = createMockStore(defaultAuthState);
	const expenseDefaults = {
		description: "",
		amount: 0,
		note: "",
		createdAt: 0
	};
	store.dispatch(startAddExpense({})).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "ADD_EXPENSE",
			expense: {
				id: expect.any(String),
				...expenseDefaults
			}
		});
		return database.ref(`users/${uid}/expenses/${actions[0].expense.id}`).once("value")
	}).then((snapshot) => {
		expect(snapshot.val()).toEqual(expenseDefaults);
		done();
	});
});

test("should setup set expense action object with data", () => {
	const action = setExpenses(expenses);
	expect(action).toEqual({
		type: "SET_EXPENSES",
		expenses
	})
});

test("should fetch the expenses from firebase", (done) => {
	const store = createMockStore(defaultAuthState);
	store.dispatch(startSetExpenses()).then(() => {
		const actions = store.getActions();
		expect(actions[0]).toEqual({
			type: "SET_EXPENSES",
			expenses
		});
		done();
	});
});

//before redux thunk
//addExpense action generator is no longer responsible for this 
// test("should setup the add expense action object with default values", () => {
// 	const action = addExpense();
// 	expect(action).toEqual({
// 		type: "ADD_EXPENSE",
// 		expense: {
// 			id: expect.any(String),
// 			description: "",
// 			note: "",
// 			amount: 0,
// 			createdAt: 0
// 		}
// 	})
// });



