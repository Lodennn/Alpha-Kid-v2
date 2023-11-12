import LoginForm from "../ui/LoginForm";
import Logo from "../ui/Logo";
import Styles from "./Login.module.scss";

function Login() {
  return (
    <div className={Styles["login-page"]}>
      <Logo />
      <LoginForm />
    </div>
  );
}

export default Login;
