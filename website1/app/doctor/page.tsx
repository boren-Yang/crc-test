export default function DoctorPage() {

  // ★ 1. 醫師資料庫 (Array)
  const doctors = [
    {
      name: '陳國華 醫師',
      enName: 'Dr. K.H. Chen',
      img: '/md1.png', // 請記得準備 5 張醫師照片，檔名 doc1.png ~ doc5.png
      edu: '國立台灣大學醫學系學士 / 美國約翰霍普金斯大學公共衛生碩士',
      exp: '現任：大腸直腸外科 主任醫師 / 曾任：醫學中心大腸直腸外科 主治醫師 / 台灣大腸直腸外科醫學會 理事',
      spec: ['腹腔鏡微創大腸直腸手術', '達文西機械手臂手術', '大腸癌篩檢與治療', '複雜性廔管手術']
    },
    {
      name: '林筱涵 醫師',
      enName: 'Dr. S.H. Lin',
      img: '/fd1.png',
      edu: '台北醫學大學醫學系學士 / 長庚大學臨床醫學研究所博士候選人',
      exp: '現任：大腸直腸外科 主治醫師 / 曾任：林口長庚醫院 外科部總醫師 / 日本國立癌症中心 研修醫師',
      spec: ['無痛大腸鏡檢查', '微創痔瘡手術', '女性肛門疾病', '直腸脫垂修補']
    },
    {
      name: '王志明 醫師',
      enName: 'Dr. C.M. Wang',
      img: '/md2.png',
      edu: '高雄醫學大學醫學系學士 / 陽明交通大學生醫光電研究所碩士',
      exp: '現任：大腸直腸外科 主治醫師 / 曾任：台中榮總大腸直腸外科 研究醫師 / 消化系外科專科醫師',
      spec: ['3D立體微創手術', '便秘與功能性腸胃障礙', '大腸癌肉切除術 (EMR/ESD)', '肛門廔管手術']
    },
    {
      name: '張文宗 醫師',
      enName: 'Dr. W.T. Chang',
      img: '/md3.png',
      edu: '中國醫藥大學中西醫結合研究所博士 / 國防醫學院醫學系學士',
      exp: '現任：大腸直腸外科 資深主治醫師 / 曾任：三軍總醫院大腸直腸外科 主任 / 教育部部定 副教授',
      spec: ['發炎性腸道疾病 (IBD) 治療', '遺傳性大腸癌基因諮詢', '大腸直腸癌輔助化學治療', '人工肛門照護']
    },
    {
      name: '吳雅婷 醫師',
      enName: 'Dr. Y.T. Wu',
      img: '/fd2.png',
      edu: '成功大學醫學系學士 / 成大醫院一般醫學訓練優良醫師',
      exp: '現任：大腸直腸外科 專任醫師 / 曾任：成大醫院大腸直腸外科 總醫師 / 台灣外科醫學會 專科醫師',
      spec: ['婦女肛門疾病 (痔瘡、肛裂)', '無痛腸胃鏡檢測', '慢性便秘營養諮詢', '大腸水療與腸道健康管理']
    }
  ];

  return (
    <div style={{ 
      minHeight: '100vh',
      backgroundColor: '#f4f7f6', // 淡青灰色背景，很適合醫療主題
      padding: '60px 20px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center'
    }}>

      {/* 2. 頁面標題 */}
      <div style={{ textAlign: 'center', marginBottom: '60px' }}>
        <h1 style={{ 
          color: '#182A5B', 
          fontSize: '36px', 
          fontWeight: 'bold', 
          marginBottom: '15px',
          letterSpacing: '2px'
        }}>
          專業醫師團隊
        </h1>
        <p style={{ color: '#666', fontSize: '16px', maxWidth: '600px', lineHeight: '1.6' }}>
          我們擁有來自各大醫學中心的資深專科醫師，提供您最專業、最安心的腸道健康照護與諮詢服務。
        </p>
      </div>

      {/* 3. 醫師卡片列表 (Flexbox 自動換行) */}
      <div style={{ 
        display: 'flex', 
        flexWrap: 'wrap',       
        justifyContent: 'center', 
        gap: '40px',            
        maxWidth: '1200px', 
        width: '100%' 
      }}>
        
        {doctors.map((doctor, index) => (
          <div key={index} style={{ 
            backgroundColor: 'white',
            width: '350px',       // 固定卡片寬度
            borderRadius: '15px',
            overflow: 'hidden',
            boxShadow: '0 10px 30px rgba(0,0,0,0.05)', // 柔和陰影
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            padding: '40px 25px',
            textAlign: 'center',
            borderTop: '5px solid #EF7E00' // ★ 頂部橘色裝飾線
          }}>
            
            {/* A. 圓形頭像 */}
            <div style={{ 
              width: '120px', 
              height: '120px', 
              borderRadius: '50%', 
              overflow: 'hidden',
              marginBottom: '20px',
              border: '3px solid #eee',
              backgroundColor: '#f0f0f0' // 若圖片沒載入時的底色
            }}>
              <img 
                src={doctor.img} 
                alt={doctor.name} 
                style={{ width: '100%', height: '100%', objectFit: 'cover' }} 
              />
            </div>

            {/* B. 姓名與英文名 */}
            <h2 style={{ fontSize: '22px', color: '#333', fontWeight: 'bold', marginBottom: '5px' }}>
              {doctor.name}
            </h2>
            <p style={{ fontSize: '14px', color: '#888', marginBottom: '20px', fontWeight: '500' }}>
              {doctor.enName}
            </p>

            {/* C. 分隔線 */}
            <div style={{ width: '50px', height: '2px', backgroundColor: '#EF7E00', marginBottom: '20px' }}></div>

            {/* D. 學經歷 (靠左對齊比較好閱讀) */}
            <div style={{ textAlign: 'left', width: '100%', marginBottom: '20px' }}>
               <h4 style={{ fontSize: '15px', color: '#182A5B', fontWeight: 'bold', marginBottom: '8px' }}>
                 【學經歷】
               </h4>
               <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6', marginBottom: '10px' }}>
                 {doctor.edu}
               </p>
               <p style={{ fontSize: '14px', color: '#555', lineHeight: '1.6' }}>
                 {doctor.exp}
               </p>
            </div>

            {/* E. 專長 (使用標籤樣式) */}
            <div style={{ textAlign: 'left', width: '100%' }}>
              <h4 style={{ fontSize: '15px', color: '#182A5B', fontWeight: 'bold', marginBottom: '10px' }}>
                【專長領域】
              </h4>
              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '8px' }}>
                {doctor.spec.map((item, i) => (
                  <span key={i} style={{ 
                    backgroundColor: '#E3F2FD', // 淡藍色背景
                    color: '#1565C0',           // 深藍色文字
                    padding: '4px 10px', 
                    borderRadius: '15px', 
                    fontSize: '13px',
                    fontWeight: '500'
                  }}>
                    {item}
                  </span>
                ))}
              </div>
            </div>

          </div>
        ))}

      </div>
    </div>
  );
}