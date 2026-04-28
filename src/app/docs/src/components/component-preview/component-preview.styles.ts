export const componentPreviewStyles = {
  container: "group relative flex flex-col rounded-core-circle-2xl border border-core-circle-border-main bg-white shadow-core-circle-subtle transition-all hover:shadow-core-circle-elevated",

  // Header toolbar
  toolbar: "flex items-center min-h-[48px] px-6 py-2 bg-slate-50/50 backdrop-blur-sm border-b border-core-circle-border-main rounded-t-core-circle-2xl",
  toolbarTitle: "text-core-circle-text-main font-core-circle-bold text-[13px] tracking-tight truncate mr-4",
  toolbarActions: "flex items-center gap-2 ml-auto shrink-0",

  // Toggle Code/Preview button
  toggleButton: {
    base: "flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-core-circle-medium rounded-core-circle-md border transition-all h-8",
    active: "bg-core-circle-primary text-white border-core-circle-primary shadow-sm",
    inactive: "text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-slate-50 border-transparent hover:border-core-circle-border-main",
  },

  // Copy button
  copyButton: "flex items-center gap-1.5 px-2.5 py-1 text-[11px] font-core-circle-medium text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-slate-50 rounded-core-circle-md border border-transparent hover:border-core-circle-border-main transition-all h-8",
  copySuccess: "w-3.5 h-3.5 text-core-circle-secondary",
  copySuccessText: "text-core-circle-secondary",

  // Content area
  contentArea: "relative min-h-[220px] w-full flex items-center justify-center p-8 bg-white transition-all duration-300",
  previewWrapper: "flex flex-wrap gap-4 items-center justify-center animate-core-circle-in w-full",
  codeWrapper: "absolute inset-0 bg-core-circle-bg-inverse p-6 overflow-auto animate-core-circle-in rounded-b-core-circle-2xl",
  codeBlock: "text-core-circle-text-inverse font-mono text-[12px] leading-relaxed",
};
