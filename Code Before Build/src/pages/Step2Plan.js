import { BoxPlan } from "../components/BoxPlan";
import { Link } from "react-router-dom";
import { useStep2 } from "../context/Step2Context";
import { useStep1 } from "../context/Step1Context";
import { useRef } from "react";
import { useEffect } from "react";

export function Step2Plan() {
  const { monthly, selected, price, dispatch } = useStep2();
  const { setSteps } = useStep1();
  const level = useRef(["Arcade", "Advanced", "Pro"]);
  const pos = useRef(1);
  const img = useRef([
    [
      process.env.PUBLIC_URL + "/images/icon-arcade.png",
      process.env.PUBLIC_URL + "/images/icon-arcade-blu.png",
    ],
    [
      process.env.PUBLIC_URL + "/images/icon-advanced.png",
      process.env.PUBLIC_URL + "/images/icon-advanced-blu.png",
    ],
    [
      process.env.PUBLIC_URL + "/images/icon-pro.png",
      process.env.PUBLIC_URL + "/images/icon-pro-blu.png",
    ],
  ]);

  useEffect(function () {
    const newArr = [false, false, false, false];
    newArr[pos.current] = true;
    setSteps(() => newArr);
  }, []);

  function handleMontly() {
    dispatch({ type: "setMonthly" });
    const prices = !monthly
      ? [...price].map((el) => el / 10)
      : [...price].map((el) => el * 10);
    dispatch({ type: "setPrice", payload: prices });
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div className="step1-container">
      <p className="step1-title">Select your plan</p>
      <p className="step1-info">
        You have the option of monthly or yearly billing.
      </p>

      <div className="containe-boxPlan">
        {level.current.map((el, i) => (
          <BoxPlan key={i} index={i} src={img.current[i]} planName={el} />
        ))}
      </div>

      <div className="switcher-bar">
        <p className="monthly">Monthly</p>
        <img
          onClick={() => handleMontly()}
          className="switcher-img"
          alt=""
          src={
            monthly
              ? process.env.PUBLIC_URL + "/images/switcher1.png"
              : process.env.PUBLIC_URL + "/images/switcher2.png"
          }
        />
        <p className="annual">Yearly</p>
      </div>

      <div className="btn-go-back-container">
        <Link to="../">
          <button className="btn-go-back" onClick={() => scrollToTop()}>
            Go Back
          </button>
        </Link>

        {selected.every((el) => el === false) ? (
          <button
            className="btn-next-ste1"
            onClick={() => alert("Select your plan first !!!")}
          >
            Next Step
          </button>
        ) : (
          <Link to="../step3">
            <button className="btn-next-ste1" onClick={() => scrollToTop()}>
              Next Step
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
