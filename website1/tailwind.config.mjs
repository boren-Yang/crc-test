/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx,vue,html}", // 確保路徑覆蓋了你的檔案
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}