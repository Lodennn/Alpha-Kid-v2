import { useMutation } from "@tanstack/react-query";
import { signup as signupApi } from "services/authApi";
import toast from "react-hot-toast";

export function useSignup() {
  const {
    mutate: signup,
    isPending,
    error,
  } = useMutation({
    mutationFn: signupApi,
    onSuccess: () => {
      toast.success("Account successfully created ");
    },
    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { signup, isPending, error };
}
