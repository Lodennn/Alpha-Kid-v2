function Input({ type, variation }) {
  const styles = {
    loginInput:
      "border-solid border-2 text-2xl focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2  border-sky-200 w-full p-2",
  };

  return <input className={styles[variation]} type={type} />;
}

export default Input;
