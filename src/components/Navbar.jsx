import React from "react";
import { NavLink } from "react-router";

const NavItems = [
  {
    id: 1,
    name: "Home",
    path: "/",
  },
  {
    id: 2,
    name: "Object Editor",
    path: "/object-editor",
  },
];

const Navbar = () => {
  return (
    <nav className="w-full ">
      <div className="bg-slate-100 px-8 py-3">
        <ul className="flex justify-start items-center gap-5">
          {NavItems.map((item) => (
            <li key={item.id} className="">
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  isActive
                    ? "font-semibold text-red-400"
                    : "hover:font-semibold"
                }
              >
                {item.name}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
