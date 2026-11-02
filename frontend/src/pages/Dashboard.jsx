import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
import { PageHeading, StatCard, Difficulty, Status, EmptyState } from "../components/UI";
export function Dashboard({
  name,
  questions,
  applications,
  solved,
  percent,
  setPage,
  setShowQuestionForm,
  setShowAppForm,
  setQuestions,
}) {
  const recent = [...questions].slice(0, 4);
  return (
    <>
      <PageHeading
        eyebrow="YOUR WORKSPACE"
        title={`Good to see you, ${name || "Student"} 👋`}
        subtitle="Small steps every day lead to big opportunities. Here's your preparation at a glance."
      />
      <div className="welcome-banner">
        <div className="welcome-art">
          <div className="sparkle s1">✦</div>
          <div className="welcome-circle">
            <Target size={28} />
          </div>
          <div className="sparkle s2">✧</div>
        </div>
        <div className="welcome-copy">
          <span className="banner-tag">
            <Sparkles size={13} /> YOUR NEXT CHAPTER STARTS HERE
          </span>
          <h2>Consistency beats intensity.</h2>
          <p>
            Keep your goals clear, practice a little every day, and trust the
            process.
          </p>
        </div>
        <button
          className="banner-button"
          onClick={() => setPage("DSA Questions")}
        >
          Continue practicing <ArrowUpRight size={16} />
        </button>
      </div>
      <div className="section-heading">
        <div>
          <h2>Your overview</h2>
          <p>A quick snapshot of your preparation</p>
        </div>
        <span className="live-label">
          <span /> Updated just now
        </span>
      </div>
      <div className="stats-grid">
        <StatCard
          icon={Code2}
          label="Questions tracked"
          value={questions.length}
          note={`${solved} marked as solved`}
          tint="purple"
        />
        <StatCard
          icon={CircleCheck}
          label="Completion rate"
          value={`${percent}%`}
          note="Of tracked questions solved"
          tint="green"
          progress={percent}
        />
        <StatCard
          icon={BriefcaseBusiness}
          label="Applications"
          value={applications.length}
          note="Opportunities you're tracking"
          tint="orange"
        />
        <StatCard
          icon={Flame}
          label="Keep your streak"
          value="1 day"
          note="Build a daily practice habit"
          tint="pink"
        />
      </div>
      <div className="dashboard-grid">
        <section className="panel recent-panel">
          <div className="panel-heading">
            <div>
              <h2>Recent DSA questions</h2>
              <p>Pick up where you left off</p>
            </div>
            <button
              className="text-button"
              onClick={() => setPage("DSA Questions")}
            >
              View all <ArrowUpRight size={15} />
            </button>
          </div>
          {recent.length ? (
            <div className="table-wrap">
              <table>
                <thead>
                  <tr>
                    <th>QUESTION</th>
                    <th>TOPIC</th>
                    <th>DIFFICULTY</th>
                    <th>STATUS</th>
                  </tr>
                </thead>
                <tbody>
                  {recent.map((q) => (
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
                        <Status value={q.status} />
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          ) : (
            <EmptyState
              title="No questions yet"
              text="Add your first DSA question to get started."
            />
          )}
          <button
            className="secondary-button full-button"
            onClick={() => {
              setPage("DSA Questions");
              setShowQuestionForm(true);
            }}
          >
            <Plus size={16} /> Add a question
          </button>
        </section>
        <section className="panel quick-panel">
          <div className="panel-heading">
            <div>
              <h2>Quick actions</h2>
              <p>Make your next move</p>
            </div>
            <div className="quick-spark">
              <Sparkles size={17} />
            </div>
          </div>
          <button
            className="quick-action"
            onClick={() => {
              setPage("DSA Questions");
              setShowQuestionForm(true);
            }}
          >
            <div className="quick-icon q-purple">
              <Code2 size={18} />
            </div>
            <div>
              <strong>Log a DSA question</strong>
              <span>Record a problem you practiced</span>
            </div>
            <ArrowUpRight size={16} className="quick-arrow" />
          </button>
          <button
            className="quick-action"
            onClick={() => {
              setPage("Applications");
              setShowAppForm(true);
            }}
          >
            <div className="quick-icon q-orange">
              <BriefcaseBusiness size={18} />
            </div>
            <div>
              <strong>Track an application</strong>
              <span>Save a role you're interested in</span>
            </div>
            <ArrowUpRight size={16} className="quick-arrow" />
          </button>
          <button className="quick-action" onClick={() => setPage("Progress")}>
            <div className="quick-icon q-green">
              <ChartNoAxesCombined size={18} />
            </div>
            <div>
              <strong>Check your progress</strong>
              <span>See your preparation overview</span>
            </div>
            <ArrowUpRight size={16} className="quick-arrow" />
          </button>
          <div className="tip-card">
            <div className="tip-head">
              <Sparkles size={15} /> A LITTLE REMINDER
            </div>
            <p>“You don't have to be perfect. You just have to keep going.”</p>
          </div>
        </section>
      </div>
      <div className="bottom-note">
        <BookOpen size={17} />
        <span>
          <strong>Learning tip:</strong> Focus on understanding the approach,
          not just memorizing the solution.
        </span>
        <button onClick={() => setPage("DSA Questions")}>
          Let's practice <ArrowUpRight size={14} />
        </button>
      </div>
    </>
  );
}

