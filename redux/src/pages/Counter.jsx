import Stack from "react-bootstrap/Stack";
import Button from "react-bootstrap/Button";
import { useDispatch, useSelector } from "react-redux";
import { decrease, increase, setCount } from "./../redux/slices/counterSlices";
const Counter = () => {
  const dispatch = useDispatch();

  const state = useSelector((store) => store);

  //console.log(state)
  return (
    <div style={{ margin: "0 auto", width: "50%" }}>
      <h1>{state.count}</h1>

      <Stack direction="horizontal" gap={3}>
        <Button variant="danger" onClick={() => dispatch(decrease())}>
          Azalt
        </Button>
        <Button variant="success" onClick={() => dispatch(increase())}>
          Arttır
        </Button>
        <Button variant="warning" onClick={() => dispatch(setCount(0))}>
          Sıfırla
        </Button>
      </Stack>
    </div>
  );
};

export default Counter;
