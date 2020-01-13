import * as React from "react";
import { NavLink } from "react-router-dom";

export const Tile = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/faq">Faq</NavLink>
      </li>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
    </ul>
  </nav>
);
