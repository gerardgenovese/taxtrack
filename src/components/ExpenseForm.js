import React from "react";
import moment from "moment";
import { SingleDatePicker } from "react-dates";

//date
// const now = moment();
// console.log(now.format("MMM Do, YYYY"));

export default class ExpenseForm extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			description: props.expense ? props.expense.description : "",
			note: props.expense ? props.expense.note : "",
			amount: props.expense ? (props.expense.amount / 100).toString() : "",
			createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
			calendarFocused: false,
			error: ""
		}
	}
	onDescriptionChange = (e) => {
		const description = e.target.value;
		this.setState(() => {
			return { description }
		})
	};
	onNoteChange = (e) => {
		const note = e.target.value;
		this.setState(() => {
			return { note }
		})
	};
	onAmountChange = (e) => {
		const amount = e.target.value;
		//looks for digits first 1 decimal and 2 decimal places
		if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
			this.setState(() => {
				return { amount };
			})
		}
	};
	onDateChange = (dateCreatedAt) => {
		if (dateCreatedAt) {
			this.setState(() => {
				return { createdAt: dateCreatedAt };
			});
		}
	};
	onFocusChange = ({ focused }) => {
		this.setState(() => ({ calendarFocused: focused }));
	};
	onSubmit = (e) => {
		e.preventDefault();

		if (!this.state.description || !this.state.amount) {
			//set error state equal to 'please provide description & amount
			this.setState((error) => {
				return { error: "Please fill in fields" }
			})
		} else {
			//clear error
			this.setState(() => {
				return { error: "" };
			});
			this.props.onSubmit({
				description: this.state.description,
				amount: Math.round(parseFloat(this.state.amount, 10) * 100),
				createdAt: this.state.createdAt.valueOf(),
				note: this.state.note
			});
		}
	}
	render() {
		return (
			<form className="form" onSubmit={this.onSubmit}>
			{this.state.error && <p className="form__error">{this.state.error}</p>}
				<input
					type="text"
					className="text-input"
					placeholder="Description"
					autoFocus
					value={this.state.description}
					onChange={this.onDescriptionChange}
				/>
				<input
					type="text"
					className="text-input"
					placeholder="Amount"
					value={this.state.amount}
					onChange={this.onAmountChange}
				/>
				<SingleDatePicker
					date={this.state.createdAt}
					onDateChange={this.onDateChange}
					focused={this.state.calendarFocused}
					onFocusChange={this.onFocusChange}
					numberOfMonths={1}
					isOutsideRange={() => false}
				/>
				<textarea
					className="textarea"
					placeholder="Add a note for your expense (optional)"
					value={this.state.note}
					onChange={this.onNoteChange}
				>
				</textarea>
				<div>
					<button className="button">Save Deduction</button>
				</div>

			</form>
		)
	}
}