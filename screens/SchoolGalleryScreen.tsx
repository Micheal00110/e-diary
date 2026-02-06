
import React from 'react';

interface SchoolGalleryScreenProps {
  onBack: () => void;
}

const IMAGES = [
  "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1516627145497-ae6968895b74?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1509062522246-3755977927d7?auto=format&fit=crop&w=400&q=80",
];

const SchoolGalleryScreen: React.FC<SchoolGalleryScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10 shadow-sm">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase tracking-tighter">Event Gallery</h2>
      </header>

      <div className="p-4 grid grid-cols-2 gap-4">
        {IMAGES.map((img, i) => (
          <div key={i} className={`rounded-2xl overflow-hidden border-2 border-white shadow-lg ${i % 3 === 0 ? 'col-span-2 aspect-video' : 'aspect-square'}`}>
            <img src={img} className="w-full h-full object-cover hover:scale-105 transition-transform" alt="School event" />
          </div>
        ))}
      </div>
      
      <div className="p-8 text-center text-[#4c9a66] text-xs font-bold uppercase italic opacity-60">
        Capturing memories since 2024
      </div>
    </div>
  );
};

export default SchoolGalleryScreen;
