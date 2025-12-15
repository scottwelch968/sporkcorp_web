"use client";
export function Toggle({ left, right, value, onChange }: { left: string; right: string; value: "left" | "right"; onChange: (v: "left" | "right") => void; }) {
  return (
    <div className="mkt-toggle">
      <button type="button" className={`mkt-toggle-btn ${value==="left" ? "mkt-toggle-btn-active" : ""}`} onClick={() => onChange("left")}>{left}</button>
      <button type="button" className={`mkt-toggle-btn ${value==="right" ? "mkt-toggle-btn-active" : ""}`} onClick={() => onChange("right")}>{right}</button>
    </div>
  );
}
