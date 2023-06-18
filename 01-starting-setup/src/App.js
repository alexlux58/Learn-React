import ExpenseItem from "./components/ExpenseItem";

function App() {
  // Imparative Approach
  const para = document.createElement("p");
  para.textContent = "This is also visible";
  document.getElementById("root").append(para);

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <ExpenseItem></ExpenseItem>
      {/* <p>This is not also visible</p> */}
    </div>
  );
}

export default App;
