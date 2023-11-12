import { useState } from "react";
import LoginForm from "./LoginForm";
import RegisterForm from "./RegisterForm";
import Styles from "./FormsWrapper.module.scss";

function FormsWrapper() {
  const [flip, setFlip] = useState(false);

  return (
    <div className={Styles["froms-wrapper"]}>
      <LoginForm flip={flip} setFlip={setFlip} />
      <RegisterForm flip={flip} setFlip={setFlip} />
    </div>
  );
}

export default FormsWrapper;
