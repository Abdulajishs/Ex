import React from "react";

import Expenses from "./components/EXPENSES/Expenses";

const App =()=> {

  const expenses = [{
    id : "e1",
    title: "toilet paper",
    amount: 94.12,
    date: new Date(2023, 2, 27),
    LocationOfExpenditure: "Supermarket"
  }, {
    id : "e2",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2023, 3, 28),
    LocationOfExpenditure: "Insurance company"
  }, {
    id : "e3",
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