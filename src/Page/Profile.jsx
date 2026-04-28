import { userProfile } from "../data/mockData.js";

export default function Profile() {
  return (
    <div className="flex flex-col gap-4">
      {/* Profile Header Card */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 overflow-hidden">
        <div className="h-48 bg-gradient-to-r from-amber-500 to-amber-800"></div>
        <div className="px-6 pb-6">
          <div className="relative -mt-16 mb-4">
            <img 
              src={userProfile.avatar} 
              alt={userProfile.name} 
              className="w-32 h-32 rounded-full border-4 border-[#1a1a1a] object-cover bg-black"
            />
          </div>
          <h1 className="text-2xl font-bold text-white">{userProfile.name}</h1>
          <p className="text-gray-300 text-lg">{userProfile.headline}</p>
          <p className="text-gray-500 text-sm mt-1">{userProfile.location} • <span className="text-blue-400 font-semibold cursor-pointer hover:underline">ข้อมูลติดต่อ</span></p>
          
          <div className="flex gap-2 mt-4">
            <button className="bg-blue-600 text-white px-4 py-1.5 rounded-full font-semibold hover:bg-blue-700 transition-colors">เปิดรับโอกาสงาน</button>
            <button className="border border-blue-400 text-blue-400 px-4 py-1.5 rounded-full font-semibold hover:bg-blue-400/10 transition-colors">เพิ่มส่วนในโปรไฟล์</button>
          </div>
        </div>
      </div>

      {/* About Section */}
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6">
        <h2 className="text-xl font-bold text-white mb-3">เกี่ยวกับ</h2>
        <p className="text-gray-400">ประสบการณ์ด้าน VFX และ Character FX มุ่งเน้นการสร้างสรรค์งานภาพที่สมจริง...</p>
      </div>
    </div>
  );
}
