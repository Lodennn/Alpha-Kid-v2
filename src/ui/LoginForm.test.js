import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";

test("it renders a login form successfully", () => {
  render(<LoginForm />);

  const loginForm = screen.getByRole("form");

  const emailInput = within(loginForm).getByRole("textbox", {
    name: /email/i,
  });

  const passwordInput = within(loginForm).getByLabelText(/password/i);

  const loginSubmitButton = within(loginForm).getByRole("button", {
    name: /login/i,
  });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(loginSubmitButton).toBeInTheDocument();
});
