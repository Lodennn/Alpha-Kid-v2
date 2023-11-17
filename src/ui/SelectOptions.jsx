function SelectOptions({ options, type, register, name }) {
  const styles = {
    registerType:
      "w-full  p-2 rounded-sm text-2xl border-solid border-2  focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 border-sky-200  ",
  };

  return (
    <select {...register(name)} className={styles[type]}>
      {options.map((option) => (
        <option key={option.value}>{option.value}</option>
      ))}
    </select>
  );
}

export default SelectOptions;
