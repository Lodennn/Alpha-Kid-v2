function Button({ children, type, onClick }) {
  const styles = {
    login:
      "md:px-6 md:py-2 px-2 py-1   text-xl sm:text-2xl md:text-3xl text-white bg-sky-500",

    rotate: "text-xl text-sky-500",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
