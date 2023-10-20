import { useStep2 } from "../context/Step2Context";

export function BoxPlan({ index, src, planName, planPrice }) {
  const { monthly, selected, price, dispatch } = useStep2();

  function handleSelected() {
    const newArr = [...selected].map(() => false);
    newArr[index] = !selected[index];
    dispatch({ type: "setSelected", payload: newArr });
  }

  return (
    <div
      style={
        selected[index]
          ? { backgroundColor: "#F8F9FF", borderColor: "#483EFF" }
          : {}
      }
      className="container-plan"
      onClick={() => handleSelected()}
    >
      <img
        className="img-arcade"
        alt=""
        src={selected[index] ? src[1] : src[0]}
      />
      <div className="plan-info-box">
        <p className="plan-name">{planName}</p>
        <p className="plan-price">{`$${price[index]}/${
          monthly ? "mo" : "yr"
        }`}</p>
      </div>
    </div>
  );
}
