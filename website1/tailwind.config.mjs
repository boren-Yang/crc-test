/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    // 如果你有其他存放元件的資料夾，也要加在這裡
  ],
  theme: {
    extend: {},
  },
  plugins: [],
};