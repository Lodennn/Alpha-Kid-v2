import { useState } from "react";
import Styles from "./AuthPagesFormsWrapper.module.scss";
import LoginForm from "components/forms/LoginForm/LoginForm";
import RegisterForm from "components/forms/RegisterForm/RegisterForm";

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
