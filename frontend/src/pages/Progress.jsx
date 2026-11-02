import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
import { PageHeading, Difficulty, EmptyState } from "../components/UI";
export function ProgressPage({ questions, applications, solved, percent }) {
  const topics = [...new Set(questions.map((q) => q.topic))].map((topic) => ({
    topic,
    total: questions.filter((q) => q.topic === topic).length,
    solved: questions.filter((q) => q.topic === topic && q.status === "Solved")
      .length,
  }));
  const diff = ["Easy", "Medium", "Hard"].map((d) => ({
    label: d,
    count: questions.filter((q) => q.difficulty === d).length,
    solved: questions.filter((q) => q.difficulty === d && q.status === "Solved")
      .length,
  }));
  return (
    <>
      <PageHeading
        eyebrow="YOUR GROWTH, VISUALIZED"
        title="Progress"
        subtitle="Notice the small wins. They add up faster than you think."
      />
      <div className="progress-hero">
        <div
          className="progress-ring"
          style={{ "--progress": `${percent * 3.6}deg` }}
        >
          <div>
            <strong>{percent}%</strong>
            <span>completed</span>
          </div>
        </div>
        <div className="progress-hero-copy">
          <span className="banner-tag">
            <Sparkles size={13} /> YOUR CURRENT SNAPSHOT
          </span>
          <h2>You're building momentum.</h2>
          <p>
            You've solved <strong>{solved}</strong> out of{" "}
            <strong>{questions.length}</strong> tracked questions. Keep
            practicing and update each question's status as you go.
          </p>
          <div className="hero-mini-stats">
            <span>
              <CircleCheck size={15} />
              {solved} solved
            </span>
            <span>
              <BriefcaseBusiness size={15} />
              {applications.length} applications tracked
            </span>
          </div>
        </div>
      </div>
      <div className="progress-columns">
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Topic-wise practice</h2>
              <p>Questions by topic</p>
            </div>
            <Code2 size={19} className="panel-heading-icon" />
          </div>
          {topics.length ? (
            <div className="topic-progress-list">
              {topics.map((t) => (
                <div className="topic-progress" key={t.topic}>
                  <div className="topic-progress-head">
                    <strong>{t.topic}</strong>
                    <span>
                      {t.solved}/{t.total} solved
                    </span>
                  </div>
                  <div className="wide-progress">
                    <span
                      style={{
                        width: `${t.total ? (t.solved / t.total) * 100 : 0}%`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <EmptyState
              title="No topic data yet"
              text="Add DSA questions to see your topic breakdown."
            />
          )}
        </section>
        <section className="panel">
          <div className="panel-heading">
            <div>
              <h2>Difficulty breakdown</h2>
              <p>Practice across levels</p>
            </div>
            <Target size={19} className="panel-heading-icon" />
          </div>
          <div className="difficulty-list">
            {diff.map((d) => (
              <div className="difficulty-row" key={d.label}>
                <div className="difficulty-row-label">
                  <Difficulty value={d.label} />
                  <span>{d.count} questions</span>
                </div>
                <div className="wide-progress">
                  <span
                    className={`bar-${d.label.toLowerCase()}`}
                    style={{
                      width: `${questions.length ? (d.count / questions.length) * 100 : 0}%`,
                    }}
                  />
                </div>
                <small>{d.solved} solved</small>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="bottom-note">
        <Sparkles size={17} />
        <span>
          <strong>Remember:</strong> Progress is not a competition. Focus on
          learning one concept at a time.
        </span>
      </div>
    </>
  );
}
