import { Button } from "react-bootstrap";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { incrementHandler } from "./redux/action";

function App() {
  const dispatch = useDispatch();
  //call the action
  const handelIncrement = () => {
    dispatch(incrementHandler());
  };

  // import the global state from the global store
  const counter = useSelector((state) => state.counter);
  console.log(counter);

  return (
    <div className="counter">
      <div className="btns">
        <Button> - </Button>
        <Button variant="danger" size="lg">
          {counter}
        </Button>
        <Button onClick={handelIncrement}> + </Button>
      </div>
      <Button>reset</Button>
    </div>
  );
}

export default App;
