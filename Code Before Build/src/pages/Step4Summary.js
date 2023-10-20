import { Link } from "react-router-dom";
import { useStep2 } from "../context/Step2Context";
import { useStep3 } from "../context/Step3Context";
import { useStep1 } from "../context/Step1Context";
import { useEffect, useRef } from "react";

export function Step4Summary() {
  const { price, selected, monthly } = useStep2();
  const { name, email, phone } = useStep1();
  const { isSelected } = useStep3();
  const { setSteps } = useStep1();
  const pos = useRef(3);

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

  const period = monthly ? "Monthly" : "Yearly";
  const total1 = isSelected[0] ? 1 : 0;
  const total2 = isSelected[1] ? 2 : 0;
  const total3 = isSelected[2] ? 2 : 0;
  const totalAmount =
    price[selected.indexOf(true)] +
    (monthly ? total1 + total2 + total3 : (total1 + total2 + total3) * 10);
  const totalPlan = price[selected.indexOf(true)];

  return (
    <div className="step1-container">
      <p className="step1-title">Finishing up</p>
      <p className="step1-info">
        Double-check everything looks OK before confirming.
      </p>

      <div className="container-summary">
        <div className="info-summary-container">
          <div className="first-container">
            <div className="kind-plan-container">
              <div className="kind-plan">Arcade ({period})</div>
              <Link to="../step2">
                <div
                  className="change"
                  onClick={() => setSteps(() => [false, true, false, false])}
                >
                  Change
                </div>
              </Link>
            </div>
            <p className="cost">
              ${totalPlan ? totalPlan : 0}/{monthly ? "mo" : "yr"}
            </p>
          </div>

          <div className="line"></div>

          {isSelected[0] && (
            <div className="container-service">
              <p className="service">Online service</p>
              <p className="price-service">
                +${monthly ? total1 : total1 * 10}/{monthly ? "mo" : "yr"}
              </p>
            </div>
          )}

          {isSelected[1] && (
            <div className="container-service">
              <p className="service">Larger storage</p>
              <p className="price-service">
                +${monthly ? total2 : total2 * 10}/{monthly ? "mo" : "yr"}
              </p>
            </div>
          )}

          {isSelected[2] && (
            <div className="container-service">
              <p className="service">Custom profile</p>
              <p className="price-service">
                +${monthly ? total3 : total3 * 10}/{monthly ? "mo" : "yr"}
              </p>
            </div>
          )}
        </div>

        <div className="container-final-price">
          <p className="service">Total (per {monthly ? "month" : "year"})</p>
          <p className="price-months">
            +${totalAmount ? totalAmount : 0}/{monthly ? "mo" : "yr"}
          </p>
        </div>
      </div>

      <div className="btn-go-back-container">
        <Link to="../step3?step=3">
          <button className="btn-go-back" onClick={() => scrollToTop()}>
            Go Back
          </button>
        </Link>

        {name === "" && email === "" && phone === "" ? (
          <Link to="../">
            <button
              className="btn-next-ste1"
              onClick={() => alert("Restart the process, data lost.")}
            >
              Confirm
            </button>
          </Link>
        ) : (
          <Link to="../step5">
            <button className="btn-next-ste1" onClick={() => scrollToTop()}>
              Confirm
            </button>
          </Link>
        )}
      </div>
    </div>
  );
}
