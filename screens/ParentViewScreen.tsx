
import React from 'react';

interface ParentViewScreenProps {
  onDiaryClick: () => void;
  onMessagesClick: () => void;
  onCalendarClick: () => void;
  onResultsClick: () => void;
  onProfileClick: () => void;
  onWeeklyReviewClick: () => void;
  onCbcAssistantClick: () => void;
  onLibraryClick: () => void;
  onAbsenceClick: () => void;
  onGalleryClick: () => void;
}

const ParentViewScreen: React.FC<ParentViewScreenProps> = ({ 
  onDiaryClick, 
  onMessagesClick, 
  onCalendarClick, 
  onResultsClick,
  onProfileClick,
  onWeeklyReviewClick,
  onCbcAssistantClick,
  onLibraryClick,
  onAbsenceClick,
  onGalleryClick
}) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <div 
          onClick={onProfileClick}
          className="flex items-center gap-3 flex-1 cursor-pointer active:opacity-70 transition-opacity"
        >
          <img 
            src="https://i.pravatar.cc/150?u=john-mwangi" 
            className="size-10 rounded-full border-2 border-[#13ec5b] object-cover" 
            alt="Student" 
          />
          <div>
            <h2 className="text-[#0d1b12] text-sm font-black leading-none">John Mwangi</h2>
            <p className="text-[10px] text-[#4c9a66] font-bold uppercase mt-1">Grade 4 • St. Jude Academy</p>
          </div>
        </div>
        <button onClick={onProfileClick} className="flex size-10 items-center justify-center bg-[#f0f9f2] rounded-full text-[#0d1b12]">
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24ZM74.08,197.5a64,64,0,0,1,107.84,0,87.83,87.83,0,0,1-107.84,0ZM128,144a40,40,0,1,1,40-40A40,40,0,0,1,128,144Zm76.24,44.1a80,80,0,0,0-152.48,0,88,88,0,1,1,152.48,0Z"></path></svg>
        </button>
      </header>

      <div className="p-4">
        {/* CBC AI Assistant Hero Card */}
        <div 
          onClick={onCbcAssistantClick}
          className="mb-6 bg-black text-white p-5 rounded-[32px] shadow-2xl relative overflow-hidden group cursor-pointer active:scale-[0.98] transition-all"
        >
          <img 
            src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=600&q=50" 
            className="absolute inset-0 w-full h-full object-cover opacity-30 blur-[2px]"
            alt="Assistant background"
          />
          <div className="relative z-10">
            <div className="flex items-center gap-2 mb-2">
              <div className="bg-[#13ec5b] size-6 rounded flex items-center justify-center">
                <svg width="14" height="14" fill="#0d1b12" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm8,160a8,8,0,0,1-16,0V128a8,8,0,0,1,16,0Zm-8-80a12,12,0,1,1,12-12A12,12,0,0,1,128,104Z"></path></svg>
              </div>
              <span className="text-[10px] font-black uppercase tracking-[0.2em] text-[#13ec5b]">Smart Mwalimu AI</span>
            </div>
            <h3 className="text-xl font-black">Need CBC Help?</h3>
            <p className="text-sm text-white/70 mt-1">Ask about rubrics, grades, or lesson guides.</p>
          </div>
        </div>

        <div className="flex flex-col gap-4">
          <MenuButton onClick={onDiaryClick} label="Homework Diary" icon="diary" />
          <MenuButton onClick={onWeeklyReviewClick} label="Weekly Teacher Review" icon="review" highlight />
          <MenuButton onClick={onMessagesClick} label="Teacher Messages" icon="messages" badge="2" />
          
          <div className="grid grid-cols-2 gap-4">
            <SquareButton onClick={onLibraryClick} label="Resource Library" icon="library" color="bg-blue-50 text-blue-600" />
            <SquareButton onClick={onAbsenceClick} label="Report Absence" icon="absence" color="bg-orange-50 text-orange-600" />
            <SquareButton onClick={onCalendarClick} label="Calendar" icon="calendar" color="bg-purple-50 text-purple-600" />
            <SquareButton onClick={onGalleryClick} label="School Gallery" icon="gallery" color="bg-pink-50 text-pink-600" />
          </div>

          <MenuButton onClick={onResultsClick} label="Results & Progress" icon="results" />
        </div>
      </div>
    </div>
  );
};

const MenuButton = ({ onClick, label, icon, badge, highlight }: any) => (
  <button 
    onClick={onClick} 
    className={`w-full py-5 px-5 rounded-2xl font-black text-left border shadow-sm active:scale-[0.97] transition-all flex items-center justify-between ${
      highlight ? 'bg-[#13ec5b] border-[#0fb84a] text-[#0d1b12]' : 'bg-white border-[#cfe7d7] text-[#0d1b12]'
    }`}
  >
    <div className="flex items-center gap-4">
      <div className={`size-10 rounded-xl flex items-center justify-center ${highlight ? 'bg-white/30' : 'bg-[#f0f9f2]'}`}>
         {icon === 'diary' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Z"></path></svg>}
         {icon === 'review' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H40A16,16,0,0,0,24,56V200a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Zm0,160H40V56H216V200ZM184,96a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,96Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,128Zm0,32a8,8,0,0,1-8,8H80a8,8,0,0,1,0-16h96A8,8,0,0,1,184,160Z"></path></svg>}
         {icon === 'messages' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"></path></svg>}
         {icon === 'results' && <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z"></path></svg>}
      </div>
      <span className="text-base uppercase tracking-tighter">{label}</span>
    </div>
    <div className="flex items-center gap-2">
      {badge && <span className="bg-red-500 text-white text-[10px] font-black size-5 rounded-full flex items-center justify-center">{badge}</span>}
      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
    </div>
  </button>
);

const SquareButton = ({ onClick, label, icon, color }: any) => (
  <button 
    onClick={onClick}
    className={`flex flex-col items-center justify-center gap-2 p-5 rounded-3xl border-2 border-[#cfe7d7] bg-white active:scale-95 transition-all shadow-sm`}
  >
    <div className={`size-12 rounded-2xl flex items-center justify-center ${color}`}>
       {icon === 'library' && <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Z"></path></svg>}
       {icon === 'absence' && <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128Z"></path></svg>}
       {icon === 'calendar' && <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,32H184V24a8,8,0,0,0-16,0v8H88V24a8,8,0,0,0-16,0v8H48A16,16,0,0,0,32,48V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V48A16,16,0,0,0,208,32Z"></path></svg>}
       {icon === 'gallery' && <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M208,40H48A24,24,0,0,0,24,64V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V64A24,24,0,0,0,208,40Zm-12,48a12,12,0,1,1-12,12A12,12,0,0,1,196,88Z"></path></svg>}
    </div>
    <span className="text-[10px] font-black uppercase text-[#0d1b12] text-center leading-tight">{label}</span>
  </button>
);

export default ParentViewScreen;
