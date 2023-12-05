import { useForm } from "react-hook-form";
import Button from "ui/Button";
import Input from "ui/Input";
import Styles from "./RegisterForm.module.scss";
import SelectOptions from "ui/SelectOptions";
import { emailPattern, passwordPattern, checkUserType } from "utils/userTypes";
import { userNameMaxLength, userTypes } from "constants/user";
import { useSignup } from "hooks/useSignup";
import Spinner from "ui/Spinner/Spinner";

function RegisterForm({ flip, setFlip }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
    getValues,
    watch,
  } = useForm({
    mode: "onChange",
  });

  // const { errors } = formState; // ⚠️ not the proper way to destruct errors

  const formData = watch();

  console.log(formData);

  console.log(errors);

  const { signup, isPending } = useSignup();

  function onSubmit({ userName, email, password, userType }) {
    signup(
      { userName, userType, email, password },
      {
        onSuccess: () => setFlip(false),

        onSettled: () => reset(),
      }
    );
  }

  if (isPending) return <Spinner />;

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className={`${Styles["form"]} ${
        flip ? "rotate-orgin " : "rotate-reverse "
      }`}
    >
      <h1 className={Styles["main-title"]}>Sign up</h1>

      <Input
        className={
          formData?.userName?.length >= userNameMaxLength
            ? "bg-green-100 border-solid border-2 border-green-500 focus:ring-offset-1 focus:ring-green-500"
            : ""
        }
        disabled={isPending}
        errors={errors}
        label="Username"
        id="userName" // ⚠️ id should be name
        type="text"
        variation="login" // ⚠️ the loginInput name is too specific for variation
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
          formData?.email && !errors?.email
            ? "bg-green-100 border-solid border-2 border-green-500 focus:ring-offset-1 focus:ring-green-500"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="email"
        label="Email Address"
        type="email"
        variation="login"
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
          formData?.password && !errors?.password
            ? "bg-green-100 border-solid border-2 border-green-500 focus:ring-offset-1 focus:ring-green-500"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="password"
        label="Password"
        type="password"
        variation="login"
        register={register}
        validationOptions={{
          required: {
            value: true,
            message: `The password is required`,
          },
          pattern: {
            value: passwordPattern,
            message: "invalid Password Format", // ⚠️ it should be invalid not Invalid
          },
        }}
      />
      <Input
        className={
          formData?.password &&
          formData?.password === formData?.passwordVerfication
            ? "bg-green-100 border-solid border-2 border-green-500 focus:ring-offset-1 focus:ring-green-500"
            : ""
        }
        disabled={isPending}
        errors={errors}
        id="passwordVerfication"
        label="Re-Password"
        type="password"
        variation="login"
        register={register}
        validationOptions={{
          required: "Password does not match",
          validate: (value) =>
            value === getValues().password || "Password does not match",
        }}
      />

      <div>
        <SelectOptions
          disabled={isPending}
          id="userType"
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
            validate: (value) => {
              if (!checkUserType(value)) return "Please Select a valid Type"; // ⚠️;
            },
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
