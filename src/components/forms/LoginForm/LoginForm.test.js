import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/react";
import user from "@testing-library/user-event";
import LoginForm from "./LoginForm";
import { renderWithProviders } from "Services/Testing";

test("it renders a login form successfully", () => {
  let flip = false;
  let setFlip = jest.fn();

  renderWithProviders(<LoginForm flip={flip} setFlip={setFlip} />);

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

test("if *create a new account* button is working correctly", async () => {
  let setFlip = jest.fn();

  renderWithProviders(<LoginForm flip={false} setFlip={setFlip} />);

  const loginForm = screen.getByRole("form");

  const createNewAccountButton = within(loginForm).getByRole("button", {
    name: /create/i,
  });

  await user.click(createNewAccountButton);

  expect(setFlip.mock.calls[0][0]()).toEqual(true);
});
