import { QueryClientProvider } from "@tanstack/react-query";
import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";

export const WrapperWithProviders = (children) => {
  <QueryClientProvider>
    <BrowserRouter>{children}</BrowserRouter>
  </QueryClientProvider>;
};

export const renderWithProviders = (
  ui,
  options = { config: {}, preState: {} }
) => {
  return render(ui, { wrapper: WrapperWithProviders, ...options });
};
