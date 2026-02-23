import React from 'react';

// 1. 建立假資料 (Mock Data)，你可以替換成從 API 抓取的資料
const partnersData = [
  {
    id: 1,
    name: '乳癌團隊 (範例廠商 A)',
    description: '提供最專業的乳房外科與腫瘤協同治療，照護您的健康。',
    imageUrl: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&w=800&auto=format&fit=crop', // 替換成你的圖片
    websiteUrl: 'https://www.google.com', // 替換成廠商官網
    // Google Map 萬用串接法：https://www.google.com/maps/search/?api=1&query=你的地址或地標
    mapAddress: '台北市信義區信義路五段7號', 
  },
  {
    id: 2,
    name: '甲狀腺癌團隊 (範例廠商 B)',
    description: '專精於內分泌系統疾病及甲狀腺相關治療。',
    imageUrl: 'https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?q=80&w=800&auto=format&fit=crop',
    websiteUrl: 'https://www.apple.com',
    mapAddress: '台北市中正區重慶南路一段122號',
  },
  {
    id: 3,
    name: '血液腫瘤團隊 (範例廠商 C)',
    description: '血液及淋巴疾病之專業診斷與尖端醫療技術。',
    imageUrl: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?q=80&w=800&auto=format&fit=crop',
    websiteUrl: 'https://www.microsoft.com',
    mapAddress: '高雄市左營區博愛二路777號',
  },
];

export default function PartnersPage() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-bold text-gray-800 mb-8 border-b pb-4">
        合作廠商
      </h1>

      {/* 使用 CSS Grid 建立響應式排版：手機 1 欄，平板 2 欄，電腦 3 欄 */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {partnersData.map((partner) => {
          // 處理 Google Map 連結，將地址進行 URL 編碼避免破圖
          const googleMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(
            partner.mapAddress
          )}`;

          return (
            <div
              key={partner.id}
              className="bg-white border border-gray-200 rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 flex flex-col overflow-hidden group"
            >
              {/* --- 上半部：點擊前往官網 --- */}
              <a
                href={partner.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-grow cursor-pointer"
              >
                {/* 圖片區塊 */}
                <div className="relative w-full h-56 overflow-hidden bg-gray-100">
                  <img
                    src={partner.imageUrl}
                    alt={partner.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>

                {/* 文字介紹區塊 */}
                <div className="p-5">
                  <h2 className="text-xl font-bold text-gray-800 mb-2">
                    {partner.name}
                  </h2>
                  <p className="text-gray-600 text-sm line-clamp-2">
                    {partner.description}
                  </p>
                </div>
              </a>

              {/* --- 下半部：地址按鈕區塊 --- */}
              <div className="px-5 py-4 border-t border-gray-100 flex items-center justify-between bg-gray-50/50">
                <span className="text-xs text-gray-400">合作對象</span>
                
                {/* 點擊前往 Google Map */}
                <a
                  href={googleMapUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  // z-10 確保按鈕點擊不會被父層影響
                  className="relative z-10 inline-flex items-center gap-1.5 px-4 py-2 bg-blue-50 text-blue-600 hover:bg-blue-600 hover:text-white text-sm font-medium rounded-md transition-colors duration-200"
                >
                  {/* Google Map 簡單的圖標 (SVG) */}
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                    <circle cx="12" cy="10" r="3"></circle>
                  </svg>
                  地址
                </a>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}