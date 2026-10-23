import  { useState } from "react";
import {
  LayoutDashboard,
  Code2,
  BriefcaseBusiness,
  ChartNoAxesCombined,
  Settings,
  GraduationCap,
  Search,
  Bell,
  Plus,
  Check,
  Trash2,
  Pencil,
  X,
  ChevronDown,
  Target,
  Flame,
  CircleCheck,
  Clock3,
  ArrowUpRight,
  Menu,
  CalendarDays,
  BookOpen,
  Filter,
  Sparkles,
  ExternalLink,
} from "lucide-react";
export function Modal({ title, subtitle, children, onClose }) {
  return (
    <div
      className="modal-overlay"
      onMouseDown={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
    >
      <div className="modal-card">
        <div className="modal-head">
          <div>
            <h2>{title}</h2>
            <p>{subtitle}</p>
          </div>
          <button
            className="icon-button"
            onClick={onClose}
            aria-label="Close dialog"
          >
            <X size={19} />
          </button>
        </div>
        {children}
      </div>
    </div>
  );
}
export function QuestionModal({ initial, onClose, onSave }) {
  const [form, setForm] = useState({
    title: initial?.title || "",
    topic: initial?.topic || "Arrays",
    difficulty: initial?.difficulty || "Easy",
    status: initial?.status || "To Do",
  });
  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  return (
    <Modal
      title={initial ? "Edit question" : "Add a DSA question"}
      subtitle="Keep your coding practice organized."
      onClose={onClose}
    >
      <form
        className="modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(form);
        }}
      >
        <label>
          Question name
          <input
            autoFocus
            required
            value={form.title}
            onChange={(e) => update("title", e.target.value)}
            placeholder="e.g. Two Sum"
            maxLength={100}
          />
        </label>
        <div className="form-two-col">
          <label>
            Topic
            <select
              value={form.topic}
              onChange={(e) => update("topic", e.target.value)}
            >
              {[
                "Arrays",
                "Strings",
                "Math",
                "Hashing",
                "Two Pointers",
                "Binary Search",
                "Linked List",
                "Stack",
                "Queue",
                "Trees",
                "Graphs",
                "Dynamic Programming",
                "Other",
              ].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
          <label>
            Difficulty
            <select
              value={form.difficulty}
              onChange={(e) => update("difficulty", e.target.value)}
            >
              {["Easy", "Medium", "Hard"].map((t) => (
                <option key={t}>{t}</option>
              ))}
            </select>
          </label>
        </div>
        <label>
          Status
          <select
            value={form.status}
            onChange={(e) => update("status", e.target.value)}
          >
            {["To Do", "In Progress", "Solved"].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <div className="modal-actions">
          <button type="button" className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-button" type="submit">
            <Check size={16} />
            {initial ? "Save changes" : "Add question"}
          </button>
        </div>
      </form>
    </Modal>
  );
}

export function ApplicationModal({ initial, onClose, onSave }) {
  const [form, setForm] = useState({
    company: initial?.company || "",
    role: initial?.role || "",
    status: initial?.status || "Applied",
    link: initial?.link || "",
  });
  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));
  return (
    <Modal
      title={initial ? "Edit application" : "Track an application"}
      subtitle="Keep the next step in your career journey visible."
      onClose={onClose}
    >
      <form
        className="modal-form"
        onSubmit={(e) => {
          e.preventDefault();
          onSave(form);
        }}
      >
        <label>
          Company name
          <input
            autoFocus
            required
            value={form.company}
            onChange={(e) => update("company", e.target.value)}
            placeholder="e.g. Amazon"
            maxLength={100}
          />
        </label>
        <label>
          Job role
          <input
            required
            value={form.role}
            onChange={(e) => update("role", e.target.value)}
            placeholder="e.g. SDE Intern"
            maxLength={100}
          />
        </label>
        <label>
          Application status
          <select
            value={form.status}
            onChange={(e) => update("status", e.target.value)}
          >
            {[
              "Preparing",
              "Applied",
              "Assessment",
              "Interview",
              "Offer",
              "Rejected",
            ].map((t) => (
              <option key={t}>{t}</option>
            ))}
          </select>
        </label>
        <label>
          Job link <span className="optional-label">(optional)</span>
          <input
            type="url"
            value={form.link}
            onChange={(e) => update("link", e.target.value)}
            placeholder="https://..."
          />
        </label>
        <div className="modal-actions">
          <button type="button" className="secondary-button" onClick={onClose}>
            Cancel
          </button>
          <button className="primary-button" type="submit">
            <Check size={16} />
            {initial ? "Save changes" : "Add application"}
          </button>
        </div>
      </form>
    </Modal>
  );
}
