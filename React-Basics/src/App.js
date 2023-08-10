import Expenses from "./components/Expenses/Expenses";

const App = () => {
  // Imparative Approach
  // const para = document.createElement("p");
  // para.textContent = "This is also visible";
  // document.getElementById("root").append(para);

  const expenses = [
    {
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 6, 18),
    },
    {
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 6, 18),
    },
    {
      title: "Car Insurance",
      amount: 250,
      date: new Date(2023, 6, 18),
    },
  ];

  return (
    <div>
      {/* <h2>Let's get started!</h2> */}
      <Expenses expenses={expenses} />
      {/* <p>This is not also visible</p> */}
    </div>
  );
};

export default App;
