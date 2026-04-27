export const componentPreviewStyles = {
  container: "group relative flex flex-col rounded-core-circle-2xl border border-core-circle-border-main bg-white shadow-core-circle-subtle transition-all hover:shadow-core-circle-elevated",

  // Header toolbar
  toolbar: "flex items-center justify-between px-6 py-3 bg-core-circle-bg-page/50 backdrop-blur-sm border-b border-core-circle-border-main",
  toolbarTitle: "text-core-circle-text-main font-core-circle-bold text-[13px] tracking-tight",
  toolbarActions: "flex items-center gap-1.5",

  // Toggle Code/Preview button
  toggleButton: {
    base: "flex items-center gap-2 px-3 py-1.5 text-[11px] font-core-circle-medium rounded-core-circle-md border transition-all",
    active: "bg-core-circle-primary text-white border-core-circle-primary",
    inactive: "text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-white border-transparent hover:border-core-circle-border-main",
  },

  // Copy button
  copyButton: "flex items-center gap-2 px-3 py-1.5 text-[11px] font-core-circle-medium text-core-circle-text-muted hover:text-core-circle-text-main hover:bg-white rounded-core-circle-md border border-transparent hover:border-core-circle-border-main transition-all",
  copySuccess: "w-3.5 h-3.5 text-core-circle-secondary",
  copySuccessText: "text-core-circle-secondary",

  // Content area
  contentArea: "relative min-h-[220px] flex items-center justify-center p-8 bg-white transition-all duration-300",
  previewWrapper: "flex flex-wrap gap-4 items-center justify-center animate-core-circle-in",
  codeWrapper: "absolute inset-0 bg-core-circle-bg-inverse p-6 overflow-auto animate-core-circle-in rounded-b-core-circle-2xl",
  codeBlock: "text-core-circle-text-inverse font-mono text-[12px] leading-relaxed",
};
