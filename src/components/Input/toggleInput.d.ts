import { InputHTMLAttributes, ReactNode } from 'react';

export interface ToggleInputProps extends InputHTMLAttributes<HTMLInputElement> {
  className?: string;
  labelContent?: ReactNode;
}
