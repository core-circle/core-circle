export const textInputPlaygroundStyles = {
  container: "bg-white rounded-core-circle-2xl border border-core-circle-border-main shadow-core-circle-subtle overflow-hidden",
  layout: "flex flex-col lg:flex-row",
  
  // Controls Panel
  controlsWrapper: "w-full lg:w-[380px] bg-core-circle-bg-page/30 border-r border-core-circle-border-main p-8 space-y-8",
  controlLabel: "block text-[10px] font-core-circle-bold text-core-circle-text-muted uppercase tracking-wider mb-2",
  selectField: "w-full px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-colors cursor-pointer",
  gridTwoCols: "grid grid-cols-2 gap-4",
  dividerSection: "space-y-4 border-t border-core-circle-border-main pt-6",
  flexGapSection: "flex gap-6 border-t border-core-circle-border-main pt-6",
  checkboxLabel: "flex items-center gap-3 cursor-pointer group",
  checkboxInput: "w-4 h-4 rounded-core-circle-xs border-core-circle-border-main text-core-circle-primary focus:ring-core-circle-primary",
  checkboxText: "text-core-circle-xs text-core-circle-text-main font-core-circle-medium group-hover:text-core-circle-primary transition-colors capitalize",
  textInput: "w-full px-3 py-2 bg-white border border-core-circle-border-main rounded-core-circle-md text-core-circle-xs outline-none focus:border-core-circle-primary transition-colors",
  
  // Preview Panel
  previewWrapper: "flex-1 flex flex-col bg-white",
  previewArea: "flex-1 flex items-center justify-center p-20 min-h-[350px] bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:20px_20px]",
  
  // Code Snippet Panel
  codeSection: "p-8 bg-core-circle-bg-inverse border-t border-core-circle-border-main",
  codeHeader: "flex items-center justify-between mb-4",
  codeTitle: "text-core-circle-xs font-core-circle-bold text-core-circle-text-inverse opacity-60 uppercase tracking-widest flex items-center gap-2",
  copyButton: "text-core-circle-xs text-core-circle-primary hover:text-white transition-colors flex items-center gap-2",
  codeBlock: "text-core-circle-text-inverse font-mono text-[12px] leading-relaxed overflow-x-auto p-4 bg-black/20 rounded-core-circle-lg"
};
