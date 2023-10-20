import { Link } from "react-router-dom";
import { BoxAddOns } from "../components/BoxAddOns";
import { useStep1 } from "../context/Step1Context";
import { useEffect, useRef } from "react";

export function Step3AddOns() {
  const { setSteps } = useStep1();
  const pos = useRef(2);

  useEffect(function () {
    const newArr = [false, false, false, false];
    newArr[pos.current] = true;
    setSteps(() => newArr);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="step1-container">
      <p className="step1-title">Pick add-ons</p>
      <p className="step1-info">Add-ons help enhance your gaming experience.</p>

      <div className="containe-boxAddOns">
        <BoxAddOns
          key={0}
          index={0}
          textUp="Online service"
          textDown="Access to multiplayer games"
          priceAddOns="+$1/mo"
        />
        <BoxAddOns
          key={1}
          index={1}
          textUp="Larger storage"
          textDown="Extra 1TB of cloud save"
          priceAddOns="+$2/mo"
        />
        <BoxAddOns
          key={2}
          index={2}
          textUp="Customizable profile"
          textDown="Custom theme on your profile"
          priceAddOns="+$2/mo"
        />
      </div>

      <div className="btn-go-back-container">
        <Link to="../step2">
          <button className="btn-go-back" onClick={() => scrollToTop()}>
            Go Back
          </button>
        </Link>

        <Link to="../step4">
          <button className="btn-next-ste1" onClick={() => scrollToTop()}>
            Next Step
          </button>
        </Link>
      </div>
    </div>
  );
}
