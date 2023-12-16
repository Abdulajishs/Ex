import React from "react";

import ExpenseDetails from "./ExpenseDetails";
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
import "./ExpenseItem.css"

const ExpenseItem = (props) => {
    const deleteExpenseHandler = () => {
        // console.log(`${props.id}`);
        const cardEle = document.getElementById(`${props.id}`);
        if (cardEle) {
            cardEle.remove();
        } else {
            console.log(`Element with ID ${props.id} not found.`);
        }
    }
    return (
        <Card id={props.id} className="expense-item">
            <ExpenseDate date={props.date} />
            <ExpenseDetails
                title={props.title}
                amount={props.amount}
                location={props.location}
            />
            <button onClick={deleteExpenseHandler}>Delete Expense</button>
        </Card>
    )
}

export default ExpenseItem;