export const propsTableStyles = {
  container: "w-full overflow-x-auto rounded-core-circle-2xl border border-core-circle-border-main bg-white shadow-core-circle-subtle",
  table: "w-full text-left border-collapse",
  thead: {
    row: "bg-core-circle-bg-page/50 border-b border-core-circle-border-main",
    th: "px-6 py-4 text-[13px] font-bold text-core-circle-text-main uppercase tracking-wider",
  },
  tbody: {
    base: "divide-y divide-core-circle-border-main",
    row: "hover:bg-core-circle-bg-page/30 transition-colors group",
    cell: "px-6 py-4",
  },
  prop: {
    wrapper: "flex items-center gap-2",
    code: "text-[13px] font-mono font-bold text-core-circle-primary bg-core-circle-primary/5 px-2 py-0.5 rounded border border-core-circle-primary/10",
    required: "text-[10px] font-bold text-core-circle-destructive bg-core-circle-destructive/5 px-1.5 py-0.5 rounded uppercase tracking-tighter border border-core-circle-destructive/10",
  },
  type: {
    code: "text-[12px] font-mono text-slate-500 break-words leading-relaxed",
  },
  defaultValue: {
    cell: "px-6 py-4 text-[13px] text-core-circle-text-muted font-medium",
    code: "text-[12px] font-mono bg-slate-100 px-1.5 py-0.5 rounded text-slate-600",
    empty: "opacity-30",
  },
  description: {
    cell: "px-6 py-4 text-[13px] text-core-circle-text-muted leading-relaxed",
  },
};
