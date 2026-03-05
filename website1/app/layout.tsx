import type { Metadata } from "next";
import "./globals.css";
import Link from "next/link";
import { Inter } from "next/font/google";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";
import FloatingMenu from "./FloatingMenu";
const inter = Inter({ subsets: ["latin"] });
const navLinks = [
  { name: "關於我們", href: "/about" },        // 內部網頁
  { name: "產品", href: "/product" },          // 內部網頁
  { name: "常見問題", href: "/qa" },            // 內部網頁
  { name: "教學影片", href: "/video" },         // 內部網頁
  { name: "醫師團隊", href: "/doctor" },        // 內部網頁
  { name: "合作廠商", href: "/partner" },       // 內部網頁
  { name: "集團介紹", href: "https://www.toolsbiotech.com/index.php" } // 外部網站範例 (請換成真實網址)
];
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
  {navLinks.map((link) => {
    // 判斷是否為外部網址（只要是 http 開頭的就算是外部網址）
    const isExternal = link.href.startsWith("http");

    return (
      <Link 
        key={link.name} 
        href={link.href}
        // 如果是外部網站，就開啟新分頁 (target="_blank")，並加上安全性屬性
        target={isExternal ? "_blank" : "_self"}
        rel={isExternal ? "noopener noreferrer" : ""}
        className="
          /* 1. 基礎樣式與過渡動畫 (加入 inline-block 確保 a 標籤排版正常) */
          inline-block bg-[#EF7E00] text-white font-bold whitespace-nowrap shadow-sm no-underline text-center
          transition-all duration-300 ease-in-out
          
          /* 2. 手機版尺寸 (預設) */
          text-[12px] px-3 py-1.5 rounded-[15px]
          
          /* 3. 電腦版尺寸 (螢幕大於 768px 時觸發) */
          md:text-[16px] md:px-6 md:py-2.5 md:rounded-[25px] 
          
          /* 4. 終極互動效果 */
          hover:bg-[#d67100] hover:scale-105 hover:shadow-lg hover:shadow-[#EF7E00]/50
          active:scale-95
        "
      >
        {link.name}
      </Link>
    );
  })}
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
        <Analytics />
      </body>
    </html>
  );
}

