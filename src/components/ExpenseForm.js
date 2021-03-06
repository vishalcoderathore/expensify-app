import React from 'react';
import moment from 'moment';
import 'react-dates/initialize';
import { SingleDatePicker } from 'react-dates';
import ErrorPopup from './ErrorPopup';
import FontAwesomeIcon from '@fortawesome/react-fontawesome';
import faDollar from '@fortawesome/fontawesome-free-solid/faDollarSign';
const now = moment();

class ExpenseForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            description: this.props.expense ? this.props.expense.description : '',
            amount: this.props.expense ? (this.props.expense.amount).toString() : '',
            note: this.props.expense ? this.props.expense.note : '',
            createdAt: this.props.expense ? moment(this.props.expense.createdAt) : moment(),
            calenderFocused: false,
            error: false
        }
    }

    onDescChange = (e) => {
        const updatedDesc = e.target.value;
        this.setState(() => {
            return {
                description: updatedDesc
            }
        });
    };
    onAmountChange = (e) => {
        const updatedAmt = e.target.value;
        if (!updatedAmt || updatedAmt.match(/^\d{1,}(\.\d{0,2})?$/)) {
            this.setState(() => {
                return {
                    amount: updatedAmt
                }
            });
        }
    };
    onNoteChange = (e) => {
        const updatedNote = e.target.value;
        this.setState(() => {
            return {
                note: updatedNote
            }
        });
    };
    onDateChange = (createdAt) => {
        if (createdAt) {
            this.setState(() => ({ createdAt: createdAt }));
        }
    }
    onFocusChange = ({ focused }) => {
        this.setState(() => ({ calenderFocused: focused }));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (!this.state.description || !this.state.amount) {
            this.setState(() => ({ error: true }));
        }
        else {
            this.setState(() => ({ error: false }));
            this.props.onSubmit({
                description: this.state.description,
                amount: parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };


    render() {
        return (
            <form className="form" onSubmit={this.onSubmit}>
                {this.state.error && <ErrorPopup />}

                <label>Expense Description</label>
                <input className="text-input" type="text" id="desc" placeholder="Description" value={this.state.description} onChange={this.onDescChange} autoFocus />

                <label>Expense Amount (<span><FontAwesomeIcon icon={faDollar} /></span>)</label>
                <input className="text-input" type="text" placeholder="Amount" value={this.state.amount} onChange={this.onAmountChange} />

                <label>Expense Date</label>
                <SingleDatePicker
                    date={this.state.createdAt}
                    onDateChange={this.onDateChange}
                    focused={this.state.calenderFocused}
                    onFocusChange={this.onFocusChange}
                    numberOfMonths={1}
                    isOutsideRange={() => false}
                    block
                />
                <label>Expense Note</label>
                <textarea className="textarea" placeholder="Add a note for your Expense! (optional)" cols="30" rows="10" value={this.state.note} onChange={this.onNoteChange}></textarea>

                <div>
                    <button className="button">{this.props.expense ? 'Update Expense' : 'Add Expense'}</button>
                </div>

            </form>
        )
    }
}

export default ExpenseForm;