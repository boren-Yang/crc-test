export default function ProductPage() {
  return (
    <div className="w-full flex flex-col">
      
      {/* ========================================= */}
      {/* 區塊 1：癌症數據 (左文 / 右圖)              */}
      {/* ========================================= */}
      <div className="w-full bg-[#F5F7FA] py-12 md:py-20 px-5 flex justify-center">
        {/* 核心佈局： 
          手機版：flex-col (上下疊，圖上文下)
          電腦版：md:flex-row-reverse (左右排，左文右圖)
        */}
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row-reverse items-center gap-10 md:gap-16">
          
          {/* 圖片區塊 */}
          <div className="w-full md:w-1/2 min-w-[300px]"> 
            <img 
              src="prod.png"  // ★ 請記得換成你的癌症數據圖檔名
              alt="大腸癌數據分析" 
              className="w-full h-auto block rounded-xl shadow-[0_4px_20px_rgba(0,0,0,0.08)]"
            />
          </div>

          {/* 文案區塊 */}
          <div className="flex-1 w-full text-center md:text-left"> 
            <h2 className="text-[28px] md:text-[32px] font-bold text-[#EF7E00] leading-snug mb-6">
              面對榜首大腸癌，<br className="hidden md:block" />我們不是無能為力！
            </h2>
            
            <p className="leading-[1.9] text-[#444] text-[15px] md:text-[16px] mb-5 text-justify md:text-left">
              當大腸癌成為男性第 1、女性第 2 的高發癌症時，我們不能再抱持著「不會是我」的僥倖心態。
              這張圖表揭示了近 2 萬人的真實遭遇，且數字仍居高不下。
            </p>
            <p className="leading-[1.9] text-[#444] text-[15px] md:text-[16px] text-justify md:text-left">
              然而，這也是唯一能透過「非侵入性檢測」就能早期發現風險的癌症。
              不需要等到症狀出現，也不需要忍受痛苦的檢查，現在透過簡單的居家篩檢，就能掌握腸道狀況。
            </p>

            {/* 升級版按鈕：加入 hover 和 active 的 Q 彈動畫 */}
            <button className="
              mt-8 px-8 py-3 bg-[#182A5B] text-white font-bold text-[16px] rounded-full 
              shadow-[0_4px_10px_rgba(24,42,91,0.3)]
              transition-all duration-300 ease-in-out
              hover:bg-[#203878] hover:scale-105 hover:shadow-lg
              active:scale-95
            ">
              立即預約檢測 
            </button>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 區塊 2：檢測流程 (左圖 / 右文)              */}
      {/* ========================================= */}
      <div className="w-full bg-white py-12 md:py-20 px-5 flex justify-center">
        {/* 核心佈局： 
          手機版：flex-col (上下疊，圖上文下)
          電腦版：md:flex-row (左右排，左圖右文)
        */}
        <div className="w-full max-w-[1100px] flex flex-col md:flex-row items-center gap-10 md:gap-16">
          
          {/* 左：圖片 */}
          <div className="w-full md:w-[45%] min-w-[300px]"> 
            <img 
              src="/prod1.png" 
              alt="檢測流程" 
              className="w-full h-auto block drop-shadow-xl" 
            />
          </div>

          {/* 右：文案 */}
          <div className="flex-1 w-full text-center md:text-left"> 
            <h1 className="text-[28px] md:text-[36px] font-bold text-[#EF7E00] mb-4 md:mb-6">
              腸健檢 - 居家腸道健康檢測
            </h1>
            <h3 className="text-[18px] md:text-[20px] font-semibold text-[#333] mb-4">
              簡單四步驟，在家就能做
            </h3>
            
            {/* 為了讓條列式在手機版置中時也好看，這裡包了一層 div 讓文字靠左 */}
            <div className="inline-block text-left text-[#555] text-[15px] md:text-[16px] leading-[1.8]">
              <p>1. <strong>居家採集：</strong> 輕鬆在家完成糞便檢體採集。</p>
              <p>2. <strong>快遞收件：</strong> 專人收件運送，確保檢體品質。</p>
              <p>3. <strong>實驗檢測：</strong> 實驗室進行高階萃取與分析。</p>
              <p>4. <strong>報告產出：</strong> 線上隨時查看您的健康評估報告。</p>
            </div>
          </div>

        </div>
      </div>

      {/* ========================================= */}
      {/* 底部藍色裝飾條                              */}
      {/* ========================================= */}
      <div className="w-full py-5 bg-[#182A5B] text-white text-center text-[14px] md:text-[16px] tracking-wide px-4">
        持續關注與守護您的腸道健康，祝福您迎向更健康的未來。
      </div>

    </div>
  );
}