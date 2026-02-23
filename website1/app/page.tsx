export default function Home() {
  return (
    <main>
      {/* 1. 頂部的大圖片 (占滿寬度，高度約 10 公分) */}
      <div style={{ width: '100%', height: '700px', overflow: 'hidden' }}>
        <img 
          src="bg1.png" 
          alt="bg1" 
          style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
        />
      </div>
    </main>
  );
}