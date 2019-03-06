import React from "react";
import { connect } from "react-redux";
import ExpenseListItem from "./ExpenseListItem";
import selectExpenses from "../redux/selectors/expenses";

const ExpenseList = (props) => {
	return (
		<div className="content-container">
			<div className="list-header">
				<div className="show-for-mobile">Deductions</div>
				<div className="show-for-desktop">Deduction</div>
				<div className="show-for-desktop">Amount</div>
			</div>

			<div className="list-body">
			{
				props.expenses.length === 0 ? (
					<div className="list-item list-item--message">
						<span>No Expenses</span>
					</div>
				) : (
						props.expenses.map(expense => {
							return (
								<ExpenseListItem key={expense.id}{...expense} />
							)
						})
					)
			}
			</div>
		</div>
	)
};

const mapStateToProps = (state) => {
	return {
		expenses: selectExpenses(state.expenses, state.filters)
	}
};

export { ExpenseList };
export default connect(mapStateToProps)(ExpenseList);

