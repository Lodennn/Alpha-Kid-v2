import styles from "./PagesSpinner.module.scss";

function Spinner() {
  return (
    <div className={styles["container"]}>
      <span className={styles["loader"]}></span>
    </div>
  );
}

export default Spinner;
