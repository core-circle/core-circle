export const richTextPlaygroundStyles = {
  container: "bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle overflow-hidden",
  layout: "flex flex-col",

  // Controls Panel
  controlsWrapper: "w-full bg-core-circle-bg-page/30 border-b border-core-circle-border-main p-4 space-y-4",
  gridCols: "grid grid-cols-1 sm:grid-cols-2 gap-4 items-end",

  // Preview Panel
  previewWrapper: "flex-1 flex flex-col bg-white",
  previewArea: "flex-1 p-12 min-h-[450px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px] overflow-auto",

  // Code Snippet Panel
  codeSection: "p-6 bg-core-circle-bg-inverse border-t border-core-circle-border-main",
  codeHeader: "flex items-center justify-between mb-4",
  codeTitle: "text-core-circle-xs font-core-circle-bold text-core-circle-text-inverse opacity-60 uppercase tracking-widest flex items-center gap-2",
  copyButton: "text-core-circle-xs text-core-circle-primary hover:text-white transition-colors flex items-center gap-2",
  codeBlock: "text-core-circle-text-inverse text-slate-300 font-mono text-[12px] leading-relaxed overflow-x-auto p-4 bg-black/20 rounded-core-circle-lg"
};
