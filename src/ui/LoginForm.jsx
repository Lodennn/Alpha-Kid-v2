import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Styles from "./LoginForm.module.scss";

function LoginForm({ flip, setFlip }) {
  return (
    // <form
    //   className={` ${
    //     flip ? " rotate-orgin" : "rotate-reverse"
    //   } absolute bg-white rounded-md transition-all rotate-y-180 min-h-[32vh] min-w-[32vw] flex flex-col gap-10 shadow-md  p-12 self-center justify-self-center`}
    // >
    <form
      className={`${Styles["form"]} ${
        flip ? "rotate-reverse " : "rotate-orgin rotate-reverse-animation"
      }`}
    >
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
