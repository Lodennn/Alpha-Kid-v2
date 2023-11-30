import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import RegisterForm from "./RegisterForm";

test("it renders all required elements in register form", () => {
  render(<RegisterForm />);

  const usernameInput = screen.getByRole("textbox", { name: /username/i });
  const emailInput = screen.getByRole("textbox", { name: /email/i });
  const passwordInput = screen.getByLabelText("Password");
  const rePasswordInput = screen.getByLabelText(/re-password/i);
  const userTypeInput = screen.getByRole("combobox");
  const userTypes = within(userTypeInput).getAllByRole("option");

  const requiredElements = [
    usernameInput,
    emailInput,
    passwordInput,
    rePasswordInput,
    userTypeInput,
  ];

  for (let element of requiredElements) {
    expect(element).toBeInTheDocument();
  }

  expect(userTypes).toHaveLength(2);
});
