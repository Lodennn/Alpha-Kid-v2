import { useState } from "react";
import Button from "../../../ui/Button";
import Styles from "./LoginForm.module.scss";
import { useLogin } from "../../../hooks/useLogin";
import SpinnerMini from "../../../ui/SpinnerMini/SpinnerMini";

function LoginForm({ flip, setFlip }) {
  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const { login, isPending } = useLogin();

  function handleSubmit(e) {
    e.preventDefault();

    login(
      { email, password },
      {
        onSettled: () => {
          setEmail("");

          setPassword("");
        },
      }
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className={`${Styles["form"]} ${
        flip ? "rotate-reverse " : "rotate-orgin rotate-reverse-animation"
      }`}
    >
      <h1 className={Styles["main-title"]}>Login</h1>

      <div>
        <label className="text-2xl 2xl:mt-3 mb-0 mt-3 md:mt-1 sm:mt-1 block sm:mb-1 md:mb-1 lg:mb-3 ">
          Email Address
        </label>
        <input
          disabled={isPending}
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className=" border-solid border-2  text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2"
          type="email"
          id="emailaddress"
        />
      </div>
      <div>
        <label className="text-2xl 2xl:mt-3 mb-0 mt-3 md:mt-1 sm:mt-1 block sm:mb-1 md:mb-1 lg:mb-3 ">
          Password
        </label>
        <input
          disabled={isPending}
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className=" border-solid border-2  text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2"
          type="password"
          id="loginPassword"
        />
      </div>

      <div className="flex md:justify-between gap-4 justify-center sm:justify-center items-center flex-wrap">
        <Button type="submit" variation="login">
          {isPending ? <SpinnerMini /> : "Login"}
        </Button>
        <Button variation="rotate" onClick={() => setFlip(() => true)}>
          Create a new account
        </Button>
      </div>
    </form>
  );
}

export default LoginForm;
