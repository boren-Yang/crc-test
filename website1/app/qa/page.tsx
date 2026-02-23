import Link from "next/link"; // 引入 Link，讓按鈕可以點擊跳轉 (選用)

export default function QAPage() {
  
  // ★ 1. 我們把問題和答案放在這裡，這樣之後要新增或修改文字會非常方便！
  const qaList = [
    {
      id: 'Q0',
      question: '預約檢測',
      answer: '預約檢測流程請直接點擊下方按鈕加入官方 LINE 進行諮詢，或滑至頁面底部撥打連絡電話。',
      link: 'https://line.me/R/ti/p/@990fttjp', 
      isExternal: true
    },
    {
      id: 'Q1',
      question: '為什麼一般人應該定期要做疾病篩檢？',
      answer: '一般來說癌症越早發現而進行治療，其存活率就會越好，因此定期且有效的疾病篩檢將有助於我們更早發現癌症病灶，不但提高治癒的機會也能大幅降低相關醫療花費，是我們對自己及家人非常重要的必要投資。',
      link: '/product',
      isExternal: false
    },
    {
      id: 'Q2',
      question: '問卷小卡搞丟了怎麼辦?',
      answer: '請點選旁邊按鈕，直接進入問卷頁面',
      link: 'https://www.surveycake.com/s/33aRM',
      isExternal: true
    },
    {
        id: 'Q3',
        question: '檢測後多久可以收到報告？',
        answer: '一般情況下，我們會在收到檢體後的 7-10 個工作天內寄出紙本報告，您也可以透過線上系統即時查詢電子版報告。'
      }
    
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f5f5f5', // ★ 整個頁面的淡灰色背景
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'      // 讓內容整體置中
    }}>

      {/* 頁面大標題 */}
      <h1 style={{ 
        color: '#D32F2F',       // ★ 紅色標題
        fontSize: '32px',
        fontWeight: 'bold',
        marginBottom: '60px',   // 與下方問題的距離
        letterSpacing: '2px'
      }}>
        常見問題
      </h1>

      {/* ★ 2. 這裡用 map 迴圈，自動把上面的資料變成漂亮的排版 */}
      <div style={{ maxWidth: '800px', width: '100%' }}>
        {qaList.map((item, index) => (
          <div key={index} style={{ marginBottom: '50px' }}>
            
            {/* 問題 Q (粉紅色) */}
            <h3 style={{ 
              color: '#182A5B', 
              fontSize: '20px',
              fontWeight: 'bold',
              marginBottom: '15px'
            }}>
              {item.id}：{item.question}
            </h3>

            {/* 答案 A (深灰色 + 縮排) */}
            <div style={{ 
              marginLeft: '20px', // ★ 向右縮排，做出階層感
              paddingLeft: '15px',
              borderLeft: '3px solid #ddd' // (選用) 左邊加一條細線，增加質感
            }}>
              <p style={{ 
                color: '#555',    // 深灰色
                fontSize: '16px',
                lineHeight: '1.8', // 行高，讓閱讀舒服
                fontWeight: 'bold' // 答案加粗一點點看起來比較清楚
              }}>
                {item.id.replace('Q', 'A')}：{item.answer}
              </p>

            {/* ★ 2. 按鈕區塊：判斷有沒有設定 link，有的話才顯示按鈕 */}
              {item.link && (
                <div style={{ display: 'flex', justifyContent: 'flex-end', marginTop: '10px' }}>
                  {item.isExternal ? (
                    /* 外部連結寫法：用 <a> 標籤，並設定 target="_blank" */
                    <a href={item.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                      <button style={buttonStyle}>
                        點我了解更多 ▶
                      </button>
                    </a>
                  ) : (
                    /* 內部連結寫法：用 Next.js 的 <Link> 標籤 */
                    <Link href={item.link} style={{ textDecoration: 'none' }}>
                      <button style={buttonStyle}>
                        點我了解更多 ▶
                      </button>
                    </Link>
                  )}
                </div>
              )}  
            </div>

          </div>
        ))}
      </div>

    </div>
  );
}
const buttonStyle = {
  backgroundColor: 'white',
  color: '#009688', 
  border: '1px solid #ddd',
  padding: '5px 15px',
  borderRadius: '20px', 
  cursor: 'pointer',
  fontSize: '14px',
  boxShadow: '0 2px 5px rgba(0,0,0,0.05)', 
  fontWeight: 'bold',
  display: 'flex',
  alignItems: 'center',
  gap: '5px'
};