import ErrorMessage from "./ErrorMessage";

function Input({
  className,
  id,
  label,
  type,
  variation,
  register,
  errors,
  validationOptions,
}) {
  const styles = {
    loginInput: ` ${className} ${
      errors[id || ""] ? "bg-red-200 border-red-200 focus:ring-red-400 " : ""
    } border-solid border-2  text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2`,
  };

  return (
    <div className="flex flex-col gap-1 sm:gap-1 md:gap-1">
      <label
        className="text-2xl 2xl:mt-3 mb-0 mt-3 md:mt-1 sm:mt-1 block sm:mb-1 md:mb-1 lg:mb-3"
        htmlFor={id} // ⚠️ not type it should be id
      >
        {label}
      </label>

      <input
        {...register(id, validationOptions)}
        type={type}
        id={id}
        className={styles[variation]}
      />

      {errors[id || ""]?.message && (
        <ErrorMessage>{errors[id || ""]?.message}</ErrorMessage>
      )}
    </div>
  );
}

export default Input;
