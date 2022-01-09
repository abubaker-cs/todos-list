import "./App.css";
import { Todos } from "./Components/Todos";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  const onDelete = (todo) => {
    console.log("I am onDelete of todo", todo);
  };

  let todos = [
    {
      sno: 1,
      title: "Go to the market",
      desc: "You need to go to the market to get fruits.",
    },
    {
      sno: 2,
      title: "Go to school",
      desc: "Submit your assignments",
    },
    {
      sno: 3,
      title: "Go to gym",
      desc: "Today you have to complete for back and check exercises.",
    },
    {
      sno: 4,
      title: "Lunch Time",
      desc: "Eat healthy meal after the workout",
    },
    {
      sno: 5,
      title: "Learn React.js basics",
      desc: "Spend at least 1 hour while understanding React.js fundamentals.",
    },
  ];

  return (
    <>
      <Header title="My Todos List" searchBar={false} />
      <Todos todos={todos} onDelete={onDelete} />
      <Footer />
    </>
  );
}

export default App;
