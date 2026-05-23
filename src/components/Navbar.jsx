import "../styles/Navbar.css"

export default function Navbar({ setSelected, selected}) {
  return (
    <nav className="navbar">
      <button className={selected === "all" ? "active" : ""} onClick={() => setSelected("all")}>All</button>
      <button className={selected === "1" ? "active" : ""} onClick={() => setSelected("1")}>1</button>
      <button className={selected === "2" ? "active" : ""} onClick={() => setSelected("2")}>2</button>
      <button className={selected === "3" ? "active" : ""} onClick={() => setSelected("3")}>3</button>
      <button className={selected === "4" ? "active" : ""} onClick={() => setSelected("4")}>4</button>
    </nav>
  );
}