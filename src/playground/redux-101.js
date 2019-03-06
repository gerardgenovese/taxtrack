import { createStore } from "redux";

//Action generators = functions that return action objects


//argumentpassed in and if it doesnt exsist it is an empty object ({incrementBy = 1 } = {})
const incrementCount = ({ incrementBy = 1 } = {}) => {
	return {
		type: "INCREMENT",
		incrementBy: incrementBy
	}
};

const decrementCount = ({ decrementBy = 1} ={}) => {
	return {
		type: "DECREMENT",
		decrementBy: decrementBy
	}
};

const setCount = ({setBy}) => {
	return {
		type: "SET",
		setBy: setBy
	}
};

const resetCount = () => {
	return {
		type: "RESET"
	}
};

//reducers
// 1. Reducers are pure functions
// 2. Never change state or action
const countReducer = (state = { count: 0}, action) => {

	switch(action.type){
			case "INCREMENT":
			return {
				count: state.count + action.incrementBy
			};
		// case "DECREMENT":
		// 	const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
		// 	return {
		// 		count: state.count - decrementBy
		// 	};
		case "DECREMENT":
			return {
				count: state.count - action.decrementBy
			};
		case "SET":
			return {
				count: action.setBy
			}
		case "RESET":
			return {
				count: 0
			}
		default:
		return state;
	};
};
	const store = createStore(countReducer);

// const store = createStore((state = { count: 0}, action) => {

// 	switch(action.type){
// 			case "INCREMENT":
// 			return {
// 				count: state.count + action.incrementBy
// 			};
// 		// case "DECREMENT":
// 		// 	const decrementBy = typeof action.decrementBy === "number" ? action.decrementBy : 1;
// 		// 	return {
// 		// 		count: state.count - decrementBy
// 		// 	};
// 		case "DECREMENT":
// 			return {
// 				count: state.count - action.decrementBy
// 			};
// 		case "SET":
// 			return {
// 				count: action.setBy
// 			}
// 		case "RESET":
// 			return {
// 				count: 0
// 			}
// 		default:
// 		return state;
// 	};


// 	if(action.type === "INCREMENT") {
// 		return {
// 			count: state.count + 1
// 		}
// 	} else {
// 			return state;
// 	}
  
// });

const unsubscribe = store.subscribe(() => {
	console.log(store.getState());
})

//increment the count
store.dispatch(incrementCount({incrementBy: 5}))
// store.dispatch({
//   type: "INCREMENT"
// });


// store.dispatch({
// 	type: "INCREMENT",
// 	incrementBy: 5
// });

// unsubscribe();
store.dispatch(incrementCount())

//reset
store.dispatch(resetCount())
// store.dispatch({
// 	type: "RESET"
// });

//decrement the count
store.dispatch(decrementCount());
store.dispatch(decrementCount({decrementBy: 10}))

// store.dispatch({
// 	type: "DECREMENT",
// 	decrementBy: 10
// });

//set the count

store.dispatch(setCount({setBy: 101}))

// store.dispatch({
// 	type: "SET",
// 	count: 101
// })