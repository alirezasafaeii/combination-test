import { useNavigate } from "react-router-dom";
import styles from "./App.module.css";

function App() {
  let navigate = useNavigate();

  const handleClick = () => {
    navigate("/home");
  };

  return (
    <div className={styles.appContainer}>
      <button className = {styles.customButton} onClick={handleClick}>Go to Home</button>
    </div>
  );
}

export default App;
