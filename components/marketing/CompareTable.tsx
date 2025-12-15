import type React from "react";

export type CompareColumn = {
  key: string;
  label: string;
  highlight?: boolean;
};

export type CompareRow = {
  label: string;
  values: Record<string, React.ReactNode>;
};

export function CompareTable({
  columns,
  rows,
}: {
  columns: readonly CompareColumn[];
  rows: readonly CompareRow[];
}) {
  return (
    <div className="overflow-x-auto">
      <table className="mkt-table min-w-[820px]">
        <thead>
          <tr>
            <th className="mkt-th w-[280px]">Capability</th>
            {columns.map((c) => (
              <th
                key={c.key}
                className={`mkt-th ${c.highlight ? "text-ink" : ""}`}
              >
                {c.label}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {rows.map((r) => (
            <tr key={r.label}>
              <td className="mkt-td font-medium">{r.label}</td>
              {columns.map((c) => (
                <td key={c.key} className="mkt-td">
                  {r.values[c.key]}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
