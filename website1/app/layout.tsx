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
        <header style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'space-between', // 改為左右撐開
          flexWrap: 'wrap', // 空間不足自動換行
          padding: '10px 20px',
          gap: '10px'
        }}>
          {/* Logo 區塊 - 在手機上會縮小一點 */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/99.png" alt="Logo" className="w-[60px] md:w-[110px]" style={{ maxWidth: '100%' }} />
              <span style={{ fontWeight: 'bold', fontSize: 'clamp(24px, 5vw, 40px)' }}>腸健檢</span>
            </div>
          </Link>

          {/* 導覽列 - 加入 flex-wrap 並優化手機間距 */}
          <nav style={{ 
            display: 'flex', 
            justifyContent: 'center', 
            flexWrap: 'wrap', 
            gap: '8px',
            flex: '1 1 auto', // 讓它自動佔滿剩餘空間
            minWidth: '300px' // 防止擠得太小
          }}>
            {["關於我們", "產品", "常見問題", "教學影片", "醫師團隊", "合作廠商", "集團介紹"].map((text) => (
              <button key={text} style={navButtonStyle}>{text}</button>
            ))}
          </nav>

          {/* 移除了那個會推擠空間的 250px 空白區塊 */}
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
  padding: '6px 12px', // 縮小內距，讓手機版塞得下
  backgroundColor: '#EF7E00',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: 'clamp(12px, 2vw, 16px)', // 自動調整字體大小：最小12px，隨螢幕縮放，最大16px
  fontWeight: 'bold' as const,
  whiteSpace: 'nowrap' as const, // 防止按鈕內的字斷行
  transition: '0.3s'
};