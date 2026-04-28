import SideBar from "../Components/SideBar.jsx";
import SuggestedPeople from "../Components/SuggestedPeople.jsx";

export default function Network() {
  return (
    <div className="flex flex-col gap-6">
      <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-6">
        <h1 className="text-2xl font-bold text-white mb-2">เครือข่ายของฉัน</h1>
        <p className="text-gray-400">จัดการผู้ติดต่อและคำขอติดตามของคุณที่นี่</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <SuggestedPeople />
        <div className="bg-[#1a1a1a] rounded-xl border border-gray-800 p-4 flex items-center justify-center text-gray-500">
          คำขอที่รอดำเนินการ (0)
        </div>
      </div>
    </div>
  );
}
