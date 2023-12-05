import Logo from "components/Logo/Logo";
import styles from "./AuthPage.module.scss";
import AuthPagesFormsWrapper from "components/AuthPagesFormsWrapper/AuthPagesFormsWrapper";

function Login() {
  return (
    <div className={styles["login-page"]}>
      <Logo />
      <AuthPagesFormsWrapper />
    </div>
  );
}

export default Login;
