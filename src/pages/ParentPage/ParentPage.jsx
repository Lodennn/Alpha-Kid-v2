import { useState } from "react";
import { useUser } from "hooks/useUser";
import { useCreateChild } from "features/children/useCreateChild";
import { useLogout } from "hooks/useLogout";
import PagesSpinner from "ui/PagesSpinner/PagesSpinner";

function ParentPage() {
  const { user } = useUser();

  const { createChild, isPending: isCreating } = useCreateChild();

  const { logout, isPending } = useLogout();
  const [name, setName] = useState("");
  const [gender, setGender] = useState("");

  if (isPending) return <PagesSpinner />;

  function handleSubmit(e) {
    e.preventDefault();

    if (!name && !gender && !user.id) return;

    console.log(user.id, gender, name);

    createChild(user.id, name);
  }

  return (
    <>
      <div className="text-3xl">Hello Parent</div>
      <button disabled={isPending} onClick={logout}>
        Logout
      </button>
      <form onSubmit={handleSubmit}>
        <label htmlFor="childName">Name</label>
        <input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id="childNane"
          type="text"
        />
        <label htmlFor="male">Male</label>
        <input
          value={gender}
          onClick={() => setGender("male")}
          id="male"
          name="gender"
          type="radio"
        />
        <label htmlFor="female">female</label>
        <input
          value={gender}
          onClick={() => setGender("female")}
          id="female"
          name="gender"
          type="radio"
        />
        <button type="submit">submit</button>
      </form>
    </>
  );
}

export default ParentPage;
