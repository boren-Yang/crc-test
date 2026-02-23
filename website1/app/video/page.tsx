import React from 'react';

export default function VideoPage() {

  // ★ 在這裡設定你的影片資料
  // id: 請填入 YouTube 網址 "v=" 後面的那一串代碼
  // 例如網址是 https://www.youtube.com/watch?v=dQw4w9WgXcQ，id 就是 "dQw4w9WgXcQ"
  const videos = [
    {
      id: 'dQw4w9WgXcQ', // 範例 ID，請換成你的
      title: '如何正確採集糞便檢體？',
      desc: '簡單三步驟，在家輕鬆完成檢體採集，確保檢測準確度。'
    },
    {
      id: 'LXb3EKWsInQ', // 範例 ID
      title: '大腸癌篩檢的重要性',
      desc: '為什麼要做腸道檢查？醫師告訴你早期發現的存活率差異。'
    },
    {
      id: 'kJQP7kiw5Fk', // 範例 ID
      title: '集便紙該怎麼黏貼?',
      desc: '不需要照大腸鏡，透過血液即可篩檢的新技術原理說明。'
    },
    {
      id: 'jNQXAC9IVRw', // 範例 ID
      title: '檢測報告導讀',
      desc: '收到報告後看不懂數據嗎？本影片教您如何解讀您的健康密碼。'
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f9f9f9', // 淡灰色背景
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* 1. 頁面標題區塊 */}
      <div style={{ textAlign: 'center', marginBottom: '50px' }}>
        <h1 style={{ 
          color: '#182A5B', 
          fontSize: '36px', 
          fontWeight: 'bold', 
          marginBottom: '15px',
          letterSpacing: '2px'
        }}>
          影音衛教專區
        </h1>
        <p style={{ color: '#666', fontSize: '16px' }}>
          透過專業醫師與團隊的解說，讓您更了解腸道健康知識。
        </p>
      </div>

      {/* 2. 影片列表區塊 (Flexbox 自動換行排版) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',       // 讓影片多出寬度時自動換行
        justifyContent: 'center', 
        gap: '30px',            // 卡片之間的間距
        maxWidth: '1200px', 
        width: '100%' 
      }}>
        
        {videos.map((video, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white',
            width: '100%',
            maxWidth: '500px',    // 限制每個影片卡片的最大寬度
            borderRadius: '12px', // 圓角
            overflow: 'hidden',   // 確保內容不超出圓角
            boxShadow: '0 4px 15px rgba(0,0,0,0.08)', // 陰影讓卡片浮起來
            display: 'flex',
            flexDirection: 'column'
          }}>
            
            {/* A. 影片播放器 (iframe) */}
            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0 }}>
              {/* 56.25% 是 16:9 的黃金比例，確保影片不會有黑邊 */}
              <iframe 
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                src={`https://www.youtube.com/embed/${video.id}`} 
                title={video.title}
                frameBorder="0" 
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                allowFullScreen
              ></iframe>
            </div>

            {/* B. 影片文字介紹 */}
            <div style={{ padding: '20px' }}>
              <h3 style={{ 
                fontSize: '20px', 
                fontWeight: 'bold', 
                color: '#333', 
                marginBottom: '10px' 
              }}>
                {video.title}
              </h3>
              <p style={{ 
                color: '#666', 
                lineHeight: '1.6', 
                fontSize: '15px' 
              }}>
                {video.desc}
              </p>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}