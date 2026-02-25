/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",      // 這是最重要的，對應你的 app 目錄
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",    // 以防萬一你有用到 pages
    "./components/**/*.{js,ts,jsx,tsx,mdx}", // 如果之後有建立 components 資料夾
    "./src/**/*.{js,ts,jsx,tsx,mdx}",      // 保留也沒關係
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}