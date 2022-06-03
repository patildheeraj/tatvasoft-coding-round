import "./App.css";
import InputComponent from "./components/InputComponent";
import ListComponent from "./components/ListComponent";

function App() {
  return (
    <>
      <div className="row">
        <div className="col">
          <InputComponent />
        </div>
        <div className="col">
          <ListComponent />
        </div>
      </div>
    </>
  );
}

export default App;
