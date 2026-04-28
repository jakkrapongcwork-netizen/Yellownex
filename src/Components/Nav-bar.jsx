import {
  Home as HomeIcon,
  Users,
  Briefcase,
  MessageSquare,
  Bell,
  UserCircle,
  Grid,
  Search,
  ChevronDown,
} from "lucide-react";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const location = useLocation();
  
  const navItems = [
    { icon: <HomeIcon size={24} />, label: "หน้าแรก", path: "/home" },
    { icon: <Users size={24} />, label: "เครือข่ายของฉัน", path: "/network" },
    { icon: <Briefcase size={24} />, label: "งาน", path: "/jobs" },
    { icon: <MessageSquare size={24} />, label: "ข้อความ", path: "/messages" },
    {
      icon: <Bell size={24} />,
      label: "การแจ้งเตือน",
      path: "/notifications",
      badge: 1,
    },
  ];

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <nav className="bg-[#1a1a1a] border-b border-gray-800 sticky top-0 z-50 w-full px-4">
      <div className="max-w-[1200px] mx-auto flex items-center justify-between h-14">
        {/* Left Side: Logo and Search */}
        <div className="flex items-center gap-2 flex-1">
          <Link
            to="/"
            className="font-bold text-3xl mr-4 select-none no-underline"
            style={{ color: "#FFBE00", fontFamily: "'Sora', sans-serif" }}
          >
            YellowNex
          </Link>

          {/* Search Input */}
          <div className="relative max-w-[280px] w-full hidden md:block">
            <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
              <Search size={16} className="text-gray-400" />
            </div>
            <input
              type="text"
              placeholder="ค้นหา"
              className="block w-full pl-10 pr-3 py-1.5 bg-[#2a2a2a] border border-transparent rounded-md text-sm text-gray-200 placeholder-gray-500 focus:outline-none focus:ring-1 focus:ring-gray-600 focus:border-gray-600 transition-all"
            />
          </div>
        </div>

        {/* Right Side: Navigation Buttons */}
        <div className="flex items-center h-full">
          {navItems.map((item, index) => {
            const active = isActive(item.path);
            return (
              <Link
                key={index}
                to={item.path}
                className={`flex flex-col items-center justify-center h-full min-w-[80px] transition-colors relative group no-underline
                  ${active ? "text-white border-b-2 border-white" : "text-gray-400 hover:text-white"}`}
              >
                <div className="relative mt-1">
                  {item.icon}
                  {item.badge && (
                    <span className="absolute -top-1 -right-1.5 bg-red-600 text-white text-[10px] font-bold px-1 rounded-full border-2 border-[#1a1a1a]">
                      {item.badge}
                    </span>
                  )}
                </div>
                <span className="text-[12px] mt-0.5 font-light">
                  {item.label}
                </span>
              </Link>
            );
          })}

          {/* Profile Button */}
          <Link to="/profile" className={`flex flex-col items-center justify-center h-full min-w-[80px] border-r border-gray-800 no-underline transition-colors ${isActive('/profile') ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white'}`}>
            <UserCircle size={24} />
            <div className="flex items-center text-[12px] mt-0.5">
              <span>ฉัน</span>
              <ChevronDown size={14} />
            </div>
          </Link>

          {/* Business & Premium Links */}
          <div className="hidden lg:flex items-center h-full ml-4 gap-4">
            <button className="flex flex-col items-center justify-center text-gray-400 hover:text-white">
              <Grid size={24} />
              <div className="flex items-center text-[12px] mt-0.5">
                <span>ค้นหาธุรกิจ</span>
                <ChevronDown size={14} />
              </div>
            </button>

            <button className="text-[12px] text-amber-500 underline text-center leading-tight hover:text-amber-400 max-w-[100px] font-medium">
              ลองใช้ Premium ในราคา ฿0
            </button>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
