import "./Header.css";
import { Sun, Moon } from "./Icons";
import { useState, useEffect } from "react";

export const Header = () => {
  const [tema, setTema] = useState("claro");

  const handleChange = (e) => setTema(e.target.checked ? "oscuro" : "claro");

  useEffect(() => {
    document.body.setAttribute("data-tema", tema);
  }, [tema]);

  return (
    <nav className="Header">
      <img src="/Images/pokemon-svgrepo-com.png" alt="img" />
      <div className="swhich">
        <Sun />
        <label>
          <input
            type="checkbox"
            className="check-swich"
            onChange={handleChange}
            hidden
          />
          <span className="slider"></span>
        </label>
        <Moon />
      </div>
    </nav>
  );
};
