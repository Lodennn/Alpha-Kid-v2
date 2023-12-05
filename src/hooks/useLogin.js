import { useMutation } from "@tanstack/react-query";
import { login as loginAPi } from "services/authApi";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

export function useLogin() {
  const navigate = useNavigate();

  const { mutate: login, isPending } = useMutation({
    mutationFn: loginAPi,
    onSuccess: (user) => {
      console.log(user);
      if (user?.user?.user_metadata.userType === "Parent") {
        navigate("/parent");
      } else if (user?.user?.user_metadata.userType === "Teacher") {
        navigate("/teacher");
      }
    },

    onError: (err) => {
      toast.error(err.message);
    },
  });

  return { login, isPending };
}
