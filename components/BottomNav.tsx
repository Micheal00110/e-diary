
import React from 'react';
import { View } from '../types';

interface BottomNavProps {
  currentView: View;
  setView: (view: View) => void;
}

const BottomNav: React.FC<BottomNavProps> = ({ currentView, setView }) => {
  // Determine nav items based on context
  const getNavItems = () => {
    // Teacher / School Admin Context
    if (currentView === View.DASHBOARD || currentView === View.TEACHER_ACTIONS || currentView === View.UPDATES || currentView === View.USER_PROFILE) {
      return [
        { id: View.DASHBOARD, label: 'Dashboard', icon: <HouseIcon /> },
        { id: View.TEACHER_ACTIONS, label: 'Actions', icon: <UsersIcon /> },
        { id: View.UPDATES, label: 'Updates', icon: <BellIcon /> },
        { id: View.USER_PROFILE, label: 'Profile', icon: <UserIcon /> },
      ];
    }
    
    // Parent Context
    if (currentView === View.PARENT_VIEW || currentView === View.DIARY_DETAIL || currentView === View.STUDENT_PROFILE || currentView === View.WEEKLY_REVIEW) {
      return [
        { id: View.PARENT_VIEW, label: 'Home', icon: <HouseIcon /> },
        { id: View.DIARY_DETAIL, label: 'Diary', icon: <BookIcon /> },
        { id: View.TEACHER_MESSAGES, label: 'Inbox', icon: <ChatIcon /> },
        { id: View.RESULTS_PROGRESS, label: 'Results', icon: <ChartIcon /> },
      ];
    }

    // Default Landing / Onboarding Context
    return [
      { id: View.LANDING, label: 'Home', icon: <HouseIcon /> },
      { id: View.PARENT_VIEW, label: 'Preview', icon: <PreviewIcon /> },
      { id: View.PRICING, label: 'Pricing', icon: <DollarIcon /> },
      { id: View.PARENT_VIEW, label: 'Contact', icon: <PhoneIcon /> },
    ];
  };

  const navItems = getNavItems();

  return (
    <div className="fixed bottom-0 w-full max-w-[480px] border-t-2 border-[#e7f3eb] bg-[#f8fcf9] px-4 pb-4 pt-3 z-50">
      <div className="flex gap-2">
        {navItems.map((item) => (
          <button
            key={item.label}
            onClick={() => setView(item.id)}
            className={`flex flex-1 flex-col items-center justify-end gap-1.5 transition-all ${
              currentView === item.id ? 'text-[#0d1b12] scale-110 font-black' : 'text-[#4c9a66] scale-100'
            }`}
          >
            <div className={`flex h-8 w-12 items-center justify-center rounded-xl transition-colors ${currentView === item.id ? 'bg-[#13ec5b] text-[#0d1b12]' : 'bg-transparent'}`}>
              {item.icon}
            </div>
            <p className="text-[9px] font-black uppercase tracking-widest">{item.label}</p>
          </button>
        ))}
      </div>
    </div>
  );
};

// Icons are imported from the original file...
const HouseIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,115.55V208a16,16,0,0,1-16,16H168a16,16,0,0,1-16-16V168a8,8,0,0,0-8-8H112a8,8,0,0,0-8,8v40a16,16,0,0,1-16,16H48a16,16,0,0,1-16-16V115.55a16,16,0,0,1,5.17-11.78l80-75.48.11-.11a16,16,0,0,1,21.53,0,1.14,1.14,0,0,0,.11.11l80,75.48A16,16,0,0,1,224,115.55Z"></path></svg>
);
const UsersIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M117.25,157.92a60,60,0,1,0-66.5,0A95.83,95.83,0,0,0,3.53,195.63a8,8,0,1,0,13.4,8.74,80,80,0,0,1,134.14,0,8,8,0,0,0,13.4-8.74A95.83,95.83,0,0,0,117.25,157.92ZM40,108a44,44,0,1,1,44,44A44.05,44.05,0,0,1,40,108Zm210.14,98.7a8,8,0,0,1-11.07-2.33A79.83,79.83,0,0,0,172,168a8,8,0,0,1,0-16,44,44,0,1,0-16.34-84.87,8,8,0,1,1-5.94-14.85,60,60,0,0,1,55.53,105.64,95.83,95.83,0,0,1,47.22,37.71A8,8,0,0,1,250.14,206.7Z"></path></svg>
);
const BellIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"></path></svg>
);
const UserIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M230.92,212c-15.23-26.33-38.7-45.21-66.09-54.16a72,72,0,1,0-73.66,0C63.78,166.78,40.31,185.66,25.08,212a8,8,0,1,0,13.85,8c18.84-32.56,52.14-52,89.07-52s70.23,19.44,89.07,52a8,8,0,1,0,13.85-8ZM72,96a56,56,0,1,1,56,56A56.06,56.06,0,0,1,72,96Z"></path></svg>
);
const BookIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H160a40,40,0,0,0-32,16A40,40,0,0,0,96,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H96a24,24,0,0,1,24,24,8,8,0,0,0,16,0,24,24,0,0,1,24-24h64a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48Z"></path></svg>
);
const ChatIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M140,128a12,12,0,1,1-12-12A12,12,0,0,1,140,128ZM84,116a12,12,0,1,0,12,12A12,12,0,0,0,84,116Zm88,0a12,12,0,1,0,12,12A12,12,0,0,0,172,116Zm60,12A104,104,0,0,1,79.12,219.82L45.07,231.17a16,16,0,0,1-20.24-20.24l11.35-34.05A104,104,0,1,1,232,128Z"></path></svg>
);
const ChartIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M216,40H136V24a8,8,0,0,0-16,0V40H40A16,16,0,0,0,24,56V176a16,16,0,0,0,16,16H216a16,16,0,0,0,16-16V56A16,16,0,0,0,216,40Z"></path></svg>
);
const PreviewIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M247.31,124.76c-.35-.79-8.82-19.74-27.65-38.56C198.81,65.35,165.73,48,128,48S57.19,65.35,36.34,86.2c-18.83,18.82-27.3,37.77-27.65,38.56a12,12,0,0,0,0,9.48c.35.79,8.82,19.74,27.65,38.56C57.19,190.65,90.27,208,128,208s70.81-17.35,91.66-38.2c18.83-18.82,27.3-37.77,27.65-38.56a12,12,0,0,0,0-9.48ZM128,192c-30.78,0-57.67-14.19-75.78-31.14l-2.07-2c.16-.36,4-8.89,14.65-19.53,3.7-3.7,7.74-7.25,12.1-10.59a60,60,0,1,0,102.2,0c4.36,3.34,8.4,6.89,12.1,10.59,10.65,10.64,14.49,19.17,14.65,19.53l-2.07,2C185.67,177.81,158.78,192,128,192Zm0-112a44,44,0,1,1-44,44A44.05,44.05,0,0,1,128,80Z"></path></svg>
);
const DollarIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,24A104,104,0,1,0,232,128,104.11,104.11,0,0,0,128,24Zm0,192a88,88,0,1,1,88-88A88.1,88.1,0,0,1,128,216ZM156,124H136V80h12a20,20,0,0,1,0,40Zm-32,52H112V136h12a20,20,0,0,1,0,40ZM184,156a36,36,0,0,1-36,36h-8v8a8,8,0,0,1-16,0v-8h-12a36,36,0,0,1,0-72h4V80h-8a20,20,0,0,0-20,20,8,8,0,0,1-16,0,36,36,0,0,1,36-36h4V56a8,8,0,0,1,16,0v8h12a36,36,0,0,1,36,36h-4v40h4A36,36,0,0,1,184,156Z"></path></svg>
);
const PhoneIcon = () => (
  <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M222.37,158.46l-47.11-21.11-.13-.06a16,16,0,0,0-15.17,1.4,1.1,1.1,0,0,1-.11.08L134.39,153.4c-23.5-12.28-42.33-31.11-54.61-54.61L94.44,73.33a1.1,1.1,0,0,1,.08-.11,16,16,0,0,0,1.34-15.17l-.06-.13L74.69,10.81a16,16,0,0,0-19.12-8.77A40.09,40.09,0,0,0,24,40c0,105.88,86.12,192,192,192a40.09,40.09,0,0,0,37.95-31.57A16,16,0,0,0,222.37,158.46ZM216,216c-94.84,0-172-77.16-172-172,0-10.43,2.78-20,7.63-28.17l23.06,51.48-18.3,21.92a8,8,0,0,0-.15,9.85c15.22,20.48,34,39.26,54.48,54.48a8,8,0,0,0,9.85-.15l21.92-18.3,51.48,23.06C236,192,226.43,216,216,216Z"></path></svg>
);

export default BottomNav;
