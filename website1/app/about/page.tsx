export default function AboutPage() {
  return (
    <main>
      {/* 1. 頂部的大圖片 (占滿寬度，高度約 10 公分) */}
      <div style={{ width: '100%', height: '1000px', overflow: 'hidden' }}>
        <img 
          src="bg.png" 
          alt="bg" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
      {/* 2. 藍色的 Column 區塊 */}
      <div style={{ 
        width: '100%', 
        backgroundColor: '#182A5B', 
        color: 'white', 
        padding: '20px 0', 
        textAlign: 'center' 
      }}>
        <p style={{ margin: 0, fontSize: '18px', fontWeight: '500' }}>
          持續關注與守護您的腸道健康，祝福您迎向更健康的未來。
        </p>
      </div>

      {/* 3. 下方的介紹內容 */}
      <div style={{ 
  display: 'flex',          // 開啟彈性佈局，讓內容橫向排列
  alignItems: 'center', // 讓內容頂部對齊
  gap: '40px',              // 圖片與文字之間的間距
  maxWidth: '1200px',       // 限制最大寬度
  margin: '40px auto',      // 區塊置中
  padding: '0 5%'           // 左右留一點內距
}}>
  
  {/* 左側圖片 */}
  <div style={{ flex: '0 0 30%' }}> {/* 限制圖片容器佔寬 40% */}
    <img 
      src="/shi.png" 
      alt="示意圖" 
      style={{ width: '100%', height: 'auto' }} 
    />
  </div>

  {/* 右側文案 */}
  <div style={{ flex: 1 }}> {/* 文字佔滿剩餘空間 */}
    <h2 style={{ color: '#182A5B', marginBottom: '20px' }}>
      服務中心介紹
    </h2>
    <p style={{ lineHeight: '1.8', fontSize: '16px', color: '#333' }}>
      這裡可以輸入你的文案內容。例如：<br />
      歡迎來到我們的客戶服務中心。這裡不僅是解決問題的地方，更是我們與您建立信任的起點。
      無論是產品諮詢、維修檢測，還是售後服務，我們專業的團隊始終秉持「以客為尊」的理念，用最親切的態度，提供最迅速的協助。
我們深知您的時間寶貴，因此打造了舒適的等候空間與高效的處理流程，確保每一個需求都能被精準回應。
您的滿意，是我們進步的動力；您的安心，是我們最大的承諾。有任何需要，請隨時告訴我們，我們一直在這裡為您服務。
    </p>
  </div>
</div>
<div style={{ 
  display: 'flex',          // 開啟彈性佈局，讓內容橫向排列
  alignItems: 'center', // 讓內容頂部對齊
  gap: '40px',              // 圖片與文字之間的間距
  maxWidth: '1200px',       // 限制最大寬度
  margin: '40px auto',      // 區塊置中
  padding: '0 5%'           // 左右留一點內距
}}>
  
  {/* 左側圖片 */}
  <div style={{ flex: '0 0 30%' }}> {/* 限制圖片容器佔寬 40% */}
    <img 
      src="/shi.png" 
      alt="示意圖" 
      style={{ width: '100%', height: 'auto' }} 
    />
  </div>

  {/* 右側文案 */}
  <div style={{ flex: 1 }}> {/* 文字佔滿剩餘空間 */}
    <h2 style={{ color: '#182A5B', marginBottom: '20px' }}>
      XXXX介紹
    </h2>
    <p style={{ lineHeight: '1.8', fontSize: '16px', color: '#333' }}>
      這裡可以輸入你的文案內容。例如：<br />
      歡迎來到我們的核心實驗室——這裡是科學與技術交會的前沿基地。我們配備了國際級的尖端分析儀器，
      並由經驗豐富的專家團隊領軍，致力於提供最高規格的檢測與研發服務。
我們深知每一個數據背後都代表著關鍵決策，因此我們嚴格執行標準化作業流程（SOP）與最高品質管理系統。從樣品處理、
實驗操作到數據驗證，每一個環節都追求極致的精確與零誤差。無論是前瞻性的技術開發，還是嚴苛的品質控管，這裡都是孕育創新的搖籃。
專業、嚴謹、高效，我們以科學為證，成為您最值得信賴的技術夥伴，共同開創未來的無限可能。
    </p>
  </div>
</div>
    </main>
  );
}