import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
import { PageHeading, EmptyState } from "../components/UI";
export  function ApplicationsPage({ applications, add, edit, update, remove }) {
  const stages = [
    "Applied",
    "Assessment",
    "Interview",
    "Offer",
    "Rejected",
    "Preparing",
  ];
  return (
    <>
      <PageHeading
        eyebrow="YOUR CAREER JOURNEY"
        title="Applications"
        subtitle="Keep track of the opportunities you're working toward."
        action
        actionLabel="Add application"
        onAction={add}
      />
      <div className="application-stats">
        <div className="app-stat">
          <span>All applications</span>
          <strong>{applications.length}</strong>
        </div>
        <div className="app-stat">
          <span>In progress</span>
          <strong>
            {
              applications.filter(
                (a) => !["Rejected", "Offer"].includes(a.status),
              ).length
            }
          </strong>
        </div>
        <div className="app-stat">
          <span>Offers</span>
          <strong>
            {applications.filter((a) => a.status === "Offer").length}
          </strong>
        </div>
      </div>
      <section className="panel table-panel">
        <div className="panel-heading applications-heading">
          <div>
            <h2>Your opportunities</h2>
            <p>Update the status as you move through the process</p>
          </div>
          <span className="subtle-count">{applications.length} tracked</span>
        </div>
        {applications.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>COMPANY / ROLE</th>
                  <th>DATE ADDED</th>
                  <th>STATUS</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {applications.map((a) => (
                  <tr key={a.id}>
                    <td>
                      <div className="company-cell">
                        <div className="company-logo">
                          {a.company.charAt(0).toUpperCase()}
                        </div>
                        <div>
                          <strong>{a.company}</strong>
                          <span>{a.role}</span>
                        </div>
                      </div>
                    </td>
                    <td className="muted-cell">{a.date}</td>
                    <td>
                      <select
                        className={`inline-status app-status-${a.status.toLowerCase()}`}
                        value={a.status}
                        onChange={(e) => update({ ...a, status: e.target.value })}
                      >
                        {stages.map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                    </td>
                    <td>
                      <div className="row-actions">
                        <button
                          className="icon-button"
                          title="Edit application"
                          onClick={() => edit(a)}
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          className="icon-button danger-hover"
                          title="Delete application"
                          onClick={() => remove(a.id)}
                        >
                          <Trash2 size={15} />
                        </button>
                        {a.link && (
                          <a
                            className="icon-button"
                            href={a.link}
                            target="_blank"
                            rel="noreferrer"
                            title="Open job link"
                          >
                            <ExternalLink size={15} />
                          </a>
                        )}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="No applications tracked yet"
            text="Add a job or internship to keep its status in one place."
          />
        )}
        <div className="table-foot">
          Your application details are saved on this device.
        </div>
      </section>
      <div className="bottom-note">
        <BriefcaseBusiness size={17} />
        <span>
          <strong>Tip:</strong> Keep your resume ready and note the next step
          for every application.
        </span>
      </div>
    </>
  );
}
