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
        <header className="flex flex-col md:flex-row items-center justify-between p-4 md:px-10 gap-4">
          {/* Logo 區塊 - 在手機上會縮小一點 */}
          <Link href="/" className="flex items-center gap-3 no-underline color-inherit">
            <img src="/99.png" alt="Logo" className="w-[80px] md:w-[110px]" />
            <span className="font-bold text-2xl md:text-4xl whitespace-nowrap">腸健檢</span>
          </Link>

          {/* 導覽列 - 加入 flex-wrap 並優化手機間距 */}
          <nav className="flex flex-wrap justify-center md:justify-end items-center gap-2 md:gap-4 flex-1">
          <Link href="/about"><button style={navButtonStyle}>關於我們</button></Link>
          <Link href="/product"><button style={navButtonStyle}>產品</button></Link>
          <Link href="/qa"><button style={navButtonStyle}>常見問題</button></Link>
          <Link href="/video"><button style={navButtonStyle}>教學影片</button></Link>
          <Link href="/doctor"><button style={navButtonStyle}>醫師團隊</button></Link>
          <Link href="/partner"><button style={navButtonStyle}>合作廠商</button></Link>
          <a href="https://www.toolsbiotech.com/index.php" target="_blank" rel="noopener noreferrer">
      <button style={navButtonStyle}>集團介紹</button>
    </a>
  </nav>
</header>

        <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
          {children}
        </main>

        {/* Footer 也加入響應式調整 */}
        <footer style={{ 
          backgroundColor: '#CCCCCC', 
          color: '#FFFFFF', 
          padding: '20px', 
          fontSize: '14px',
          width: '100%'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            flexDirection: 'column', // 手機預設直排
            gap: '20px',
            // 當螢幕寬度大於 768px 時改為橫排 (這部分建議寫在 CSS 裡，或用 MediaQuery)
          }}>
            <p style={{ fontWeight: 'bold', margin: 0 }}>
              圖爾斯生物科技股份有限公司 © 2021 BIOTOOLS Co., Ltd.
            </p>
            <div>
              <p style={{ margin: '0' }}>公司總部-新北市汐止區新台五路一段93號9樓之9</p>
              <p style={{ margin: '0' }}>公司電話-02-26972697#260</p>
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
  padding: '8px 12px', // 縮小內距，讓手機版塞得下
  backgroundColor: '#EF7E00',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '15px',
  fontWeight: 'bold' as const,
  whiteSpace: 'nowrap' as const, // 防止按鈕內的字斷行
  transition: '0.3s'
};