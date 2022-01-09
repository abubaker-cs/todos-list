import "./App.css";
import { Todos } from "./Components/Todos";
import Header from "./Components/Header";
import { Footer } from "./Components/Footer";

function App() {
  return (
    <>
      <Header />
      <Todos />
      <Footer />
    </>
  );
}

export default App;
