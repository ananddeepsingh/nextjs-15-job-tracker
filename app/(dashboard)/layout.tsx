import React from "react";
import Navbar from "../components/Navbar";
import { UserButton } from "@clerk/nextjs";

const layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main style={{ display: "flex", width: "100%" }}>
      <div className="flex items-center gap-x-4">
        <UserButton />
      </div>
      <div className="flex" style={{ width: "100%", display: "flex" }}>
        <div style={{ width: "15%" }}>
          <Navbar />
        </div>
        <main className="flex-1 bg-gray-100 p-6" style={{ width: "85%" }}>
          <div className="layout">{children}</div>
        </main>
      </div>
    </main>
  );
};

export default layout;
