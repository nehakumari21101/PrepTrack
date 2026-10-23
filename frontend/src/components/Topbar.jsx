import React from "react";
import { CalendarDays, Menu } from "lucide-react";

function Topbar({
  page = "Dashboard",
  name = "Student",
  onMenu,
}) {
  return (
    <header className="topbar">
      <button
        className="mobile-menu icon-button"
        onClick={onMenu}
        aria-label="Open menu"
      >
        <Menu size={21} />
      </button>
      <div className="breadcrumbs">
        Workspace <span>/</span> <strong>{page}</strong>
      </div>
      <div className="top-actions">
        <div className="date-chip">
          <CalendarDays size={15} />
          {new Date().toLocaleDateString("en-IN", {
            weekday: "short",
            day: "numeric",
            month: "short",
          })}
        </div>
        <div className="top-avatar">
          {(name || "S").charAt(0).toUpperCase()}
        </div>
      </div>
    </header>
  );
}

export default Topbar;