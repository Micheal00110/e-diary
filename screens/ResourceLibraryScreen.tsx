
import React from 'react';

interface ResourceLibraryScreenProps {
  onBack: () => void;
}

const RESOURCES = [
  { title: "Grade 4 Math Guide", type: "PDF", size: "2.4 MB", subject: "Mathematics" },
  { title: "CBC Rubric Overview", type: "IMAGE", size: "1.1 MB", subject: "Curriculum" },
  { title: "English Storybook", type: "E-BOOK", size: "8.9 MB", subject: "English" },
  { title: "Home Learning Pack", type: "PDF", size: "4.5 MB", subject: "General" },
  { title: "KICD Science Guide", type: "PDF", size: "3.2 MB", subject: "Science" },
];

const ResourceLibraryScreen: React.FC<ResourceLibraryScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10 shadow-sm">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase tracking-tighter">Library</h2>
      </header>

      <div className="p-6">
        <div className="relative mb-8 h-40 rounded-[32px] overflow-hidden shadow-xl">
           <img 
            src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?auto=format&fit=crop&w=800&q=80" 
            className="w-full h-full object-cover brightness-50"
            alt="Library header"
           />
           <div className="absolute inset-0 flex flex-col justify-center p-6">
              <h3 className="text-white text-2xl font-black">Digital Repository</h3>
              <p className="text-white/70 text-sm">Download guides and materials.</p>
           </div>
        </div>

        <div className="space-y-3">
          {RESOURCES.map((res, i) => (
            <div key={i} className="bg-white p-4 rounded-2xl border-2 border-[#cfe7d7] flex items-center gap-4 active:scale-[0.98] transition-all cursor-pointer">
              <div className="size-12 rounded-xl bg-[#f0f9f2] text-[#13ec5b] flex items-center justify-center">
                 <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,184a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,184Zm-8-144H40a16,16,0,0,0-16,16V160a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40ZM156,128a8,8,0,0,1-8,8H108a8,8,0,0,1,0-16h40A8,8,0,0,1,156,128Zm24-32a8,8,0,0,1-8,8H84a8,8,0,0,1,0-16h88A8,8,0,0,1,180,96Z"></path></svg>
              </div>
              <div className="flex-1">
                <h4 className="text-[#0d1b12] font-black text-sm">{res.title}</h4>
                <div className="flex gap-2 text-[10px] font-bold text-[#4c9a66] uppercase mt-1">
                   <span>{res.subject}</span>
                   <span>•</span>
                   <span>{res.type}</span>
                </div>
              </div>
              <button className="bg-[#e7f3eb] text-[#13ec5b] p-2 rounded-lg">
                <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H136v80a8,8,0,0,1-16,0V136H40a8,8,0,0,1,0-16H120V40a8,8,0,0,1,16,0v80h80A8,8,0,0,1,224,128Z"></path></svg>
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ResourceLibraryScreen;
