import { decrement, increment } from "../store/counterSlice/counter-slice";
import { useAppDispatch } from "../store/hook";

const Buttons = () => {
  const dispatch = useAppDispatch();
  return (
    <div>
      <button
        onClick={() => {
          dispatch(increment());
        }}
      >
        Add 1
      </button>
      <br></br>
      <button
        onClick={() => {
          dispatch(decrement());
        }}
      >
        Subtract 1
      </button>
    </div>
  );
};

export default Buttons;
