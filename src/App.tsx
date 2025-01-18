import { useRoutes } from "react-router-dom";
import "./App.css";
import Navbar from "./components/navbar/navbar";
import routes from "./routes/routes";
import { BrowserRouter as Router } from "react-router-dom";

function AppRoutes() {
  const element = useRoutes(routes); // Renderiza las rutas
  return element;
}

function App() {
  return (
    <Router>
      <Navbar />
      <AppRoutes />
    </Router>
  );
}

export default App;
