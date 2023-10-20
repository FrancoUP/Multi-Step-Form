import { Form } from "../components/Form";
import { useEffect, useRef } from "react";
import { useStep1 } from "../context/Step1Context";

export function Step1Form() {
  const { setSteps } = useStep1();
  const pos = useRef(0);

  useEffect(function () {
    const newArr = [false, false, false, false];
    newArr[pos.current] = true;
    setSteps(() => newArr);
  }, []);

  return (
    <div className="step1-container">
      <p className="step1-title">Personal info</p>
      <p className="step1-info">
        Please provide your name, email address, and phone number.
      </p>
      <Form />
    </div>
  );
}
