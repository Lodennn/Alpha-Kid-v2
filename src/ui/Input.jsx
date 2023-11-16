import Error from "./Error";

function Input({
  id,
  label,
  type,
  variation,
  register,
  errors,
  validationOptions,
}) {
  const styles = {
    loginInput:
      "border-solid border-2 text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2 invalid:bg-red-200 invalid:border-red-200 invalid:focus:ring-red-400 ",
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="text-3xl block mb-3 " htmlFor={type}>
        {label}
      </label>

      <input
        {...register(id, validationOptions)}
        type={type}
        id={id}
        className={styles[variation]}
      />

      {errors[id ? id : ""]?.message && (
        <Error>{errors[id ? id : ""]?.message}</Error>
      )}
    </div>
  );
}

export default Input;
