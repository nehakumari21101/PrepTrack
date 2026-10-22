import {
    LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap
} from "lucide-react";
const items = [
    ["Dashboard", LayoutDashboard],
    ["DSA Questions", Code2],
    ["Progress", ChartNoAxesCombined],
    ["Settings", Settings],
]

const Sidebar = ({
    page = "Dashboard",
    setPage = () => {},
    name = "Students",
    questions = [],
    solved = 0,
    goal = "solve 3 questions a day",
}) => {
    const percent = questions.length ? Math.round((solved / questions.length) *100) :0;
  return (
    <aside className="sidebar">
      <div className="brand">
        <div className="brand-mark">
          <GraduationCap size={23} />
        </div>
        <div>
          <div className="brand-name">PrepTrack</div>
          <div className="brand-sub">YOUR PLACEMENT COMPANION</div>
        </div>
      </div>
      <div className="nav-group">
        <div className="nav-label">MAIN MENU</div>
        {items.slice(0, 4).map(([label, Icon]) => (
          <button
            key={label}
            className={`nav-item ${page === label ? "active" : ""}`}
            onClick={() => setPage(label)}
          >
            <Icon size={18} />
            <span>{label}</span>
          </button>
        ))}
      </div>
      <div className="nav-group">
        <div className="nav-label">PREFERENCES</div>
        <button
          className={`nav-item ${page === "Settings" ? "active" : ""}`}
          onClick={() => setPage("Settings")}
        >
          <Settings size={18} />
          <span>Settings</span>
        </button>
      </div>
      <div className="sidebar-bottom">
        <div className="goal-card">
          <div className="goal-title">Today's focus</div>
          <p>{goal}</p>
          <div className="goal-progress">
            <span style={{ width: `${percent}%` }} />
          </div>
          <small>
            {solved} of {questions.length} questions solved
          </small>
        </div>
        <div className="profile-row">
          <div className="avatar">{(name || "S").charAt(0).toUpperCase()}</div>
          <div className="profile-copy">
            <strong>{name}</strong>
            <span>Placement prep</span>
          </div>
        </div>
      </div>
    </aside>
  )
}

export default Sidebar;

