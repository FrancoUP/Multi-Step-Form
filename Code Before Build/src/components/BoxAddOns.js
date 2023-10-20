import { useStep3 } from "../context/Step3Context";

export function BoxAddOns({ textUp, index, textDown, priceAddOns }) {
  const { isSelected, setIsSelected } = useStep3();

  return (
    <div
      className="container-addOns"
      style={
        isSelected[index]
          ? { backgroundColor: "#F8F9FF", borderColor: "#483EFF" }
          : {}
      }
      onClick={() =>
        setIsSelected(() => {
          const newArr = [...isSelected];
          newArr[index] = !isSelected[index];
          return newArr;
        })
      }
    >
      <div className="leftAddOns">
        <div
          className="check-box"
          style={
            isSelected[index]
              ? { backgroundColor: "#483EFF", borderColor: "#483EFF" }
              : {}
          }
        >
          &#10004;
        </div>
        <div className="container-infoPlannOns">
          <p className="text-up">{textUp}</p>
          <p className="text-down">{textDown}</p>
        </div>
      </div>

      <p className="price-AddOns">{priceAddOns}</p>
    </div>
  );
}
