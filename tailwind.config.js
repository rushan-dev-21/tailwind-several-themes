export default {
    content: ['./index.html', './src/**/*.{vue,js,ts}'],
    theme: {
        textColor: {
          primary: 'var(--color-text-primary)',
          secondary: 'var(--color-text-secondary)',
          accent: 'var(--color-text-accent)',
          inverse: 'var(--color-text-inverse)',
        },
        backgroundColor: {
          primary: 'var(--color-bg-primary)',
          secondary: 'var(--color-bg-secondary)',
          fill: 'var(--color-bg-fill)',
          brand: 'var(--color-bg-brand)',
          'brand-2': 'var(--color-bg-brand-2)',
        },
        borderColor: {
          secondary: 'var(--color-border-secondary)',
          accent: 'var(--color-border-accent)',
        },
    },
  };
