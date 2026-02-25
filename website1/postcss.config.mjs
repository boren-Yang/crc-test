/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    '@tailwindcss/postcss': {}, // 這裡一定要加 @ 符號和 /postcss
    'autoprefixer': {},
  },
};

export default config;