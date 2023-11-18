import "@testing-library/jest-dom";

import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import Login from "./Login";

test("if login page is active", () => {
  render(<Login />);

  const loginForm = screen.getByRole("form");

  const loginTitle = within(loginForm).getByRole("heading", {
    name: /login/i,
  });

  expect(loginTitle).toBeInTheDocument();
});

test("it display signup form after clicking on create new account", async () => {
  render(<Login />);

  const createNewAccountButton = screen.getByRole("button", {
    name: /new account/i,
  });

  const loginForm = screen.getByRole("form");
  const signupTitle = screen.getByRole("heading", { name: /sign up/i });

  await user.click(createNewAccountButton);

  expect(createNewAccountButton).toBeInTheDocument();
  expect(loginForm).toHaveClass("rotate-reverse");
  expect(signupTitle).toBeInTheDocument();
});
