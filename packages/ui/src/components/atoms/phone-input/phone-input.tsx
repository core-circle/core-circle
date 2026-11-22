'use client';

import * as React from 'react';
import { cn } from '../../../utils/cn';
import {
  PhoneInputProps,
  CountryData,
} from '../../../interface/atoms/phone-input/phone-input.types';
import {
  phoneInputContainerVariants,
  phoneInputGroupVariants,
  phoneInputVariants,
  countryTriggerVariants,
} from './phone-input.styles';
import { ChevronDown, SearchIcon, CheckIcon } from '@core-circle/icons';
import { Label } from '../label/label';

export const DEFAULT_COUNTRIES: CountryData[] = [
  { name: 'United States', code: 'US', dialCode: '+1', flag: '🇺🇸', mask: '(###) ###-####' },
  { name: 'United Kingdom', code: 'GB', dialCode: '+44', flag: '🇬🇧', mask: '#### ######' },
  { name: 'India', code: 'IN', dialCode: '+91', flag: '🇮🇳', mask: '##### #####' },
  { name: 'Canada', code: 'CA', dialCode: '+1', flag: '🇨🇦', mask: '(###) ###-####' },
  { name: 'Germany', code: 'DE', dialCode: '+49', flag: '🇩🇪', mask: '#### ########' },
  { name: 'France', code: 'FR', dialCode: '+33', flag: '🇫🇷', mask: '# ## ## ## ##' },
  { name: 'Australia', code: 'AU', dialCode: '+61', flag: '🇦🇺', mask: '#### ### ###' },
  { name: 'Japan', code: 'JP', dialCode: '+81', flag: '🇯🇵', mask: '## #### ####' },
  { name: 'Singapore', code: 'SG', dialCode: '+65', flag: '🇸🇬', mask: '#### ####' },
  { name: 'Brazil', code: 'BR', dialCode: '+55', flag: '🇧🇷', mask: '(##) #####-####' },
  { name: 'United Arab Emirates', code: 'AE', dialCode: '+971', flag: '🇦🇪', mask: '## ### ####' },
  { name: 'Switzerland', code: 'CH', dialCode: '+41', flag: '🇨🇭', mask: '## ### ## ##' },
];

export function formatPhoneNumber(value: string, mask?: string): string {
  if (!mask) return value;
  const digits = value.replace(/\D/g, '');
  let formatted = '';
  let digitIndex = 0;

  for (let i = 0; i < mask.length && digitIndex < digits.length; i++) {
    if (mask[i] === '#') {
      formatted += digits[digitIndex++];
    } else {
      formatted += mask[i];
    }
  }

  return formatted;
}

export const PhoneInput = React.forwardRef<HTMLInputElement, PhoneInputProps>(
  (
    {
      className,
      wrapperClassName,
      variant = 'outline',
      size = 'md',
      label,
      error,
      helperText,
      fullWidth = false,
      defaultCountry = 'US',
      preferredCountries,
      searchPlaceholder = 'Search countries...',
      onPhoneChange,
      id,
      value,
      defaultValue,
      disabled,
      ...props
    },
    ref
  ) => {
    const generatedId = React.useId();
    const inputId = id || generatedId;

    const initialCountry =
      DEFAULT_COUNTRIES.find((c) => c.code === defaultCountry.toUpperCase()) ||
      DEFAULT_COUNTRIES[0];

    const [selectedCountry, setSelectedCountry] = React.useState<CountryData>(initialCountry);
    const [dropdownOpen, setDropdownOpen] = React.useState(false);
    const [searchQuery, setSearchQuery] = React.useState('');
    const [phoneDigits, setPhoneDigits] = React.useState<string>(() => {
      const init = (value as string) || (defaultValue as string) || '';
      return init.replace(/^\+\d+\s*/, '');
    });

    const dropdownRef = React.useRef<HTMLDivElement>(null);

    React.useEffect(() => {
      if (value !== undefined) {
        setPhoneDigits((value as string).replace(/^\+\d+\s*/, ''));
      }
    }, [value]);

    React.useEffect(() => {
      const handleClickOutside = (e: MouseEvent) => {
        if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
          setDropdownOpen(false);
        }
      };
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const filteredCountries = React.useMemo(() => {
      if (!searchQuery.trim()) return DEFAULT_COUNTRIES;
      const q = searchQuery.toLowerCase();
      return DEFAULT_COUNTRIES.filter(
        (c) =>
          c.name.toLowerCase().includes(q) ||
          c.code.toLowerCase().includes(q) ||
          c.dialCode.includes(q)
      );
    }, [searchQuery]);

    const handleSelectCountry = (country: CountryData) => {
      setSelectedCountry(country);
      setDropdownOpen(false);
      setSearchQuery('');
      const formatted = formatPhoneNumber(phoneDigits, country.mask);
      onPhoneChange?.(`${country.dialCode} ${formatted}`.trim(), phoneDigits, country);
    };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
      const raw = e.target.value;
      const formatted = formatPhoneNumber(raw, selectedCountry.mask);
      setPhoneDigits(raw.replace(/\D/g, ''));
      onPhoneChange?.(`${selectedCountry.dialCode} ${formatted}`.trim(), raw.replace(/\D/g, ''), selectedCountry);
    };

    const hasError = !!error;
    const formattedDisplay = formatPhoneNumber(phoneDigits, selectedCountry.mask);

    return (
      <div
        className={cn(phoneInputContainerVariants({ fullWidth }), wrapperClassName)}
        ref={dropdownRef}
      >
        {label && <Label htmlFor={inputId}>{label}</Label>}

        <div className={cn(phoneInputGroupVariants({ variant, hasError }))}>
          {/* Country Selector Trigger */}
          <button
            type="button"
            disabled={disabled}
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className={cn(countryTriggerVariants({ size }))}
            aria-label="Select country code"
          >
            <span className="text-base leading-none">{selectedCountry.flag}</span>
            <span className="text-slate-600 font-mono text-xs">{selectedCountry.dialCode}</span>
            <ChevronDown size={14} className="text-slate-400" />
          </button>

          {/* Phone Number Input */}
          <input
            {...props}
            ref={ref}
            id={inputId}
            type="tel"
            disabled={disabled}
            value={formattedDisplay}
            onChange={handleInputChange}
            placeholder={selectedCountry.mask || 'Phone number'}
            className={cn(phoneInputVariants({ size }), className)}
          />

          {/* Country Selection Dropdown Popover */}
          {dropdownOpen && (
            <div className="absolute top-full left-0 mt-1.5 w-72 max-h-64 bg-white border border-core-circle-border-main rounded-core-circle-xl shadow-core-circle-floating z-50 overflow-hidden flex flex-col">
              {/* Search Bar */}
              <div className="p-2 border-b border-core-circle-border-main/70 bg-slate-50 flex items-center gap-2">
                <SearchIcon size={14} className="text-slate-400 shrink-0" />
                <input
                  type="text"
                  placeholder={searchPlaceholder}
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  autoFocus
                  className="w-full bg-transparent text-xs text-slate-800 placeholder:text-slate-400 outline-none"
                />
              </div>

              {/* Country List */}
              <div className="overflow-y-auto flex-1 divide-y divide-slate-100">
                {filteredCountries.length === 0 ? (
                  <div className="p-4 text-center text-xs text-slate-400">No countries found</div>
                ) : (
                  filteredCountries.map((c) => {
                    const isSelected = c.code === selectedCountry.code;
                    return (
                      <button
                        key={c.code}
                        type="button"
                        onClick={() => handleSelectCountry(c)}
                        className={cn(
                          'w-full flex items-center justify-between px-3 py-2 text-xs hover:bg-slate-50 transition-colors text-left',
                          isSelected && 'bg-blue-50/60 font-semibold text-core-circle-primary'
                        )}
                      >
                        <div className="flex items-center gap-2.5 truncate">
                          <span className="text-base">{c.flag}</span>
                          <span className="truncate text-slate-700">{c.name}</span>
                          <span className="text-slate-400 font-mono text-[11px]">{c.dialCode}</span>
                        </div>
                        {isSelected && <CheckIcon size={14} className="text-core-circle-primary shrink-0" />}
                      </button>
                    );
                  })
                )}
              </div>
            </div>
          )}
        </div>

        {/* Error or Helper Message */}
        {typeof error === 'string' && error ? (
          <span className="text-xs text-core-circle-destructive">{error}</span>
        ) : helperText ? (
          <span className="text-xs text-core-circle-text-muted">{helperText}</span>
        ) : null}
      </div>
    );
  }
);

PhoneInput.displayName = 'PhoneInput';
export default PhoneInput;
