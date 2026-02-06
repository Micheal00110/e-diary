
import React from 'react';

interface TeacherActionsScreenProps {
  onAddHomework: () => void;
  onSendMessage: () => void;
  onEnterResults: () => void;
  onAddReview: () => void;
  onManageParents: () => void;
}

const TeacherActionsScreen: React.FC<TeacherActionsScreenProps> = ({ 
  onAddHomework, 
  onSendMessage, 
  onEnterResults, 
  onAddReview,
  onManageParents
}) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-[#f8fcf9] sticky top-0 z-10">
        <h2 className="text-[#0d1b12] text-lg font-bold flex-1 text-center pl-12">Grade 4 - Teacher Panel</h2>
        <button className="flex size-12 items-center justify-end">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160Zm88-29.84q.06-2.16,0-4.32l14.92-18.64a8,8,0,0,0,1.48-7.06,107.21,107.21,0,0,0-10.88-26.25,8,8,0,0,0-6-3.93l-23.72-2.64q-1.48-1.56-3-3L186,40.54a8,8,0,0,0-3.94-6,107.71,107.71,0,0,0-26.25-10.87,8,8,0,0,0-7.06,1.49L130.16,40Q128,40,125.84,40L107.2,25.11a8,8,0,0,0-7.06-1.48A107.6,107.6,0,0,0,73.89,34.51a8,8,0,0,0-3.93,6L67.32,64.27q-1.56,1.49-3,3L40.54,70a8,8,0,0,0-6,3.94,107.71,107.71,0,0,0-10.87,26.25,8,8,0,0,0,1.49,7.06L40,125.84Q40,128,40,130.16L25.11,148.8a8,8,0,0,0-1.48,7.06,107.21,107.21,0,0,0,10.88,26.25,8,8,0,0,0,6,3.93l23.72,2.64q1.49,1.56,3,3L70,215.46a8,8,0,0,0,3.94,6,107.71,107.71,0,0,0,26.25,10.87,8,8,0,0,0,7.06-1.49L125.84,216q2.16.06,4.32,0l18.64,14.92a8,8,0,0,0,7.06,1.48,107.21,107.21,0,0,0,26.25-10.88,8,8,0,0,0,3.93-6l2.64-23.72q1.56-1.48,3-3L215.46,186a8,8,0,0,0,6-3.94,107.71,107.71,0,0,0,10.87-26.25,8,8,0,0,0-1.49-7.06Z"></path>
          </svg>
        </button>
      </header>

      <div className="p-4">
        <div className="flex flex-col gap-4">
          <ActionButton onClick={onAddHomework} label="Add Homework" variant="primary" icon={<BookPlusIcon />} />
          <ActionButton onClick={onSendMessage} label="Send Message" variant="secondary" icon={<PaperPlaneIcon />} />
          <ActionButton onClick={onEnterResults} label="Enter Results" variant="secondary" icon={<ChartBarIcon />} />
          <ActionButton onClick={onAddReview} label="Add Weekly Review" variant="secondary" icon={<NotebookIcon />} />
          <ActionButton onClick={onManageParents} label="Manage Parents" variant="secondary" icon={<UsersGearIcon />} />
        </div>
      </div>
    </div>
  );
};

const ActionButton = ({ onClick, label, variant, icon }: { onClick: () => void, label: string, variant: 'primary' | 'secondary', icon: React.ReactNode }) => (
  <button 
    onClick={onClick}
    className={`w-full py-5 px-6 rounded-2xl font-black text-left flex items-center gap-4 transition-all active:scale-[0.98] border shadow-sm ${
      variant === 'primary' 
        ? 'bg-[#13ec5b] text-[#0d1b12] border-[#0fb84a]' 
        : 'bg-white text-[#0d1b12] border-[#cfe7d7]'
    }`}
  >
    <div className={`size-10 rounded-xl flex items-center justify-center ${variant === 'primary' ? 'bg-black/10' : 'bg-[#f0f9f2]'}`}>
      {icon}
    </div>
    <span className="text-base uppercase tracking-tight">{label}</span>
  </button>
);

const BookPlusIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Zm-16,144H160a39.81,39.81,0,0,0-24,8V88a24,24,0,0,1,24-24h48ZM96,64a24,24,0,0,1,24,24V200a39.81,39.81,0,0,0-24-8H32V64H96Z"></path></svg>
);
const PaperPlaneIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M237.9,58.83l-192,160a12,12,0,0,1-17.75-14.73l32.55-81.39a12,12,0,0,0-10.15-16.48l-34.82-3.17a12,12,0,0,1-10.18-16.71l192-160a12,12,0,0,1,16.5,15.73Z" opacity="0.2"></path><path d="M237.9,58.83l-192,160a12,12,0,0,1-17.75-14.73l32.55-81.39a12,12,0,0,0-10.15-16.48l-34.82-3.17a12,12,0,0,1-10.18-16.71l192-160a12,12,0,0,1,16.5,15.73Zm-20.73,7.34L35.66,216.5a4,4,0,0,0,5.92,4.91L217.17,66.17a4,4,0,0,0-5.5-5.24Z"></path></svg>
);
const ChartBarIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,200a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16h8V40a8,8,0,0,1,16,0V192H216A8,8,0,0,1,224,200ZM80,168V104a8,8,0,0,1,16,0v64a8,8,0,0,1-16,0Zm48,0V64a8,8,0,0,1,16,0V168a8,8,0,0,1-16,0Zm48,0V128a8,8,0,0,1,16,0v40a8,8,0,0,1-16,0Z"></path></svg>
);
const NotebookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M200,32H56A16,16,0,0,0,40,48V208a16,16,0,0,0,16,16H200a16,16,0,0,0,16-16V48A16,16,0,0,0,200,32Zm0,176H56V48H200V208ZM160,88a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,88Zm0,40a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,128Zm0,40a8,8,0,0,1-8,8H104a8,8,0,0,1,0-16h48A8,8,0,0,1,160,168Z"></path></svg>
);
const UsersGearIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm112,0a44,44,0,1,1,44,44,44.05,44.05,0,0,1-44-44Z"></path></svg>
);

export default TeacherActionsScreen;
