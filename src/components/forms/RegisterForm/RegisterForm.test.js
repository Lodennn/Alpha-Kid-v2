import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import user from "@testing-library/user-event";
import RegisterForm from "./RegisterForm";

const renderComponent = () => {
  const formData = {
    username: "khaled",
    registerEmail: "khaled@g.com",
    password: "123456",
    passwordVerfication: "123456",
    userType: "Parent",
  };

  const fn = jest.fn();

  render(<RegisterForm flip={true} setFlip={fn} />);

  const usernameInput = screen.getByRole("textbox", { name: /username/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText("Password");
  const rePasswordInput = screen.getByLabelText("Re-Password");
  const userTypesSelectInput = screen.getByRole("combobox");
  const submitButton = screen.getByRole("button", { name: /sign up/i });

  return {
    formData,
    usernameInput,
    emailInput,
    passwordInput,
    rePasswordInput,
    userTypesSelectInput,
    submitButton,
  };
};

test("it renders all required elements in register form", () => {
  const {
    usernameInput,
    emailInput,
    passwordInput,
    rePasswordInput,
    userTypesSelectInput,
    submitButton,
  } = renderComponent();

  const requiredInputs = [
    usernameInput,
    emailInput,
    passwordInput,
    rePasswordInput,
    userTypesSelectInput,
    submitButton,
  ];

  for (let input of requiredInputs) {
    expect(input).toBeInTheDocument();
  }
});

test("the register form is valid which all inputs should be required", async () => {
  const {
    formData,
    usernameInput,
    emailInput,
    passwordInput,
    rePasswordInput,
    userTypesSelectInput,
    submitButton,
  } = renderComponent();

  await user.click(usernameInput);
  await user.keyboard(formData.username);

  await user.click(emailInput);
  await user.keyboard(formData.registerEmail);

  await user.click(passwordInput);
  await user.keyboard(formData.password);

  await user.click(rePasswordInput);
  await user.keyboard(formData.passwordVerfication);

  await user.selectOptions(userTypesSelectInput, formData.userType);

  await user.click(submitButton);

  const requiredErrorMessage = screen.queryAllByText(/required/i);

  expect(requiredErrorMessage).toHaveLength(0);
});

test("email input is accepting the right format", async () => {
  const { emailInput, submitButton } = renderComponent();

  await user.click(emailInput);

  await user.keyboard("qweeeeeeeeeeeeeeeeeeeeeeeeeeee@qwe.com");

  await user.click(submitButton);

  const invalidEmailErrorMessage = screen.queryByText(/invalid email address/i);

  expect(invalidEmailErrorMessage).not.toBeInTheDocument();
});

test("password input is accepting the right format", async () => {
  const { passwordInput, submitButton } = renderComponent();

  const passwordFormats = { valid: "P@ssw0rd", invalid: "123" };

  await user.click(passwordInput);

  await user.keyboard(passwordFormats.valid);

  await user.click(submitButton);

  const invalidPasswordErrorMessage = screen.queryByText(/invalid Password/i);

  expect(invalidPasswordErrorMessage).not.toBeInTheDocument();
});

test("re-password input is valid", async () => {
  const { passwordInput, rePasswordInput, submitButton } = renderComponent();

  const passwordValue = "P@ssw0rd";

  await user.click(passwordInput);
  await user.keyboard(passwordValue);

  await user.click(rePasswordInput);
  await user.keyboard(passwordValue);

  await user.click(submitButton);

  const invalidRePasswordErrorMessage = screen.queryByText(/does not match/i);

  expect(invalidRePasswordErrorMessage).not.toBeInTheDocument();
});
