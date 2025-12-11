"use client"

import { useState } from "react"

export default function Page() {
  const [noCount, setNoCount] = useState(0)
  const [step, setStep] = useState(0)
  const [selectedFoods, setSelectedFoods] = useState<string[]>([])

  // --- Ảnh nền ---
  const backgroundUrl = "https://i.pinimg.com/originals/83/d8/cb/83d8cb443837756a9d03412ee37dfa6b.jpg"
  const mainImage = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExMWZncWJudHp1cGJsZDI4OHZudmpyMG8xcDFna2l3dW5ia3RpbGtkMSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ISTTIpSC3S0fZGQSc0/giphy.gif"
  const step2Image = "https://media2.giphy.com/media/v1.Y2lkPTc5MGI3NjExYXh2bGQ3YXVhYzA2N2NkNWh4eHh6bTNoOHdrYnIzdHQ3eXFkbDMxcCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/3UkqVq3F50bVCi9URl/giphy.gif"
  const step3Image = "https://media1.giphy.com/media/v1.Y2lkPTc5MGI3NjExZG41M2tjczI3YjZsZTdzbzVjZmhqdXBwZjlsZzd0Ymxra2Q4cnpkbCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/evCPQk1auQyRwpelDr/giphy.gif"

  // --- DỮ LIỆU MÓN ĂN (MẪU 2 MÓN) ---
  const foodItems = [
    { 
      id: "Workshop gốm", 
      label: "Workshop làng gốm Bát Tràng (Có bảo tàng nhó)", 
      // ảnh làng gốm
      image: "https://statics.vinpearl.com/bao-tang-gom-bat-trang-4_1682344308.jpg" 
    },
    { 
      id: "Royal City", 
      label: "Tổ hợp trò chơi Legend Heroes Royal City", 
      // Ảnh bánh ngọt (Churros/Bánh quy)
      image: "https://scontent.fhan5-5.fna.fbcdn.net/v/t39.30808-6/577642421_782143171447082_6846004488706153398_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=127cfc&_nc_ohc=b5nI2w7xKpgQ7kNvwHSgkrL&_nc_oc=AdlcapDUmSBkEg5ZJ6dbTz-D9_kkGDiIKtVLmuWodoGAq6Gj_2_V2W91M1uLC-qU0hTxOYKNHaKDyuFwi0-euyBt&_nc_zt=23&_nc_ht=scontent.fhan5-5.fna&_nc_gid=exrhMWxunqRxKGa_WRXqqQ&oh=00_AfkFfH9voF_7KsH0SgWtyUBkXeu31771zog1INt3w_amug&oe=6940BB3E" 
    },
{ 
      id: "Công viên Thủ Lệ", 
      label: "Công viên Thủ Lệ (Có vườn thú, thuỷ cung,...)", 
      // Ảnh công viên
      image: "https://cdn.justfly.vn/400x300/media/202312/19/1702978562-justfly-cong-vien-thu-le-hanoi38.jpg" 
    },
{ 
      id: "Workshop làm hoa", 
      label: "Dear Floral (Workshop làm hoa khô, tiện thay ốp đthoai cậu heheh)", 
      // Ảnh hộp quà noel
      image: "https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/597003581_842500248641040_8208474324782513070_n.jpg?stp=dst-jpg_s590x590_tt6&_nc_cat=102&ccb=1-7&_nc_sid=127cfc&_nc_ohc=73qsdxqEucEQ7kNvwEteCFU&_nc_oc=Adl9ztf6w0V6RJ4pWPSl-1nDCdGdhL9xDxqpZCIVZlX5XMmfRv_6JLxxnlIJmgDVg5ktxdu_kIrtbAM-tMDeYzGV&_nc_zt=23&_nc_ht=scontent.fhan5-7.fna&_nc_gid=dTMbLNJYRoADWIkKGYlQXg&oh=00_AfmrNz6ItEtf3kwkAgthJI-YO3Z0f1SfIZoYmWKunfOFug&oe=6940DAB4" 
    },
{ 
      id: "Workshop làm nến thơm", 
      label: "Memarin (Workshop làm nến thơm)", 
      // Ảnh nến thơm
      image: "https://memarin.vn/wp-content/uploads/2025/05/z6573447960305_aef1e48bb1e42c9d40ec761bc09aa6f1-399x600.jpg" 
    },
{ 
      id: "Workshop Noel", 
      label: "Tam Giác Craft (Workshop trông đángiu ghe)", 
      // Ảnh noel
      image: "https://scontent.fhan5-3.fna.fbcdn.net/v/t51.82787-15/591176297_18541083085040398_3300308815259893418_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=127cfc&_nc_ohc=bjFaA7NwKv4Q7kNvwE6tHat&_nc_oc=Adm0cwAGQyPKJGD8IAKew-miqEIyCtIKbarBC0HgzXWu7ZhtztjBkSiBjXRNGh08aX37V3NSnWXOIj_LlBcpQ-A0&_nc_zt=23&_nc_ht=scontent.fhan5-3.fna&_nc_gid=_MzmpiMklZ7tRy7a9jWQZA&oh=00_AflMLGRck8EBaoXTPX8tdkhjF020GdzxEmYPXEXk_WyOfQ&oe=6940C3CE" 
    },
{ 
      id: "Chuyện Trà và Cà phê", 
      label: "Chuyện Trà và Cà phê (Này toi khong biet chỗ nào đẹp đẹp)", 
      // Ảnh Cafe
      image: "https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/594056305_831497512973778_2659836248517002851_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=SoPuU1RhgDsQ7kNvwGH1moh&_nc_oc=Adl9LBdOM84PxDw9CCyeHMdk895i6VRczzkFnTpt4_3wTFZLagwbIYwBlvm53ysIF7MvxEJn1vwbTIwJkAF47-BH&_nc_zt=23&_nc_ht=scontent.fhan5-7.fna&_nc_gid=xUdJ2ZFiJrQ2qYCxh8fK_Q&oh=00_Afndr8NHPx4qWXmshJkQ-USbqIM2rO498zP4n7rBkoIAnQ&oe=6940C1EB" 
    },
{ 
      id: "Music Box", 
      label: "Nova x MusicBox (toi thấy cái này đẹp, mà khong rành lắm)", 
      // Ảnh music box
      image: "https://scontent.fhan5-7.fna.fbcdn.net/v/t39.30808-6/589261387_122099513529135027_6149632888726700291_n.jpg?_nc_cat=109&ccb=1-7&_nc_sid=127cfc&_nc_ohc=-22yAN2eN9cQ7kNvwESHVV_&_nc_oc=AdmmkIz-miQB77lvoBmbXkZ8a06Y292Q833WJBMaV4FGTEng84rjCXYPO4Cn4N3-LEUhQXL_faWU_Uvx2zUVm-wX&_nc_zt=23&_nc_ht=scontent.fhan5-7.fna&_nc_gid=FDNYOXxIWb2bfyA7Wkbypw&oh=00_AfklXigCirH1rjr-4caNHLSU7FXbIsBzIsJWOC9234yuAw&oe=6940E27F" 
    },
{ 
      id: "Khác", 
      label: "Khác (Gợi ý cho toi nếu cậu khong thíc những cái trên nhé:(( )", 
      // Ảnh ?
      image: "https://i.pinimg.com/736x/5b/02/47/5b0247d140ff9659066d61fa63edc79a.jpg" 
    },

  ]

  const phrases = [
    "Không", "Sao lại không?", "Thật á?", "Nghĩ kỹ đi mà :(",
    "Đi mà, vui lắm đó!", "Đừng phũ phàng thế chứ...",
    "Năn nỉ đó...", "Bấm nút kia đi mà!!!",
    "Thôi được rồi, tớ dỗi đó!", "Đùa thôi, bấm Đồng ý đi :3",
  ]

  const getNoButtonText = () => {
    return phrases[Math.min(noCount, phrases.length - 1)]
  }

  const toggleFood = (id: string) => {
    if (selectedFoods.includes(id)) {
      setSelectedFoods(selectedFoods.filter(item => item !== id))
    } else {
      setSelectedFoods([...selectedFoods, id])
    }
  }

  // --- STEP 3: MÀN HÌNH CHỐT ---
  if (step === 3) {
    return (
      <div 
        className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center text-center px-4"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm mx-4 max-w-md w-full animate-fade-in">
          <img src={step3Image} alt="Mèo ôm nhau" className="h-64 mx-auto drop-shadow-xl rounded-lg mb-6" />
          <h1 className="text-3xl font-bold text-pink-600 mb-4">Xong roiii, hẹn gặp cậu sau nheee🙋‍♂️</h1>
          <p className="text-gray-600">Baiii Baii</p>
        </div>
      </div>
    )
  }

  // --- STEP 2: MÀN HÌNH ĐỆM ---
  if (step === 2) {
    return (
      <div 
        className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 text-center"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        <div className="max-w-md w-full rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm animate-fade-in">
        <img 
  src={step2Image} 
  alt="Excited Cat" 
  // h-[35vh] nghĩa là cao bằng 35% màn hình thiết bị
  className="h-[70vh] w-auto mx-auto rounded-xl mb-6 shadow-md object-contain" 
/>
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Ogeee, xác nhận lại nhé ĐTN</h2>
          {selectedFoods.length > 0 && (
            <p className="text-pink-500 font-medium mb-6">(Quý Cô đã order: {selectedFoods.join(", ")})</p>
          )}
          <button
            onClick={() => setStep(3)}
            className="w-full rounded-full bg-pink-500 py-3 font-bold text-white shadow-lg hover:bg-pink-600 transition-all hover:scale-105"
          >
            Chốt nhé! 👉
          </button>
        </div>
      </div>
    )
  }

  // --- STEP 1: CHỌN MÓN (GIAO DIỆN TRÒN GIỐNG TIKTOK) ---
  if (step === 1) {
    return (
      <div 
        className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 text-center"
        style={{ backgroundImage: `url('${backgroundUrl}')` }}
      >
        {/* Khung chứa nội dung */}
        <div className="max-w-2xl w-full rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm animate-fade-in">
          <h1 className="mb-8 text-3xl font-bold text-pink-600">Cậu muốn đi đâuuu 😋</h1>
          
        {/* SỬA LẠI ĐOẠN GRID NÀY NHÉ */}
          <div className="grid grid-cols-3 gap-4 mb-10 justify-items-center">
            {/* ^^^ grid-cols-3: Chia 3 cột cho gọn (cũ là 2) */}
            {/* ^^^ gap-4: Khoảng cách giữa các món gần nhau hơn (cũ là 8) */}
            
            {foodItems.map((item) => {
              const isSelected = selectedFoods.includes(item.id)
              return (
                <div 
                  key={item.id}
                  onClick={() => toggleFood(item.id)}
                  className="flex flex-col items-center cursor-pointer group"
                >
                  {/* --- CHỈNH KÍCH THƯỚC ẢNH Ở ĐÂY --- */}
                  <div className={`
                    w-24 h-24  /* <--- Cố định kích thước nhỏ (96px) */
                    rounded-full overflow-hidden border-4 transition-all duration-300 shadow-md
                    ${isSelected ? "border-pink-500 scale-105 shadow-pink-300" : "border-pink-200 group-hover:border-pink-300"}
                  `}>
                    <img 
                      src={item.image} 
                      alt={item.label} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  {/* ---------------------------------- */}

                  <div className="mt-3 flex items-center gap-2">
                    <div className={`
                      w-4 h-4 border-2 rounded-sm flex items-center justify-center transition-colors
                      ${isSelected ? "bg-pink-500 border-pink-500" : "border-gray-400 bg-white"}
                    `}>
                      {isSelected && <span className="text-white text-[10px]">✓</span>}
                    </div>
                    
                    <span className={`text-sm font-semibold ${isSelected ? "text-pink-600" : "text-gray-700"}`}>
                      {item.label}
                    </span>
                  </div>
                </div>
              )
            })}
          </div>

          <button
            onClick={() => setStep(2)}
            disabled={selectedFoods.length === 0}
            className={`w-full max-w-xs py-4 rounded-full font-bold text-xl transition-all shadow-lg ${
              selectedFoods.length === 0
                ? "bg-gray-300 text-gray-500 cursor-not-allowed" 
                : "bg-pink-500 text-white hover:bg-pink-600 hover:scale-105"
            }`}
          >
            {selectedFoods.length === 0 ? "Được chọn nhiều hơn 1 cái nheee" : "Chắc chưa ớ 👉"}
          </button>
        </div>
      </div>
    )
  }

  // --- STEP 0: MÀN HÌNH HỎI (GIAO DIỆN MỚI) ---
  return (
    <div 
      className="flex min-h-screen flex-col items-center justify-center bg-cover bg-center px-4 text-center overflow-hidden"
      style={{ backgroundImage: `url('${backgroundUrl}')` }}
    >
      <div className="max-w-md w-full rounded-3xl bg-white/90 p-8 shadow-2xl backdrop-blur-sm mx-4 border border-white/50">
        <img className="mx-auto h-64 mb-6 drop-shadow-xl object-contain" src={mainImage} alt="Cute asking sticker" />
        
        {/* --- TIÊU ĐỀ MÀU GRADIENT --- */}
        <h1 className="mb-8 text-4xl font-extrabold leading-tight text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-red-500 to-pink-500 drop-shadow-sm">
          Ngày 19/12 này cậu rảnh khonggg, Toi mời cậu đi chơi nhé:3
        </h1>

        <div className="flex flex-col items-center justify-center gap-4 relative h-40"> 
          
          {/* --- NÚT ĐỒNG Ý (MÀU NỔI + BÓNG SÁNG) --- */}
          <button
            className="rounded-full bg-gradient-to-r from-pink-500 to-rose-600 px-8 py-4 font-bold text-white shadow-xl shadow-pink-400/50 hover:shadow-pink-500/70 transition-all hover:scale-110 active:scale-95 z-10"
            style={{ fontSize: Math.min(noCount * 5 + 18, 50) }} 
            onClick={() => setStep(1)}
          >
            Đồng ý đi mò 
          </button>

          {/* --- NÚT KHÔNG (CHẠY LUNG TUNG KHI BẤM) --- */}
          <button
            onClick={() => setNoCount(noCount + 1)}
            className={`rounded-full bg-white px-6 py-3 font-bold text-rose-500 shadow-sm border-2 border-rose-200 hover:bg-rose-50 transition-all duration-300
                 ${noCount > 0 ? "absolute" : "relative"} 
            `}
            style={{ 
                // Logic tính toán vị trí ngẫu nhiên
                top: noCount > 0 ? `${Math.random() * 80}%` : 'auto',
                left: noCount > 0 ? `${Math.random() * 60 + 20}%` : 'auto',
                opacity: Math.max(1 - noCount * 0.15, 0), // Mờ dần sau mỗi lần bấm
                pointerEvents: noCount >= 6 ? 'none' : 'auto'
            }}
          >
            {noCount === 0 ? "Không nha" : getNoButtonText()}
          </button>
        </div>
      </div>
    </div>
  )
}