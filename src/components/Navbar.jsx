import "../styles/Navbar.css";

export default function Navbar({ setSelected, selected }) {
  return (
    <nav className="navbar">
      <button
        className={selected === "all" ? "active" : ""}
        onClick={() => setSelected("all")}
      >
        All
      </button>
      <button
        className={selected === "About" ? "active" : ""}
        onClick={() => setSelected("About")}
      >
        About Me
      </button>
      <button
        className={selected === "Work" ? "active" : ""}
        onClick={() => setSelected("Work")}
      >
        Case Studies
      </button>
      <button
        className={selected === "3" ? "active" : ""}
        onClick={() => setSelected("3")}
      >
        3
      </button>
      <button
        className={selected === "4" ? "active" : ""}
        onClick={() => setSelected("4")}
      >
        4
      </button>
    </nav>
  );
}
