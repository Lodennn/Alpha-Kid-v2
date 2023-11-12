function Button({ children, type }) {
  const styles = {
    login: "px-6 py-2 text-3xl text-white bg-sky-500",
  };

  return <button className={styles[type]}>{children}</button>;
}

export default Button;
