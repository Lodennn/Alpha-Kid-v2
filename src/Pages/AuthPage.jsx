import Logo from "../ui/Logo";
import Styles from "./Login.module.scss";
import FormsWrapper from "../ui/FormsWrapper";

function Login() {
  return (
    <div className={Styles["login-page"]}>
      <Logo />
      <FormsWrapper />
    </div>
  );
}

export default Login;
