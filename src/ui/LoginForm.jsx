import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Styles from "./LoginForm.module.scss";

function LoginForm() {
  return (
    <form className="bg-white w-[45rem] flex flex-col gap-8  p-12 self-center justify-self-center">
      <h1 className={Styles["main-title"]}>Login</h1>
      <div>
        <Label>Email Address</Label>
        <Input type="email" variation="loginInput" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" variation="loginInput" />
      </div>

      <div className="flex justify-between items-center">
        <Button type="login">Login</Button>
        <Button> Create new account ? </Button>
      </div>
    </form>
  );
}

export default LoginForm;
