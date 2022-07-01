import styles from "./Header.module.css";

const Header = () => {
  return (
    <>
      <header className={styles.centered}>
        <p>
          <h1>HEADER</h1>
          <p>Welcome to the website!</p>
          <hr />
        </p>
      </header>
    </>
  );
};

export default Header;
