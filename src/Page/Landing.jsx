import { Link } from "react-router-dom";
import { postsData, userProfile } from "../data/mockData.js";
import SuggestedPeople from "../Components/SuggestedPeople.jsx";
import PostCard from "../Components/01_PostCard.jsx";

export default function Landing() {
  return (
    <div className="min-h-screen bg-black text-white font-sans selection:bg-blue-500/30">
      {/* Premium Navbar */}
      <nav className="bg-black/80 backdrop-blur-lg border-b border-white/10 h-16 sticky top-0 z-50 px-6">
        <div className="max-w-[1200px] mx-auto h-full flex items-center justify-between">
          <div className="flex items-center gap-10">
            <Link to="/" className="text-2xl font-black tracking-tighter text-blue-500 no-underline hover:text-blue-400 transition-colors">
              YellowNex
            </Link>
            <div className="hidden md:flex items-center gap-8 text-[13px] font-bold uppercase tracking-widest text-gray-500">
              <Link to="/network" className="hover:text-white transition-all">Network</Link>
              <Link to="/jobs" className="hover:text-white transition-all">Jobs</Link>
              <Link to="/messages" className="hover:text-white transition-all">Messages</Link>
            </div>
          </div>
          
          <div className="flex items-center gap-6">
            <Link to="/home" className="text-sm font-bold text-gray-400 hover:text-white transition-colors no-underline">
              Sign In
            </Link>
            <Link 
              to="/home"
              className="bg-white text-black px-6 py-2 rounded-full text-sm font-black hover:bg-gray-200 transition-all no-underline shadow-[0_0_20px_rgba(255,255,255,0.1)]"
            >
              Join Now
            </Link>
          </div>
        </div>
      </nav>

      {/* Hero Section - Centered Content */}
      <div className="relative pt-24 pb-32 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-blue-600/10 blur-[120px] rounded-full -z-10"></div>
        <div className="max-w-[1200px] mx-auto px-6 text-center">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight mb-8 leading-[0.9]">
            Connect with the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-500">Professional</span> World.
          </h1>
          <p className="text-xl text-gray-400 mb-12 max-w-2xl mx-auto font-medium leading-relaxed">
            The next generation of professional networking. Built for creators, engineers, and visionaries. 
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/home" className="bg-blue-600 hover:bg-blue-700 text-white px-10 py-4 rounded-full text-lg font-bold transition-all no-underline shadow-lg shadow-blue-500/20">
              Get Started for Free
            </Link>
            <Link to="/network" className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-10 py-4 rounded-full text-lg font-bold transition-all no-underline">
              Search People
            </Link>
          </div>
        </div>
      </div>

      {/* Preview Section - Centered Layout */}
      <div className="max-w-[1200px] mx-auto px-6 py-24 border-t border-white/5">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-black mb-4">Inside our community</h2>
          <p className="text-gray-500">See what's happening right now in your professional circle</p>
        </div>
        
        <div className="flex flex-col lg:flex-row gap-12 items-start justify-center">
          {/* Middle Feed Preview - The Focus */}
          <main className="flex-1 max-w-[600px] w-full flex flex-col gap-6 mx-auto lg:mx-0">
            <div className="bg-[#121212] rounded-2xl border border-white/5 p-6 shadow-xl">
              <div className="flex gap-4 items-center">
                <img src={userProfile.avatar} className="w-12 h-12 rounded-full border border-white/10 object-cover" />
                <div className="flex-1 bg-white/5 border border-white/5 rounded-full px-6 py-3 text-gray-500 text-sm font-medium">
                  What's on your mind?
                </div>
              </div>
            </div>

            <div className="flex flex-col gap-6">
              {postsData.slice(0, 2).map((post) => (
                <PostCard key={post.id} post={post} />
              ))}
            </div>
            
            <Link to="/home" className="group text-center py-5 bg-[#121212] border border-white/5 rounded-2xl text-blue-400 font-bold hover:bg-white/5 transition-all no-underline">
              Explore more trending posts <span className="inline-block transition-transform group-hover:translate-x-1">→</span>
            </Link>
          </main>

          {/* Side Content Previews */}
          <aside className="hidden lg:flex flex-col gap-6 w-[320px]">
            <SuggestedPeople />
            <div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
              <h3 className="font-bold mb-3 text-sm text-gray-300">Trending Groups</h3>
              <div className="space-y-4">
                {["React Developers", "VFX Society", "UI Design Weekly"].map(group => (
                  <div key={group} className="flex justify-between items-center group cursor-pointer">
                    <span className="text-sm text-gray-500 group-hover:text-blue-400 transition-colors">#{group.replace(' ', '')}</span>
                    <span className="text-[10px] bg-white/5 px-2 py-0.5 rounded text-gray-600">Join</span>
                  </div>
                ))}
              </div>
            </div>
          </aside>
        </div>
      </div>

      {/* Minimalist Footer */}
      <footer className="bg-black border-t border-white/5 py-20">
        <div className="max-w-[1200px] mx-auto px-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
            <div>
              <h4 className="text-white font-black mb-6 uppercase text-[10px] tracking-widest">Platform</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <a href="#" className="hover:text-white transition-colors">About</a>
                <a href="#" className="hover:text-white transition-colors">Career</a>
                <a href="#" className="hover:text-white transition-colors">Advertising</a>
              </div>
            </div>
            <div>
              <h4 className="text-white font-black mb-6 uppercase text-[10px] tracking-widest">Support</h4>
              <div className="flex flex-col gap-3 text-sm text-gray-600">
                <a href="#" className="hover:text-white transition-colors">Help Center</a>
                <a href="#" className="hover:text-white transition-colors">Safety</a>
                <a href="#" className="hover:text-white transition-colors">Accessibility</a>
              </div>
            </div>
            <div className="col-span-2 flex flex-col items-end">
              <div className="text-4xl font-black text-blue-500 mb-4 tracking-tighter">YellowNex</div>
              <p className="text-gray-600 text-sm max-w-[200px] text-right">Building the future of professional connections, one node at a time.</p>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-gray-700 text-xs font-medium">© 2026 YellowNex Corp. All rights reserved.</p>
            <div className="flex gap-6 text-[10px] font-bold uppercase tracking-widest text-gray-700">
              <a href="#" className="hover:text-gray-400 transition-colors">Privacy</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Terms</a>
              <a href="#" className="hover:text-gray-400 transition-colors">Cookies</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
