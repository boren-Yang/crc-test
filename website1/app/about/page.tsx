export default function AboutPage() {
  return (
    <main className="w-full">
      {/* 1. 頂部的大圖片 (響應式高度控制) */}
      {/* 手機版高度 h-[300px]，平板 md:h-[500px]，大螢幕 lg:h-[800px] */}
      <div className="w-full h-[300px] md:h-[500px] lg:h-[800px] overflow-hidden">
        <img 
          src="bg.png" 
          alt="bg" 
          className="w-full h-full object-cover"
        />
      </div>

      {/* 2. 藍色的 Column 區塊 */}
      <div className="w-full bg-[#182A5B] text-white py-5 px-4 text-center">
        <p className="m-0 text-[16px] md:text-[18px] font-medium leading-relaxed">
          持續關注與守護您的腸道健康，祝福您迎向更健康的未來。
        </p>
      </div>

      {/* 3. 下方的介紹內容 (區塊一：服務中心) */}
      {/* 關鍵：預設 flex-col(手機上下排)，md:flex-row(電腦左右排) */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-[1200px] mx-auto my-10 md:my-16 px-[5%]">
        
        {/* 圖片區塊：手機佔滿 w-full，電腦佔 w-[30%] */}
        <div className="w-full md:w-[30%] flex-shrink-0">
          <img 
            src="/shi.png" 
            alt="示意圖" 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>

        {/* 文字區塊：自動填滿剩餘空間 flex-1 */}
        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-[#182A5B] text-[24px] md:text-[32px] font-bold mb-4">
            服務中心介紹
          </h2>
          <p className="leading-[1.8] text-[15px] md:text-[16px] text-[#333] text-justify">
            歡迎來到我們的客戶服務中心。這裡不僅是解決問題的地方，更是我們與您建立信任的起點。
            無論是產品諮詢、維修檢測，還是售後服務，我們專業的團隊始終秉持「以客為尊」的理念，用最親切的態度，提供最迅速的協助。
            我們深知您的時間寶貴，因此打造了舒適的等候空間與高效的處理流程，確保每一個需求都能被精準回應。
            您的滿意，是我們進步的動力；您的安心，是我們最大的承諾。有任何需要，請隨時告訴我們，我們一直在這裡為您服務。
          </p>
        </div>
      </div>

      {/* 4. 下方的介紹內容 (區塊二：核心實驗室) */}
      {/* 如果你想讓第二塊的圖片在右邊，可以在 md:flex-row 後面加上 md:flex-row-reverse */}
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-10 max-w-[1200px] mx-auto my-10 md:my-16 px-[5%]">
        
        <div className="w-full md:w-[30%] flex-shrink-0">
          <img 
            src="/shi.png" 
            alt="示意圖" 
            className="w-full h-auto rounded-lg shadow-md" 
          />
        </div>

        <div className="flex-1 w-full text-center md:text-left">
          <h2 className="text-[#182A5B] text-[24px] md:text-[32px] font-bold mb-4">
            核心實驗室介紹
          </h2>
          <p className="leading-[1.8] text-[15px] md:text-[16px] text-[#333] text-justify">
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