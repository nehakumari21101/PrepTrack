import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
import { PageHeading, Difficulty, Status, EmptyState } from "../components/UI";
export function QuestionsPage({
  questions,
  allCount,
  solved,
  search,
  setSearch,
  statusFilter,
  setStatusFilter,
  add,
  edit,
  remove,
  setQuestions,
}) {
  return (
    <>
      <PageHeading
        eyebrow="PRACTICE MAKES PROGRESS"
        title="DSA Questions"
        subtitle="Keep all your coding practice organized in one place."
        action
        actionLabel="Add question"
        onAction={add}
      />
      <div className="stats-strip">
        <div>
          <Code2 size={18} />
          <span>Total questions</span>
          <strong>{allCount}</strong>
        </div>
        <div>
          <CircleCheck size={18} />
          <span>Solved</span>
          <strong>{solved}</strong>
        </div>
        <div>
          <Clock3 size={18} />
          <span>Remaining</span>
          <strong>{allCount - solved}</strong>
        </div>
      </div>
      <section className="panel table-panel">
        <div className="toolbar">
          <div className="search-box">
            <Search size={17} />
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search questions or topics..."
            />
          </div>
          <div className="filter-wrap">
            <Filter size={16} />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              aria-label="Filter by status"
            >
              <option>All</option>
              <option>To Do</option>
              <option>In Progress</option>
              <option>Solved</option>
            </select>
            <ChevronDown size={14} />
          </div>
        </div>
        {questions.length ? (
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>QUESTION</th>
                  <th>TOPIC</th>
                  <th>DIFFICULTY</th>
                  <th>STATUS</th>
                  <th>ADDED</th>
                  <th>ACTIONS</th>
                </tr>
              </thead>
              <tbody>
                {questions.map((q) => (
                  <tr key={q.id}>
                    <td>
                      <div className="question-name">
                        <span
                          className={`tiny-status ${q.status === "Solved" ? "tiny-solved" : ""}`}
                        >
                          {q.status === "Solved" ? <Check size={12} /> : null}
                        </span>
                        {q.title}
                      </div>
                    </td>
                    <td>
                      <span className="topic-chip">{q.topic}</span>
                    </td>
                    <td>
                      <Difficulty value={q.difficulty} />
                    </td>
                    <td>
                      <select
                        className={`inline-status ${q.status === "Solved" ? "inline-done" : ""}`}
                        value={q.status}
                        onChange={(e) =>
                          setQuestions((p) =>
                            p.map((x) =>
                              x.id === q.id
                                ? { ...x, status: e.target.value }
                                : x,
                            ),
                          )
                        }
                      >
                        <option>To Do</option>
                        <option>In Progress</option>
                        <option>Solved</option>
                      </select>
                    </td>
                    <td className="muted-cell">{q.date}</td>
                    <td>
                      <div className="row-actions">
                        <button
                          className="icon-button"
                          title="Edit question"
                          onClick={() => edit(q)}
                        >
                          <Pencil size={15} />
                        </button>
                        <button
                          className="icon-button danger-hover"
                          title="Delete question"
                          onClick={() => remove(q.id)}
                        >
                          <Trash2 size={15} />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        ) : (
          <EmptyState
            title="No matching questions"
            text="Try another search or add a new question."
          />
        )}
        <div className="table-foot">
          Showing {questions.length}{" "}
          {questions.length === 1 ? "question" : "questions"} <span>•</span>{" "}
          Changes are saved on this device
        </div>
      </section>
    </>
  );
}
