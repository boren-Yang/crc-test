export default function Home() {
  return (
    <main>
      {/* 導覽列：手機時直排 (col)，電腦時橫排 (row) */}
      <nav className="flex flex-col md:flex-row items-center justify-between p-4 bg-white">
        
      </nav>

      {/* 頂部大圖：高度在手機上設為 300px，電腦才設為 700px */}
      <div className="w-full h-[300px] md:h-[700px] overflow-hidden">
  <img 
    src="bg1.png" 
    alt="bg1" 
    style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
  />
</div>
    </main>
  );
}