import { useForm } from "react-hook-form";
import Button from "../../../ui/Button";
import Input from "../../../ui/Input";
import Styles from "./RegisterForm.module.scss";
import SelectOptions from "../../../ui/SelectOptions";
import toast from "react-hot-toast";
import {
  userTypes, // ⚠️
  emailPattern,
  userNameMaxLength,
  passwordPattern,
} from "../../../helpers/userTypes";

function RegisterForm({ flip, setFlip }) {
  const { register, handleSubmit, reset, formState, getValues, watch } =
    useForm({
      mode: "onChange",
    });

  const { errors } = formState;

  const formData = watch();

  function onSubmit(data) {
    console.log("data", data);
    reset();
    setFlip(false);
    toast.success(" Your Email is Successfully created");
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
        className={
          formData.username
            ? "bg-green-100 border-green-200 focus:ring-green-400"
            : ""
        }
        errors={errors}
        label="Username"
        id="username" // ⚠️ id should be name
        type="text"
        variation="loginInput" // ⚠️ the loginInput name is too specific for variation
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The user name is required`,
          },
          minLength: {
            value: userNameMaxLength,
            message: "The user name must be at least 6 characters",
          },
        }}
      />

      <Input
        className={
          formData.registerEmail
            ? "bg-green-100 border-green-200 focus:ring-green-400"
            : ""
        }
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
            value: emailPattern,
            message: "invalid email address",
          },
        }}
      />

      <Input
        className={
          formData.password
            ? "bg-green-100 border-green-200 focus:ring-green-400"
            : ""
        }
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
            value: passwordPattern,
            message: "Invalid Password Format", // ⚠️ it should be invalid not Invalid
          },
        }}
      />
      <Input
        className={
          formData.password !== "" &&
          formData.password === formData.passwordVerfication
            ? "bg-green-100 border-green-200 focus:ring-green-400"
            : ""
        }
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
          errors={errors}
          defaultValue="Please Select User Type"
          type="registerType"
          name="userType"
          options={userTypes}
          register={register}
          validationOptions={{
            required: {
              value: true,
              message: "Please Select User Type",
            },
            validate: (value) =>
              value !== "Please Select User Type" || // ⚠️
              "Please Select a valid Type",
          }}
        />
      </div>

      <div className="flex justify-center gap-3 m-4 sm:m-3 md:m-2 sm:gap-0 sm:justify-between items-center flex-wrap">
        <Button type="submit" variation="login">
          Sign Up
        </Button>
        <Button variation="rotate" onClick={() => setFlip(() => false)}>
          Already have an account ?
        </Button>
      </div>
    </form>
  );
}

export default RegisterForm;
