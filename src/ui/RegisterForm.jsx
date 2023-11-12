import Button from "./Button";
import Input from "./Input";
import Label from "./Label";
import Styles from "./RegisterForm.module.scss";

function RegisterForm({ flip, setFlip }) {
  return (
    <form
      className={`${Styles["form"]} ${
        flip ? "rotate-orgin " : "rotate-reverse "
      }`}
    >
      <h1 className={Styles["main-title"]}>Sign up</h1>
      <div>
        <Label>Username</Label>
        <Input type="text" variation="loginInput" />
      </div>
      <div>
        <Label>Email Address</Label>
        <Input type="email" variation="loginInput" />
      </div>
      <div>
        <Label>Password</Label>
        <Input type="password" variation="loginInput" />
      </div>
      <div>
        <Label>Re-Password</Label>
        <Input type="password" variation="loginInput" />
      </div>
      <div>
        <Label>User-Type</Label>
        <select className="w-full p-2 text-2xl  border-solid border-2  focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200  ">
          <option>Parent</option>
          <option>Teacher</option>
        </select>
      </div>

      <div className="flex justify-between items-center">
        <Button type="login">Sign Up</Button>
        <Button
          type="rotate"
          onClick={(e) => {
            e.preventDefault();
            setFlip(() => false);
          }}
        >
          Already have an account ?
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
