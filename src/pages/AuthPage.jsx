import Logo from "../components/Logo/Logo";
import Styles from "./AuthPage.module.scss";
import AuthPagesFormsWrapper from "../components/AuthPagesFormsWrapper/AuthPagesFormsWrapper";

function Login() {
  return (
    <div className={Styles["login-page"]}>
      <Logo />
      <AuthPagesFormsWrapper />
    </div>
  );
}

export default Login;
