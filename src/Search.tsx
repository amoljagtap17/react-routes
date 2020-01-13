import * as React from "react";
import { NavLink } from "react-router-dom";

export const Search = () => (
  <nav>
    <ul>
      <li>
        <NavLink to="/dashboards/new">New</NavLink>
      </li>
      <li>
        <NavLink to="/dashboards/trending">Trending</NavLink>
      </li>
      <li>
        <NavLink to="/dashboards/favorites">Favorites</NavLink>
      </li>
    </ul>
  </nav>
);
