import { useAppSelector } from "../store/hook";

const Counter: React.FC = () => {
  const counterState = useAppSelector((state) => state.counter);

  return (
    <div>
      <p>{`Count: ${counterState.value}`}</p>
    </div>
  );
};

export default Counter;
