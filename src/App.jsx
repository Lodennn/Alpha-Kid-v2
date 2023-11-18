import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/AuthPage";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Toaster
        toastOptions={{
          style: {
            border: "1px solid white",
            padding: "16px",
          },
          success: {
            style: {
              background: "white",
              fontSize: "1.5rem",
            },
            duration: 4000,
          },
        }}
      />
    </>
  );
}

export default App;
