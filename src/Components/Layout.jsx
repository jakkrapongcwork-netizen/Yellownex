import { Outlet } from "react-router-dom";
import Navbar from "./Nav-bar.jsx";
import SideBar from "./SideBar.jsx";
import SuggestedPeople from "./SuggestedPeople.jsx";
import ChatBar from "./ChatBar.jsx";
import { contactsData } from "../data/mockData.js";
import { useState } from "react";

export default function Layout() {
  const [activeChats, setActiveChats] = useState([]);
  const [chatHistories, setChatHistories] = useState({
    1: [{ text: "สวัสดีครับฟง! มีโปรเจกต์ใหม่มาแนะนำ", type: "inbound" }],
    2: [{ text: "See you later!", type: "inbound" }],
    3: [{ text: "Thanks for the connection!", type: "inbound" }],
    4: [{ text: "Great portfolio!", type: "inbound" }],
  });

  const openChat = (contact) => {
    if (!activeChats.find((c) => c.id === contact.id)) {
      if (activeChats.length >= 3) {
        setActiveChats([...activeChats.slice(1), contact]);
      } else {
        setActiveChats([...activeChats, contact]);
      }
    }
  };

  const closeChat = (id) => {
    setActiveChats(activeChats.filter((c) => c.id !== id));
  };

  const handleSendMessage = (id, text) => {
    setChatHistories((prev) => ({
      ...prev,
      [id]: [...(prev[id] || []), { text, type: "outbound" }],
    }));
  };

  return (
    <div className="min-h-screen bg-black text-gray-200">
      <Navbar />

      {/* Main Content Container - CENTERED */}
      <div className="max-w-[1200px] mx-auto py-8 px-4 flex justify-center">
        <div className="flex flex-col lg:flex-row gap-8 w-full">
          
          {/* Left Column - Fixed Width */}
          <div className="hidden lg:block w-[240px] flex-shrink-0">
            <div className="sticky top-20">
              <SideBar />
            </div>
          </div>

          {/* Middle Column - Flexible & Centered */}
          <div className="flex-1 max-w-[580px] min-w-0 mx-auto lg:mx-0">
            <Outlet />
          </div>

          {/* Right Column - Fixed Width */}
          <div className="hidden xl:block w-[310px] flex-shrink-0">
            <div className="sticky top-20 space-y-4">
              <SuggestedPeople />
              
              <footer className="p-4 text-[11px] text-gray-500 text-center">
                <div className="flex flex-wrap justify-center gap-x-3 gap-y-1 mb-3">
                  <a href="#" className="hover:text-blue-400 hover:underline transition-colors">เกี่ยวกับ</a>
                  <a href="#" className="hover:text-blue-400 hover:underline transition-colors">ช่วยเหลือ</a>
                  <a href="#" className="hover:text-blue-400 hover:underline transition-colors">ความเป็นส่วนตัว</a>
                  <a href="#" className="hover:text-blue-400 hover:underline transition-colors">เงื่อนไข</a>
                </div>
                <div className="flex items-center justify-center gap-1.5 font-semibold text-gray-600">
                  <span className="text-amber-500">YellowNex</span> © 2026
                </div>
              </footer>
            </div>
          </div>
        </div>
      </div>

      {/* Messaging System - Fixed to Bottom Right */}
      <div className="fixed bottom-0 right-0 z-50 flex items-end gap-3 px-6 pointer-events-none">
        <div className="flex items-end gap-3 pointer-events-auto">
          {activeChats.map((contact) => (
            <ChatBar
              key={contact.id}
              contact={contact}
              messages={chatHistories[contact.id] || []}
              onClose={() => closeChat(contact.id)}
              onSendMessage={(text) => handleSendMessage(contact.id, text)}
            />
          ))}
          
          {/* Messaging Drawer */}
          <div className="w-[300px] bg-[#121212] border border-[#262626] rounded-t-2xl shadow-2xl overflow-hidden transition-all duration-300">
            <div className="p-4 border-b border-[#262626] flex justify-between items-center bg-[#1a1a1a] cursor-pointer">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <img src="https://i.pravatar.cc/150?u=tor" className="w-9 h-9 rounded-full border border-gray-800" />
                  <div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-[#121212] rounded-full"></div>
                </div>
                <span className="font-bold text-sm tracking-tight">การรับส่งข้อความ</span>
              </div>
              <div className="flex gap-2 text-gray-400">
                <button className="hover:text-white p-1">⋯</button>
              </div>
            </div>
            <div className="max-h-[420px] overflow-y-auto bg-[#0a0a0a]">
              {contactsData.map((contact) => (
                <div 
                  key={contact.id}
                  onClick={() => openChat(contact)}
                  className="flex items-center gap-4 p-4 hover:bg-[#1a1a1a] cursor-pointer transition-all border-b border-white/[0.02]"
                >
                  <div className="relative flex-shrink-0">
                    <img src={contact.avatar} className="w-12 h-12 rounded-full grayscale-[0.2]" />
                    {contact.online && (
                      <div className="absolute bottom-0 right-0 w-3.5 h-3.5 bg-green-500 border-2 border-[#0a0a0a] rounded-full"></div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex justify-between items-baseline mb-0.5">
                      <h4 className="text-[13px] font-bold truncate text-gray-200">{contact.name}</h4>
                      <span className="text-[10px] text-gray-600 font-medium">{contact.lastTime}</span>
                    </div>
                    <p className="text-[12px] text-gray-500 truncate">{contact.lastMsg}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
