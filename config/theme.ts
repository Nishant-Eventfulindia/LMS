import type { ThemeConfig } from '@/types';

export const themeConfig: ThemeConfig = {
  colors: {
    primary: '#4f46e5',        // Indigo - Main brand color
    secondary: '#7c3aed',      // Purple - Secondary brand color
    accent: '#06b6d4',         // Cyan - Accent color
    background: '#ffffff',     // White - Main background
    surface: '#f8fafc',        // Slate-50 - Card/section backgrounds
    text: {
      primary: '#1f2937',      // Gray-800 - Main text color
      secondary: '#6b7280',    // Gray-500 - Secondary text color
      light: '#9ca3af'         // Gray-400 - Light text color
    },
    button: {
      primary: '#4f46e5',      // Indigo - Primary button background
      primaryText: '#ffffff',  // White - Primary button text
      secondary: '#e5e7eb',    // Gray-200 - Secondary button background
      secondaryText: '#374151' // Gray-700 - Secondary button text
    }
  },
  typography: {
    fontFamily: {
      primary: 'Inter, system-ui, sans-serif',
      heading: 'Inter, system-ui, sans-serif'
    },
    fontSize: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
      '4xl': '2.25rem',
      '5xl': '3rem',
      '6xl': '3.75rem'
    },
    sizes: {
      hero: 'text-3xl md:text-5xl lg:text-6xl',
      section: 'text-2xl md:text-3xl lg:text-4xl',
      card: 'text-lg md:text-xl',
      body: 'text-sm md:text-base lg:text-lg'
    }
  },
  spacing: {
    section: 'py-16 md:py-24',
    container: 'max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'
  },
  borderRadius: {
    card: 'rounded-xl',
    button: 'rounded-lg'
  }
};