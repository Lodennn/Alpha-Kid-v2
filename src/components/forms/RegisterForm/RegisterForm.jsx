import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Styles from "./RegisterForm.module.scss";
import SelectOptions from "../../../ui/SelectOptions";

function RegisterForm({ flip, setFlip }) {
  const { register, handleSubmit, reset, formState, getValues } = useForm();

  const { errors } = formState;

  function onSubmit(data) {
    console.log("data", data);
    reset();
  }

  function onError(errors) {
    console.log("errors", errors);
  }

  return (
    <form
      onSubmit={handleSubmit(onSubmit, onError)}
      className={`${Styles["form"]} ${
        flip ? "rotate-orgin " : "rotate-reverse "
      }`}
    >
      <h1 className={Styles["main-title"]}>Sign up</h1>

      <Input
        errors={errors}
        label="Username"
        id="username"
        type="text"
        variation="loginInput"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The user name is required`,
          },
        }}
      />

      <Input
        errors={errors}
        id="registerEmail"
        label="Email Address"
        type="email"
        variation="loginInput"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The Email address is required`,
          },
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: "invalid email address",
          },
        }}
      />

      <Input
        errors={errors}
        id="password"
        label="Password"
        type="password"
        variation="loginInput"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The password is required`,
          },
          pattern: {
            value:
              /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/,
            message: "Invalid Password Format",
          },
        }}
      />
      <Input
        errors={errors}
        id="passwordVerfication"
        label="Re-Password"
        type="password"
        variation="loginInput"
        register={register}
        validationOptions={{
          required: "Password does not match",
          validate: (value) =>
            value === getValues().password || "Password does not match",
        }}
      />

      <div>
        <SelectOptions
          type="registerType"
          name="user-type"
          options={[{ value: "Teacher" }, { value: "Parent" }]}
          register={register}
        />
      </div>

      <div className="flex justify-center gap-3 sm:gap-0 sm:justify-between items-center flex-wrap">
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
