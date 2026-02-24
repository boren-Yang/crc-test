import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import FloatingMenu from "./FloatingMenu";
const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="zh-TW">
      <body className={inter.className} style={{ 
        display: 'flex', 
        flexDirection: 'column', 
        minHeight: '100vh', 
        margin: 0,
        overflowX: 'hidden' // 避免手機版左右滑動
      }}>
      <header className="flex flex-col md:flex-row items-center justify-between p-4 md:px-[5%] max-w-[1400px] mx-auto w-full gap-4">
  
  {/* Logo 區塊：手機縮小，電腦恢復大字 */}
  <Link href="/" className="flex items-center gap-3 no-underline text-inherit flex-shrink-0">
    <img src="/99.png" alt="Logo" className="w-[80px] md:w-[110px]" />
    <span className="font-bold text-[28px] md:text-[40px] whitespace-nowrap">腸健檢</span>
  </Link>

  {/* 導覽列：手機置中換行，電腦靠右 (md:justify-end) */}
  <nav className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 flex-1">
  {["關於我們", "產品", "常見問題", "教學影片", "醫師團隊", "合作廠商", "集團介紹"].map((text) => (
    <button 
      key={text} 
      className="
        bg-[#EF7E00] text-white font-bold whitespace-nowrap transition-all duration-300 shadow-sm
        /* 手機版樣式 */
        text-[12px] px-3 py-1.5 rounded-[15px]
        /* 電腦版樣式 (md 以上) */
        md:text-[16px] md:px-6 md:py-2.5 md:rounded-[25px] 
        hover:bg-[#d67100] hover:scale-105
      "
    >
      {text}
    </button>
  ))}
</nav>

</header>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>

        {/* Footer 也加入響應式調整 */}
        <footer className="bg-[#CCCCCC] text-white p-5 w-full">
  <div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-center gap-5 text-center md:text-left">
    <p className="font-bold m-0 text-[12px] md:text-[14px]">
      圖爾斯生物科技股份有限公司 © 2021 BIOTOOLS Co., Ltd.
    </p>
    <div className="text-[12px] md:text-[14px]">
      <p className="m-0">公司總部-新北市汐止區新台五路一段93號9樓之9</p>
      <p className="m-0">公司電話-02-26972697#260</p>
    </div>
  </div>
</footer>
        <FloatingMenu />
        <SpeedInsights />
      </body>
    </html>
  );
}

// 修改按鈕樣式：讓字體和間距能自動縮放
const navButtonStyle = {
  // padding 和 fontSize 改到上面的 className 處理了
  backgroundColor: '#EF7E00',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontWeight: 'bold' as const,
  whiteSpace: 'nowrap' as const,
  transition: '0.3s',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
};