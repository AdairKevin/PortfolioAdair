import styles from "./App.module.css";
import Navbar from "./components/navbar/navbar";
import About from "./pages/about/about";
import Home from "./pages/home/home";
import Proyectos from "./pages/proyectos/proyectos";
import Desing from "./pages/desing/desing";
import Forfun from "./pages/forfun/forfun";

function App() {
  return (
    <div className={styles.App}>
      <Navbar />
      <Home />
      <Proyectos />
      <Desing />
      <Forfun />
      <About />
    </div>
  );
}

export default App;
