export default function ProductPage() {
  return (
    <div style={{ 
      display: 'flex',
      flexDirection: 'column',
      width: '100%'
    }}>
      {/* ========================================= */}
      {/* 區塊 2：癌症數據 (修改：左文 / 右圖)      */}
      {/* ========================================= */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: '80px 20px',        // 這裡高度加大，更有氣勢
        backgroundColor: '#F5F7FA'   // ★ 關鍵：加上淺灰藍色背景，區分段落
      }}>
        <div style={{ 
          display: 'flex',           
          justifyContent: 'center',  
          alignItems: 'center',      
          gap: '60px',               
          maxWidth: '1100px',        
          width: '100%',
          flexDirection: 'row-reverse' // ★ 魔法指令：讓原本的左圖右文，變成「左文右圖」
        }}>
          
          {/* 圖片區塊 (因為 row-reverse，它會跑到右邊) */}
          <div style={{ width: '50%', minWidth: '300px' }}> 
            <img 
              src="prod.png"  // ★ 請記得換成你的癌症數據圖檔名
              alt="大腸癌數據分析" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block',
                borderRadius: '12px',
                boxShadow: '0 4px 20px rgba(0,0,0,0.08)' // 加上柔和陰影
              }} 
            />
          </div>

          {/* 文案區塊 (因為 row-reverse，它會跑到左邊) */}
          <div style={{ flex: 1 }}> 
            <h2 style={{ 
              fontSize: '32px', 
              fontWeight: 'bold', 
              marginBottom: '24px',
              color: '#EF7E00', // 或是用參考圖的深橘色
              lineHeight: '1.4'
            }}>
              面對榜首大腸癌，<br/>我們不是無能為力！
            </h2>
            
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '16px', marginBottom: '20px' }}>
              當大腸癌成為男性第 1、女性第 2 的高發癌症時，我們不能再抱持著「不會是我」的僥倖心態。
              這張圖表揭示了近 2 萬人的真實遭遇，且數字仍居高不下。
            </p>
            <p style={{ lineHeight: '1.9', color: '#444', fontSize: '16px' }}>
              然而，這也是唯一能透過「非侵入性檢測」就能早期發現風險的癌症。
              不需要等到症狀出現，也不需要忍受痛苦的檢查，現在透過簡單的居家篩檢，就能掌握腸道狀況。
            </p>

            <button style={{
              marginTop: '30px',
              padding: '12px 35px',
              backgroundColor: '#182A5B', // 深藍色按鈕
              color: 'white',
              border: 'none',
              borderRadius: '30px',
              cursor: 'pointer',
              fontSize: '16px',
              fontWeight: 'bold',
              boxShadow: '0 4px 10px rgba(24, 42, 91, 0.3)'
            }}>
              立即預約檢測(可裝line)
            </button>
          </div>

        </div>
      </div>
      {/* ========================================= */}
      {/* 區塊 1：檢測流程 (維持：左圖 / 右文)      */}
      {/* ========================================= */}
      <div style={{ 
        display: 'flex',
        justifyContent: 'center',
        padding: '60px 20px', // 上下間距加大一點，更有呼吸感
        backgroundColor: '#FFFFFF' // 白色背景
      }}>
        <div style={{ 
          display: 'flex',           
          justifyContent: 'center',  
          alignItems: 'center',      
          gap: '60px',               
          maxWidth: '1100px',        
          width: '100%',
          // 這裡不需要 marginLeft，讓它自然置中比較好看，或者你若堅持要偏右可保留
        }}>
          {/* 左：圖片 */}
          <div style={{ width: '45%', minWidth: '300px' }}> 
            <img 
              src="/prod1.png" 
              alt="檢測流程" 
              style={{ 
                width: '100%', 
                height: 'auto', 
                display: 'block', 
                // 加一點陰影讓圖片浮起來，更有質感
                filter: 'drop-shadow(0 10px 15px rgba(0,0,0,0.1))' 
              }} 
            />
          </div>
          {/* 右：文案 */}
          <div style={{ flex: 1 }}> 
            <h1 style={{ fontSize: '36px', fontWeight: 'bold', marginBottom: '24px', color: '#EF7E00' }}>
              腸健檢 - 居家腸道健康檢測
            </h1>
            <h3 style={{ fontSize: '20px', color: '#333', marginBottom: '16px', fontWeight: '600' }}>
              簡單四步驟，在家就能做
            </h3>
            <p style={{ lineHeight: '1.8', color: '#555', fontSize: '16px' }}>
              1. <strong>居家採集：</strong> 輕鬆在家完成糞便檢體採集。<br/>
              2. <strong>快遞收件：</strong> 專人收件運送，確保檢體品質。<br/>
              3. <strong>實驗檢測：</strong> 實驗室進行高階萃取與分析。<br/>
              4. <strong>報告產出：</strong> 線上隨時查看您的健康評估報告。
            </p>
          </div>
        </div>
      </div>

      

      {/* ========================================= */}
      {/* 底部藍色裝飾條                            */}
      {/* ========================================= */}
      <div style={{ 
        width: '100%',
        padding: '20px 0',
        backgroundColor: '#182A5B',
        textAlign: 'center',
        color: 'white',
        fontSize: '16px',
        letterSpacing: '1px'
      }}>
        持續關注與守護您的腸道健康，祝福您迎向更健康的未來。
      </div>

    </div>
  );
}