export const lightTheme = {
  colors: {
    primary: '#3B82F6',
    secondary: '#10B981',
    background: '#F9FAFB',
    surface: '#FFFFFF',
    text: '#1F2937',
    textSecondary: '#6B7280',
    border: '#E5E7EB',
    shadow: 'rgba(0, 0, 0, 0.1)',
  },
  spacing: {
    xs: '0.25rem',
    sm: '0.5rem',
    md: '1rem',
    lg: '1.5rem',
    xl: '2rem',
    xxl: '3rem',
  },
  borderRadius: {
    sm: '0.25rem',
    md: '0.5rem',
    lg: '0.75rem',
    xl: '1rem',
  },
};

export const darkTheme = {
  colors: {
    primary: '#60A5FA',
    secondary: '#34D399',
    background: '#111827',
    surface: '#1F2937',
    text: '#F9FAFB',
    textSecondary: '#D1D5DB',
    border: '#374151',
    shadow: 'rgba(0, 0, 0, 0.3)',
  },
  spacing: lightTheme.spacing,
  borderRadius: lightTheme.borderRadius,
};