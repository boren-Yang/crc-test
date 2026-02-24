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
        <header 
  className="flex flex-col md:flex-row items-center justify-between" 
  style={{ 
    padding: '20px 5%', 
    width: '100%',
    maxWidth: '1400px', 
    margin: '0 auto', 
    boxSizing: 'border-box',
    gap: '20px'
  }}
>
  {/* Logo 區塊 - 在手機上縮小字體，電腦上恢復大尺寸 */}
  <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <img src="/99.png" alt="Logo" className="w-[80px] md:w-[110px]" style={{ height: 'auto' }} />
      <span className="text-[28px] md:text-[40px] font-bold whitespace-nowrap">
        腸健檢
      </span>
    </div>
  </Link>

  {/* 導覽列 - 手機版自動換行居中 (flex-wrap)，電腦版靠右 (md:justify-end) */}
  <nav 
    className="flex flex-wrap justify-center md:justify-end items-center"
    style={{ 
      gap: '12px', 
      flex: 1,
    }}
  >
    {["關於我們", "產品", "常見問題", "教學影片", "醫師團隊", "合作廠商", "集團介紹"].map((text) => (
      <button 
        key={text} 
        className="px-3 py-2 md:px-5 md:py-2 text-[14px] md:text-[16px]"
        style={navButtonStyle}
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