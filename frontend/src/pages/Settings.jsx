import React, { useState } from "react";
import { LayoutDashboard, Code2, BriefcaseBusiness, ChartNoAxesCombined, Settings, GraduationCap, Search, Bell, Plus, Check, Trash2, Pencil, X, ChevronDown, Target, Flame, CircleCheck, Clock3, ArrowUpRight, Menu, CalendarDays, BookOpen, Filter, Sparkles, ExternalLink } from "lucide-react";
import { PageHeading } from "../components/UI";

export function SettingsPage({ name, setName, goal, setGoal, notify }) {
  const [draftName, setDraftName] = useState(name);
  const [draftGoal, setDraftGoal] = useState(goal);
  return (
    <>
      <PageHeading
        eyebrow="MAKE IT YOURS"
        title="Settings"
        subtitle="Personalize your PrepTrack workspace."
      />
      <div className="settings-layout">
        <section className="panel settings-panel">
          <div className="settings-section-head">
            <div className="settings-symbol">
              <GraduationCap size={19} />
            </div>
            <div>
              <h2>Your profile</h2>
              <p>These details personalize your dashboard.</p>
            </div>
          </div>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              setName(draftName.trim() || "Student");
              setGoal(draftGoal.trim() || "Make progress every day");
              notify("Settings saved");
            }}
            className="settings-form"
          >
            <label>
              Display name
              <input
                value={draftName}
                onChange={(e) => setDraftName(e.target.value)}
                placeholder="Enter your name"
                maxLength={40}
              />
            </label>
            <label>
              Daily focus
              <input
                value={draftGoal}
                onChange={(e) => setDraftGoal(e.target.value)}
                placeholder="e.g. Solve 3 questions a day"
                maxLength={80}
              />
            </label>
            <div className="settings-help">
              <Sparkles size={15} /> Choose a realistic goal that you can work
              toward consistently.
            </div>
            <button className="primary-button" type="submit">
              <Check size={16} /> Save changes
            </button>
          </form>
        </section>
        <section className="panel privacy-panel">
          <div className="settings-section-head">
            <div className="settings-symbol green-symbol">
              <Settings size={19} />
            </div>
            <div>
              <h2>Data & privacy</h2>
              <p>Understand how this demo stores your work.</p>
            </div>
          </div>
          <div className="privacy-note">
            <CircleCheck size={18} />
            <div>
              <strong>Saved on this device</strong>
              <p>
                Your questions, applications and preferences use your browser's
                local storage. No account or backend is connected.
              </p>
            </div>
          </div>
          <div className="privacy-note">
            <BookOpen size={18} />
            <div>
              <strong>Before publishing</strong>
              <p>
                Add a backend and authentication if you want your data available
                across devices or users.
              </p>
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
