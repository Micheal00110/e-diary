
import React from 'react';

interface LandingScreenProps {
  onStart: () => void;
}

const LandingScreen: React.FC<LandingScreenProps> = ({ onStart }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen relative overflow-hidden">
      {/* Background Students Playing Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-5 grayscale bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80')" }}
      />

      <header className="flex items-center justify-between p-6 sticky top-0 z-20 backdrop-blur-md bg-white/20">
        <div className="flex items-center gap-2">
          <div className="bg-[#13ec5b] size-8 rounded-lg flex items-center justify-center shadow-lg rotate-3">
             <span className="text-white font-black">e</span>
          </div>
          <h1 className="text-[#0d1b12] text-xl font-black tracking-tight">Diary</h1>
        </div>
        <button className="text-[#0d1b12] bg-white/50 p-2 rounded-xl shadow-sm">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
          </svg>
        </button>
      </header>

      <div className="relative z-10 p-6">
        <div className="relative rounded-[40px] overflow-hidden mb-8 shadow-2xl border-4 border-white group">
          <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=1200&q=80" 
            alt="Happy Kenyan Students" 
            className="w-full h-[320px] object-cover transition-transform duration-700 group-hover:scale-110" 
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-8">
            <span className="text-white/80 font-black text-xs uppercase tracking-[0.3em] mb-2">Welcome to Future Ed</span>
            <h2 className="text-white text-4xl font-black leading-none drop-shadow-lg">Joy in Learning.</h2>
          </div>
        </div>

        <div className="space-y-4 mb-10">
          <h2 className="text-[#0d1b12] text-4xl font-black leading-[0.9] tracking-tighter">Revolutionize School Life</h2>
          <p className="text-[#4c9a66] text-lg font-medium leading-relaxed opacity-90">
            A seamless, CBC-aligned digital diary connecting Kenyan schools and parents like never before.
          </p>
        </div>

        <button 
          onClick={onStart}
          className="w-full bg-[#13ec5b] text-[#0d1b12] font-black py-6 rounded-3xl text-xl shadow-xl active:scale-[0.98] hover:bg-[#10d050] transition-all flex items-center justify-center gap-3 mb-12 border-b-8 border-[#0fb84a]"
        >
          <span>Activate School</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M221.66,133.66l-72,72a8,8,0,0,1-11.32-11.32L196.69,136H40a8,8,0,0,1,0-16H196.69L138.34,61.66a8,8,0,0,1,11.32-11.32l72,72A8,8,0,0,1,221.66,133.66Z"></path></svg>
        </button>

        <section className="grid grid-cols-2 gap-4">
           <div className="bg-white p-6 rounded-[32px] border-2 border-[#cfe7d7] shadow-sm flex flex-col gap-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10">
               <CalendarIcon />
             </div>
             <div className="bg-[#f0f9f2] size-10 rounded-xl flex items-center justify-center text-[#13ec5b]">
               <CalendarIcon />
             </div>
             <h4 className="font-black text-sm uppercase tracking-tighter">Daily Sync</h4>
           </div>
           <div className="bg-white p-6 rounded-[32px] border-2 border-[#cfe7d7] shadow-sm flex flex-col gap-4 relative overflow-hidden">
             <div className="absolute top-0 right-0 p-2 opacity-10">
               <CollaborationIcon />
             </div>
             <div className="bg-[#f0f9f2] size-10 rounded-xl flex items-center justify-center text-[#13ec5b]">
               <CollaborationIcon />
             </div>
             <h4 className="font-black text-sm uppercase tracking-tighter">CBC Ready</h4>
           </div>
        </section>

        <section className="mt-12 mb-12 relative">
           <div className="bg-black text-white p-8 rounded-[40px] shadow-2xl overflow-hidden">
              <img 
                src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=600&q=50" 
                className="absolute inset-0 w-full h-full object-cover opacity-20"
                alt="Students"
              />
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-4">Trusted by 200+ Institutions</h3>
                <p className="text-white/60 text-sm leading-relaxed mb-6">From Nairobi to Mombasa, we are building a stronger bridge for the next generation.</p>
                <div className="flex gap-2">
                   {[1,2,3,4].map(i => (
                     <img key={i} src={`https://i.pravatar.cc/100?u=school${i}`} className="size-8 rounded-full border-2 border-white/20" alt="partner" />
                   ))}
                </div>
              </div>
           </div>
        </section>
      </div>
    </div>
  );
};

// Icons (Same as original but smaller for space)
const CalendarIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Zm0,176H48V80H208V208ZM208,64H48V48H72v8a8,8,0,0,0,16,0V48h80v8a8,8,0,0,0,16,0V48h24V64Z"></path></svg>;
const CollaborationIcon = () => <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Z"></path></svg>;

export default LandingScreen;
