import React from "react";
import { Links } from "../utils/links";
import Link from "next/link";

const Navbar = () => {
  return (
    <nav style={{ background: "#dedede" }}>
      <h2 className="text-xl font-bold mb-4">Navigation</h2>

      <ul className="space-y-2">
        {Links.map(({ href, label }) => {
          return (
            <li key={label}>
              <Link href={href}>{label}</Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
