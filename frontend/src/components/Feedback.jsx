import React from "react";
import { CircleCheck, X } from "lucide-react";

export function Feedback({ message, onClose }) {
  if (!message) return null;
  return (
    <div className="toast" role="status">
      <CircleCheck size={17} />
      {message}
      {onClose && (
        <button className="icon-button" onClick={onClose} aria-label="Dismiss">
          <X size={14} />
        </button>
      )}
    </div>
  );
}
export default Feedback;
