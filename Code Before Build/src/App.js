import {
  BrowserRouter,
  Routes,
  Route,
  HashRouter as Router,
} from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { Step1Form } from "./pages/Step1Form";
import { Step2Plan } from "./pages/Step2Plan";
import { Step3AddOns } from "./pages/Step3AddOns";
import { Step4Summary } from "./pages/Step4Summary";
import { Step5ThankYou } from "./pages/Step5ThankYou";

export default function App() {
  return (
    <Router basename="/">
      <Routes>
        <Route path="" element={<HomePage />}>
          <Route index element={<Step1Form />}></Route>
          <Route path="step2" element={<Step2Plan />}></Route>
          <Route path="step3" element={<Step3AddOns />}></Route>
          <Route path="step4" element={<Step4Summary />}></Route>
          <Route path="step5" element={<Step5ThankYou />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}
