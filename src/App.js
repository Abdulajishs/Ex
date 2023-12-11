import ExpenseItem from "./components/ExpenseItem";

function App() {

  const expenses = [{
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2023, 2, 27),
    LocationOfExpenditure: "Supermarket"
  }, {
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 3, 28),
    LocationOfExpenditure: "Insurance company"
  }, {
    title: "New Desk(wooden)",
    amount: 450,
    date: new Date(2023, 5, 12),
    LocationOfExpenditure: "Furniture shop"
  }
  ]
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem title={expenses[0].title}
        amount={expenses[0].amount}
        date={expenses[0].date}
        LocationOfExpenditure={expenses[0].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem title={expenses[1].title}
        amount={expenses[1].amount}
        date={expenses[1].date}
        LocationOfExpenditure={expenses[1].LocationOfExpenditure}
      ></ExpenseItem>
      <ExpenseItem title={expenses[2].title}
        amount={expenses[2].amount}
        date={expenses[2].date}
        LocationOfExpenditure={expenses[2].LocationOfExpenditure}
      ></ExpenseItem>

    </div>
  );
}

export default App;