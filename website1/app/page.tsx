export default function Home() {
  return (
    <main className="flex-1 flex flex-col">
      {/* 只有在手機版顯示的區塊 (md 以上就隱藏) */}
    
        
  
      <div className="block md:hidden flex-1 flex flex-col bg-[#CCCCCC]">
        <img src="bg1.png" alt="mobile" className="w-full block" />
      </div>
      {/* 只有在電腦版顯示的區塊 (預設隱藏，md 以上才變 flex 或 block) */}
      <div className="hidden md:block flex-1 flex flex-col ">
        
        <div className="h-[700px]">
           <img src="bg1.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
}