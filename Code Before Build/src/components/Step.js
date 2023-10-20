import { useStep1 } from "../context/Step1Context";

export function Step({ index, nameStep, task }) {
  const { steps } = useStep1();

  return (
    <div className="step-container">
      <div
        className="number-step"
        style={
          steps[index]
            ? {
                backgroundColor: "#BEE2FD",
                borderColor: "#BEE2FD",
                color: "#022959",
              }
            : {}
        }
      >
        {index + 1}
      </div>
      {window.innerWidth > 700 && (
        <div className="box-info-step">
          <div className="step">{nameStep}</div>
          <div className="content-step">{task}</div>
        </div>
      )}
    </div>
  );
}
