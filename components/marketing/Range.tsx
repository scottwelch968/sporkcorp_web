"use client";
export function Range({ min, max, step, value, onChange }: { min: number; max: number; step: number; value: number; onChange: (v: number) => void; }) {
  return <input className="mkt-range" type="range" min={min} max={max} step={step} value={value} onChange={(e) => onChange(Number(e.target.value))} />;
}
