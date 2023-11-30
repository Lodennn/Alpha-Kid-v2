import Button from "../../../ui/Button";
import Styles from "./LoginForm.module.scss";

function LoginForm({ flip, setFlip }) {
  return (
    <form
      aria-label="form"
      className={`${Styles["form"]} ${
        flip ? "rotate-reverse " : "rotate-orgin rotate-reverse-animation"
      }`}
    >
      <h1 className={Styles["main-title"]}>Login</h1>
      <label htmlFor="email">email</label>
      <input id="email" type="email" />
      <label htmlFor="password">password</label>
      <input id="password" type="password" />

      <div className="flex md:justify-between gap-4 justify-center sm:justify-center items-center flex-wrap">
        <Button type="submit" variation="login">
          Login
        </Button>
        <Button variation="rotate" onClick={() => setFlip(() => true)}>
          Create a new account
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
