import React, { useState } from "react";

import ExpenseItem from './ExpenseItem';
import ExpensesFilter from "./ExpensesFilter"
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
  const [filteredYear, setFilteredYear] = useState("2020");

  const filterChangeHandler = (selectedYear) => {
    setFilteredYear(selectedYear)
  }
  return (
    <Card className="expenses">
      <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler} />
      <ExpenseItem
        id={props.items[0].id}
        title={props.items[0].title}
        amount={props.items[0].amount}
        date={props.items[0].date}
        location={props.items[0].LocationOfExpenditure}
      />
      <ExpenseItem
        id={props.items[1].id}
        title={props.items[1].title}
        amount={props.items[1].amount}
        date={props.items[1].date}
        location={props.items[1].LocationOfExpenditure}
      />
      <ExpenseItem
        id={props.items[2].id}
        title={props.items[2].title}
        amount={props.items[2].amount}
        date={props.items[2].date}
        location={props.items[2].LocationOfExpenditure}
      />

    </Card>
  );
}

export default Expenses;