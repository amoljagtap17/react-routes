import * as React from "react";
import { Link, NavLink } from "react-router-dom";

export const Navbar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
      <li>
        <NavLink to="/dashboards/type/cr">CR</NavLink>
      </li>
      <li>
        <NavLink to="/dashboards/type/mr">MR</NavLink>
      </li>
      <li>
        <NavLink to="/dashboards/type/or">OR</NavLink>
      </li>
    </ul>
  </nav>
);
