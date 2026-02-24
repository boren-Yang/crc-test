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
  justifyContent: 'space-between', 
  flexWrap: 'nowrap', // 在電腦版強制不換行，避免 Logo 跟選單分兩層
  padding: '20px 5%', 
  width: '100%',
  maxWidth: '1400px', // 限制最大寬度，避免在超大螢幕散太開
  margin: '0 auto', // 居中對齊
  boxSizing: 'border-box',
  gap: '20px'
}}>
  {/* Logo 區塊 - 固定寬度，不讓它被壓縮 */}
  <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center', flexShrink: 0 }}>
    <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
      <img src="/99.png" alt="Logo" style={{ width: '110px', height: 'auto' }} />
      <span style={{ 
        fontWeight: 'bold', 
        fontSize: '40px', // 電腦版固定大尺寸
        whiteSpace: 'nowrap'
      }}>腸健檢</span>
    </div>
  </Link>

  {/* 導覽列 - 佔滿剩餘空間並靠右 */}
  <nav style={{ 
    display: 'flex', 
    justifyContent: 'flex-end', 
    alignItems: 'center',
    gap: '12px', 
    flex: 1, // 佔滿中間空間，把按鈕推向最右邊
  }}>
    {["關於我們", "產品", "常見問題", "教學影片", "醫師團隊", "合作廠商", "集團介紹"].map((text) => (
      <button key={text} style={navButtonStyle}>{text}</button>
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
  padding: '10px 22px', // 增加內距讓按鈕看起來更飽滿
  backgroundColor: '#EF7E00',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px', // 在電腦版固定 16px 比較精緻
  fontWeight: 'bold' as const,
  whiteSpace: 'nowrap' as const,
  transition: '0.3s',
  boxShadow: '0 2px 4px rgba(0,0,0,0.1)' // 加一點點陰影增加質感
};