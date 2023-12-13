import React from "react";

import Expenses from "./components/EXPENSES/Expenses";

const App =()=> {

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
      <Expenses items={expenses}/>
    </div>
  );
}

export default App;