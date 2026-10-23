import React from "react";
import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
export function PageHeading({
  eyebrow,
  title,
  subtitle,
  action,
  actionLabel,
  onAction,
}) {
  return (
    <div className="page-heading">
      <div>
        <div className="eyebrow">{eyebrow}</div>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
      {action && (
        <button className="primary-button" onClick={onAction}>
          <Plus size={17} />
          {actionLabel}
        </button>
      )}
    </div>
  );
}
export function StatCard({ icon: Icon, label, value, note, tint, progress }) {
  return (
    <div className="stat-card">
      <div className={`stat-icon ${tint}`}>
        <Icon size={19} />
      </div>
      <div className="stat-label">{label}</div>
      <div className="stat-value">{value}</div>
      <div className="stat-note">{note}</div>
      {progress !== undefined && (
        <div className="mini-progress">
          <span style={{ width: `${progress}%` }} />
        </div>
      )}
    </div>
  );
}
export function Difficulty({ value }) {
  return (
    <span className={`difficulty diff-${value.toLowerCase()}`}>{value}</span>
  );
}
export function Status({ value }) {
  const cls = value.toLowerCase().replace(" ", "-");
  return (
    <span className={`status status-${cls}`}>
      <span />
      {value}
    </span>
  );
}
export function EmptyState({ title, text }) {
  return (
    <div className="empty-state">
      <div className="empty-icon">
        <BookOpen size={22} />
      </div>
      <strong>{title}</strong>
      <p>{text}</p>
    </div>
  );
}
