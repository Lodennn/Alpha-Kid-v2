function Button({ children, type, onClick }) {
  const styles = {
    login: "px-6 py-2 px-6 text-3xl text-white bg-sky-500",

    rotate: "text-xl text-sky-500",
  };

  return (
    <button onClick={onClick} className={styles[type]}>
      {children}
    </button>
  );
}

export default Button;
