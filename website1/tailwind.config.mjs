/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // 這是最重要的，對應你的 app 目錄
    "./page/**/*.{js,ts,jsx,tsx,mdx}"    // 以防萬一你有用到 pages
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}