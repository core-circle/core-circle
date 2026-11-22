import { cn } from './cn';

describe('cn utility', () => {
  it('should merge classes correctly', () => {
    expect(cn('px-2', 'py-1')).toBe('px-2 py-1');
  });

  it('should resolve tailwind conflicts', () => {
    expect(cn('p-2', 'p-4')).toBe('p-4');
  });

  it('should handle conditionals and falsy values', () => {
    const isHidden = false;
    expect(cn('base', isHidden && 'hidden', null, undefined, 'active')).toBe('base active');
  });
});
