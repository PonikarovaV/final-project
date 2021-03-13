module.exports = {
    /* configuration-cascading-and-hierarchy */
    root: true,
  
    settings: {
      'import/resolver': {
        typescript: {}
      }
    },
  
    parser: '@typescript-eslint/parser',
  
    parserOptions: {
      project: './tsconfig.json',
      tsconfigRootDir: './',
    },
  
    /* extending-configuration-files */
    extends: [
      'plugin:@typescript-eslint/recommended',
      'airbnb-typescript',
    ],
  
    /* specifying-environments */
    env: {
      browser: true,
    },
  
    /* configuring-plugins */
    plugins: [
      '@typescript-eslint',
      'react-hooks',
    ],
  
    /* configuring-rules */
    rules: {
      /* possible-errors */
      'no-console': [
        'error',
        {
          allow: [
            'warn',
            'error',
            'info',
          ],
        },
      ],
      // Отключено для возможности проверки закодированных экшенов
      'no-bitwise': 'off',
  
      /* best-practices */
      'consistent-return': 'off',
      'no-extend-native': 'error',
  
      /* stylistic-issues */
      'max-len': [
        'error',
        150,
      ],
      // используем _ для примеров - _onClick
      'no-underscore-dangle': 'warn',
  
      '@typescript-eslint/ban-ts-comment': 'off',
  
      // используем запятую в качестве разделителя для interface
      '@typescript-eslint/member-delimiter-style': [
        'error',
        {
          multiline: {
            delimiter: 'comma',
            requireLast: true,
          },
          singleline: {
            delimiter: 'comma',
            requireLast: false,
          },
        },
      ],
  
      '@typescript-eslint/explicit-module-boundary-types': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
  
      'import/no-cycle': 'off',
      // не используем дефолтный экспорт, это приводит к путанице в именах компонентов
      'import/prefer-default-export': 'off',
  
      // accessibility не поддерживается
      'jsx-a11y/anchor-is-valid': 'off',
      'jsx-a11y/click-events-have-key-events': 'off',
      'jsx-a11y/label-has-associated-control': 'off',
      'jsx-a11y/label-has-for': 'off',
      'jsx-a11y/no-static-element-interactions': 'off',
  
      'react/jsx-props-no-spreading': 'off',
      // обязательные дефолтные пропсы нам не нужны, если параметр обязателен, это будет указано в типах
      'react/require-default-props': 'off',
  
      'react-hooks/exhaustive-deps': 'warn',
      'react-hooks/rules-of-hooks': 'error',
    },
  };
  