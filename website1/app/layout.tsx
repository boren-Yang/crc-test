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
        margin: 0 
      }}>
        <header style={{ 
  display: 'flex', 
  alignItems: 'center', 
  justifyContent: 'center', 
  flexWrap: 'wrap', // 重要：讓按鈕在空間不足時自動掉到下一行
  padding: '10px' 
}}>
          {/* Logo 區塊 */}
          <Link href="/" style={{ textDecoration: 'none', color: 'inherit', display: 'flex', alignItems: 'center' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <img src="/99.png" alt="Logo" width="110" />
              <span style={{ fontWeight: 'bold', fontSize: '40px' }}>腸健檢</span>
            </div>
          </Link>

          {/* 導覽列 */}
          <nav style={{ flex: 1, display: 'flex', justifyContent: 'center', gap: '10px' }}>
            <Link href="/about" style={{ textDecoration: 'none' }}>
              <button style={navButtonStyle}>關於我們</button>
            </Link>
            <Link href="/product" style={{ textDecoration: 'none' }}>
            <button style={navButtonStyle}>產品</button>
            </Link>
            <Link href="/qa" style={{ textDecoration: 'none' }}>
              <button style={navButtonStyle}>常見問題</button>
            </Link>
            <Link href="/video" style={{ textDecoration: 'none' }}>
              <button style={navButtonStyle}>教學影片</button>
            </Link>
            <Link href="/doctor" style={{ textDecoration: 'none' }}>
              <button style={navButtonStyle}>醫師團隊</button>
            </Link>
            <Link href="/partner" style={{ textDecoration: 'none' }}>
              <button style={navButtonStyle}>合作廠商</button>
            </Link>
            <a 
            href="https://www.toolsbiotech.com/index.php" // ★ 這裡記得換成真實的集團網址
            target="_blank" 
            rel="noopener noreferrer" 
            style={{ textDecoration: 'none' }}
            >
              <button style={navButtonStyle}>集團介紹</button>
            </a>
          </nav>

          {/* 右側平衡區塊 */}
          <div style={{ width: '250px' }}></div>
        </header>

        {/* 主要內容區：使用 flex: 1 確保它佔滿空間，把 footer 推到底部 */}
        <main style={{ flex: 1 , display: 'flex', flexDirection: 'column'}}>
          {children}
        </main>

        {/* --- 灰色 Footer Column --- */}
        <footer style={{ 
          backgroundColor: '#CCCCCC', 
          color: '#FFFFFF', 
          padding: '40px 20px', 
          fontSize: '14px',
          width: '100%'
        }}>
          <div style={{ 
            maxWidth: '1200px', 
            margin: '0 auto', 
            display: 'flex', 
            justifyContent: 'flex-start',
            alignItems: 'flex-start',
            flexWrap: 'wrap',
            gap: '300px'
          }}>
            <div>
              <p style={{ fontWeight: 'bold', margin: 0 }}>
                圖爾斯生物科技股份有限公司 © 2021 BIOTOOLS Co., Ltd. All Rights Reserved
              </p>
            </div>
            <div style={{ textAlign: 'left' }}>
              <p style={{ margin: '0 0 5px 0' }}>公司總部-新北市汐止區新台五路一段93號9樓之9</p>
              <p style={{ margin: '0 0 5px 0' }}>公司電話-02-26972697#260  </p>
            </div>
          </div>
        </footer>
        <FloatingMenu />
        <SpeedInsights />
      </body>
    </html>
  );
}

// 為了讓代碼乾淨，把重複的按鈕樣式抽出來
const navButtonStyle = {
  padding: '10px 25px',
  backgroundColor: '#EF7E00',
  color: 'white',
  border: 'none',
  borderRadius: '25px',
  cursor: 'pointer',
  fontSize: '16px',
  fontWeight: 'bold' as const,
  transition: '0.3s'
};