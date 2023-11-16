import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Styles from "./LoginForm.module.scss";

function LoginForm({ flip, setFlip }) {
  return (
    <form
      className={`${Styles["form"]} ${
        flip ? "rotate-reverse " : "rotate-orgin rotate-reverse-animation"
      }`}
    >
      <h1 className={Styles["main-title"]}>Login</h1>
      {/* <Input
        label="Enail Address"
        id="loginEmail"
        type="email"
        variation="loginInput"
      />
      <Input
        label="Password"
        id="passowrd"
        type="password"
        variation="loginInput"
      /> */}
      <label>email</label>
      <input type=" text" />
      <label>password</label>
      <input type=" text" />

      <div className="flex md:justify-between gap-4 justify-center sm:justify-center items-center flex-wrap">
        <Button type="login">Login</Button>
        <Button
          type="rotate"
          onClick={(e) => {
            e.preventDefault();
            setFlip(() => true);
          }}
        >
          Create a new account
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
