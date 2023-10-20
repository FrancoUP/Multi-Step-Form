import { useNavigate } from "react-router-dom";
import { useStep1 } from "../context/Step1Context";

export function Form() {
  const { name, email, phone, dispatch } = useStep1();

  const navigate = useNavigate();

  function handleSetName(e) {
    dispatch({ type: "setName", payload: e.target.value });
  }

  function handleSetEmail(e) {
    dispatch({ type: "setEmail", payload: e.target.value });
  }

  function handleSetPhone(e) {
    dispatch({ type: "setPhone", payload: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();

    if (name !== "" && email !== "" && phone !== "") {
      navigate("/step2");
    }
  }

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <form
      className="form"
      onSubmit={(e) => {
        handleSubmit(e);
        scrollToTop();
      }}
    >
      <label id="label-name" htmlFor="name">
        Name
      </label>
      <input
        id="name"
        type="text"
        name="name"
        placeholder="e.g. Name"
        value={name}
        onChange={(e) => handleSetName(e)}
        required
      ></input>
      <label id="label-email" htmlFor="email">
        Email Address
      </label>
      <input
        id="email"
        type="email"
        name="email"
        placeholder="e.g. Email"
        value={email}
        onChange={(e) => handleSetEmail(e)}
        required
      ></input>
      <label id="label-phoneNumber" htmlFor="phoneNumber">
        Phone Number
      </label>
      <input
        id="phoneNumber"
        type="tel"
        name="phoneNumber"
        placeholder="e.g. Phone Number"
        value={phone}
        onChange={(e) => handleSetPhone(e)}
        required
      ></input>
      <div className="btn-box">
        <button className="btn-next-ste1">Next Step</button>
      </div>
    </form>
  );
}
