import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  // Imparative Approach
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);
  const dumby_expenses = [
    {
      id: "e1",
      title: "Car Insurance",
      amount: 250,
      date: new Date(2020, 6, 18),
    },
    {
      id: "e2",
      title: "Car Insurance",
      amount: 250,
      date: new Date(2021, 6, 18),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 6, 18),
    },
  ];

  const [expenses, setExpenses] = useState(dumby_expenses);

  const addExpenseHandler = (expense) => {
    // setExpenses([expense, ...expenses]);
    setExpenses((prevExpenses) => {
      return [expense, ...prevExpenses];
    });
  };

  return (
    <div>
      <NewExpense onAddExpenseHandler={addExpenseHandler} />
      {/* <h2>Let's get started!</h2> */}
      <Expenses expenses={expenses} />
      {/* <p>This is not also visible</p> */}
    </div>
  );
};

export default App;
