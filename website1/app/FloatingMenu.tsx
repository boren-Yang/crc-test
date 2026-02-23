"use client"; // 必須加這行，因為我們需要監聽視窗滾動和點擊事件

import React, { useEffect, useState } from 'react';
import Link from 'next/link';

export default function FloatingMenu() {
  // 控制「回到最上方」按鈕是否顯示的狀態
  const [showTopBtn, setShowTopBtn] = useState(false);

  // 監聽滾動事件，滾動超過 300px 才顯示「向上箭頭」
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // 回到最上方的功能
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // 共用的圓形按鈕樣式
  const btnStyle = {
    width: '55px',
    height: '55px',
    borderRadius: '50%',
    backgroundColor: '#0066cc', // 配合圖片的深藍色
    color: 'white',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    textDecoration: 'none',
    boxShadow: '0 4px 8px rgba(0,0,0,0.2)',
    cursor: 'pointer',
    border: 'none',
    fontSize: '12px',
    fontWeight: 'bold',
    transition: 'all 0.3s ease',
  };

  return (
    <div style={{
      position: 'fixed',
      bottom: '30px',     // 距離底部 30px
      right: '30px',      // 距離右側 30px
      display: 'flex',
      flexDirection: 'column',
      gap: '15px',        // 按鈕之間的間距
      zIndex: 9999        // 確保浮在所有內容最上層，不會被蓋住
    }}>
      {/* 1. 填寫表單 / 預約按鈕 (假設連到 /contact) */}
      <Link href="https://www.surveycake.com/s/npXMl" style={btnStyle}>
        預約
      </Link>

      {/* 2. Facebook 連結 */}
      <a href="https://www.facebook.com/你們的粉專" target="_blank" rel="noopener noreferrer" style={btnStyle}>
        FB
      </a>

      {/* 3. LINE@ 連結 (將下方網址換成你們的 LINE 專屬加入連結) */}
      <a href="https://line.me/R/ti/p/@990fttjp" target="_blank" rel="noopener noreferrer" style={btnStyle}>
        LINE
      </a>

      {/* 4. 回到最上方按鈕 (有條件顯示) */}
      {showTopBtn && (
        <button 
          onClick={scrollToTop} 
          style={{ ...btnStyle, backgroundColor: 'white', color: '#0066cc' }}
        >
          ▲
        </button>
      )}
    </div>
  );
}