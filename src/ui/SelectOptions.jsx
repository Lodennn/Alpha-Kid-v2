import ErrorMessage from "./ErrorMessage";

function SelectOptions({
  disabled,
  options,
  type,
  register,
  name,
  defaultValue,
  validationOptions,
  errors,
}) {
  const styles = {
    registerType: ` ${
      errors.userType
        ? "bg-red-200 border-1 border-solid border-red-500 focus:ring-offset-1 focus:ring-red-600 "
        : ""
    } "  w-full mb-3 mt-3  p-2 rounded-sm text-2xl border-solid border-2  focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 border-sky-200  `,
  };

  return (
    <div>
      <select {...register(name, validationOptions)} className={styles[type]}>
        <option>{defaultValue}</option>
        {options.map((option) => (
          <option disabled={disabled} key={option.id}>
            {option.value}
          </option>
        ))}
      </select>
      {<ErrorMessage>{errors.userType?.message}</ErrorMessage>}
    </div>
  );
}

export default SelectOptions;
