import { Outlet } from "react-router-dom";
import { Step } from "../components/Step";

export function HomePage() {
  return (
    <div className="side-bar-container">
      <div
        className="sidebar"
        // style={{
        //   backgroundImage:
        //     window.innerWidth > 700
        //       ? "url('/images/bg-sidebar-desktop.png')"
        //       : "url('/images/bg-sidebar-mobile.png')",
        //   backgroundRepeat: "no-repeat",
        //   backgroundSize: "cover",
        // }}
      >
        <img
          className="img-side"
          src={
            window.innerWidth > 700
              ? process.env.PUBLIC_URL + "/images/bg-sidebar-desktop.png"
              : process.env.PUBLIC_URL + "/images/bg-sidebar-mobile.png"
          }
          alt=""
        />
        {["YOUR INFO", "SELECT PLAN", "ADD-ONS", "SUMMARY"].map((el, i) => (
          <Step key={i} index={i} nameStep={"STEP " + (i + 1)} task={el} />
        ))}
      </div>

      <Outlet />
    </div>
  );
}
