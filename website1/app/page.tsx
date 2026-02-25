export default function Home() {
  return (
    <main>
      {/* 只有在手機版顯示的區塊 (md 以上就隱藏) */}
      <div className="block md:hidden bg-blue-100 p-4">
        <h1>這是專屬手機版的標題</h1>
        <img src="bg1.png" alt="mobile" className="w-full" />
      </div>
      <div className="bg-red-500 text-white p-10 text-3xl">
        如果背景是紅色，代表 Tailwind 成功了！
      </div>
      {/* 只有在電腦版顯示的區塊 (預設隱藏，md 以上才變 flex 或 block) */}
      <div className="hidden md:block bg-green-100 p-10">
        <h1>這是專屬電腦版的超大橫幅</h1>
        <div className="h-[700px]">
           <img src="/desktbg.png" className="w-full h-full object-cover" />
        </div>
      </div>
    </main>
  );
}