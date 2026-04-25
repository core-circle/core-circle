/**
 * Simple regex-based syntax highlighter for JSX/HTML code snippets.
 */
export const highlightCode = (code: string) => {
  if (!code) return '';

  // Escape HTML entities
  let output = code
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');

  // Tokenize
  // 1. Tags: <Button or </Button
  output = output.replace(/(&lt;\/?)(\w+)/g, '$1__TAG__$2__END__');
  
  // 2. Props: variant= or size=
  output = output.replace(/([\s\n])(\w+)=/g, '$1__PROP__$2__END__=');
  
  // 3. Strings: "primary" or "large"
  output = output.replace(/(".*?")/g, '__STR__$1__END__');

  // Inject Spans
  return output
    .replace(/__TAG__(\w+)__END__/g, '<span class="text-core-circle-primary">$1</span>')
    .replace(/__PROP__(\w+)__END__/g, '<span class="text-core-circle-warning">$1</span>')
    .replace(/__STR__("(?:.*?)")__END__/g, '<span class="text-core-circle-secondary">$1</span>');
};
