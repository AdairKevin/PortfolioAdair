import "./navbar.css";

function Navbar() {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="35"
          height="35"
          fill="currentColor"
          className="bi bi-list"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
          />
        </svg>
      </label>

      <ul>
        <li>
          <a className="active" href="#">
            Home
          </a>
        </li>
        <li>
          <a href="">About</a>
        </li>
        <li>
          <a href="#">Proyectos</a>
        </li>
        <li>
          <a href="#">Desing</a>
        </li>
        <li>
          <a href="#">ForFun</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
