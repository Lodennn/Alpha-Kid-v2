import { useLogout } from "hooks/useLogout";
import Spinner from "ui/Spinner/Spinner";

function TeacherPage() {
  const { logout, isPending } = useLogout();

  if (isPending) return <Spinner />;

  return (
    <>
      <div className="text-3xl">Hello Teacher</div>
      <button disabled={isPending} onClick={logout}>
        Logout
      </button>
    </>
  );
}

export default TeacherPage;
