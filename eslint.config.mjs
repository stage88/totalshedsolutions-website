import { defineConfig } from 'eslint/config';
import { fixupConfigRules } from '@eslint/compat';
import vitals from 'eslint-config-next/core-web-vitals';
import typescript from 'eslint-config-next/typescript';
import betterTailwindcss from 'eslint-plugin-better-tailwindcss';

const eslintConfig = defineConfig([
  ...fixupConfigRules(vitals),
  ...fixupConfigRules(typescript),
  {
    rules: {
      '@typescript-eslint/ban-ts-comment': 'warn',
      '@typescript-eslint/no-empty-object-type': 'warn',
      '@typescript-eslint/no-explicit-any': 'off',
      '@typescript-eslint/no-unused-vars': [
        'warn',
        {
          vars: 'all',
          args: 'after-used',
          ignoreRestSiblings: false,
          argsIgnorePattern: '^_',
          varsIgnorePattern: '^_',
          destructuredArrayIgnorePattern: '^_',
          caughtErrorsIgnorePattern: '^(_|ignore)',
        },
      ],
      '@next/next/no-img-element': 'off',
      'react/no-unescaped-entities': 'off',
    },
  },
  {
    files: ['**/*.{ts,tsx}'],
    plugins: { 'better-tailwindcss': betterTailwindcss },
    settings: {
      'better-tailwindcss': {
        entryPoint: 'src/app/globals.css',
      },
    },
    rules: {
      ...betterTailwindcss.configs.recommended.rules,
      // Class wrapping is Prettier's job — keep ESLint out of line breaks.
      'better-tailwindcss/enforce-consistent-line-wrapping': 'off',
    },
  },
]);

export default eslintConfig;
