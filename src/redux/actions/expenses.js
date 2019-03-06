import uuid from "uuid";
import database from "../../firebase/firebase";

//regualar
//component calls action generator
//action generator returns object
//component dispatches object
//redux store changes


//async
//component calls action generator
//action generator returns function
//component dispatches function
//function runs (has the abiity to dispatch other actions and do whatever it wants)

//add expense dispatches object
//before redux thunk
// const addExpense = (
// 	{
// 		description = "",
// 		note = "",
// 		amount = 0,
// 		createdAt = 0
// 	} = {}
// ) => ({
// 	type: "ADD_EXPENSE",
// 	expense: {
// 		id: uuid(),
// 		description,
// 		note,
// 		amount,
// 		createdAt
// 	}
// });

//after redux thunk
export const addExpense = (expense) => ({
	type: "ADD_EXPENSE",
	expense
});

//AFter redux thunk. Start the addexpense process which will keep changing store. Returning a function which is why we need redux thunk middleware. 
export const startAddExpense = (expenseData = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		const { 
			description = "",
			note = "",
			amount = 0,
			createdAt = 0
		} = expenseData;
		const expense = { description, note, amount, createdAt };
		
		return database.ref(`users/${uid}/expenses`).push(expense).then((ref) => {
			dispatch(addExpense( {
				id: ref.key,
				...expense
			}))
		});
	};
};

//remove expense
export const removeExpense = ({ id } = {}) => ({
	type: "REMOVE_EXPENSE",
	id
});

export const startRemoveExpense = ({ id } = {}) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses/${id}`).remove().then(() => {
			dispatch(removeExpense({ id }));
		});
	};
};

//edit expense
export const editExpense = (id, updates) => ({
	type: "EDIT_EXPENSE",
	id,
	updates
});

export const startEditExpense = (id, updates) => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses/${id}`).update(updates).then(() => {
			dispatch(editExpense(id, updates));
		});
	};
};

//SET_EXPENSES
export const setExpenses = (expenses) => ({
	type: "SET_EXPENSES",
	expenses
});

//fetch expense data, parse data into array, dispatch SET_EXPENSES
export const startSetExpenses = () => {
	return (dispatch, getState) => {
		const uid = getState().auth.uid;
		return database.ref(`users/${uid}/expenses`).once("value").then((snapshot) => {
			const expenses = [];

			snapshot.forEach((childSnapshot) => {
				expenses.push({
					id: childSnapshot.key,
					...childSnapshot.val()
				});
			});
			dispatch(setExpenses(expenses));
		});
	};
};


// export { addExpense, startAddExpense, removeExpense, editExpense };