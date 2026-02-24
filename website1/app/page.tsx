export default function Home() {
  return (
    <main>
      {/* 導覽列：手機時直排 (col)，電腦時橫排 (row) */}
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white">
        <div className="text-xl font-bold">腸健檢</div>
        
        <div className="flex flex-row gap-2 mt-2 md:mt-0">
          <button className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm md:text-base">關於我們</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm md:text-base">產品介紹</button>
          <button className="px-3 py-1 bg-orange-500 text-white rounded-full text-sm md:text-base">常見問題</button>
        </div>
      </nav>

      {/* 頂部大圖：高度在手機上設為 300px，電腦才設為 700px */}
      <div className="w-full h-[300px] md:h-[700px] overflow-hidden">
        <img 
          src="bg1.png" 
          alt="bg1" 
          className="w-full h-full object-cover"
        />
      </div>
    </main>
  );
}