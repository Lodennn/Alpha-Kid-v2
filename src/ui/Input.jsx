import ErrorMessage from "./ErrorMessage";

function Input({
  className,
  disabled,
  id,
  label,
  type,
  variation,
  register,
  errors,
  validationOptions,
}) {
  const styles = {
    login: ` ${className} ${
      errors[id || ""]
        ? "bg-red-200 border-1 border-solid border-red-500 focus:ring-offset-1 focus:ring-red-400 "
        : ""
    } border-solid border-2  text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2`,
  };

  return (
    <div className="flex flex-col gap-1 sm:gap-1 md:gap-1">
      <label
        className="text-2xl 2xl:mt-3 mb-0 mt-3 md:mt-1 sm:mt-1 block sm:mb-1 md:mb-1 lg:mb-3"
        htmlFor={id}
      >
        {label}
      </label>

      <input
        disabled={disabled}
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
