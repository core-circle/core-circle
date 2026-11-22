import * as React from 'react';
import { VariantProps } from 'class-variance-authority';
import { phoneInputVariants, phoneInputGroupVariants } from '../../../components/atoms/phone-input/phone-input.styles';

export interface CountryData {
  name: string;
  code: string; // ISO 2-letter
  dialCode: string; // e.g. "+1"
  flag: string; // Emoji
  mask?: string; // e.g. "(###) ###-####"
}

export interface PhoneInputProps
  extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'size' | 'onChange'>,
    VariantProps<typeof phoneInputVariants>,
    VariantProps<typeof phoneInputGroupVariants> {
  label?: string;
  helperText?: string;
  error?: string | boolean;
  fullWidth?: boolean;
  defaultCountry?: string;
  preferredCountries?: string[];
  searchPlaceholder?: string;
  onPhoneChange?: (formattedValue: string, rawNumber: string, country: CountryData) => void;
  wrapperClassName?: string;
}
