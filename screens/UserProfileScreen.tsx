
import React from 'react';

interface UserProfileScreenProps {
  onBack: () => void;
}

const UserProfileScreen: React.FC<UserProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase">My Profile</h2>
      </header>

      <div className="p-6 space-y-8">
        <div className="flex flex-col items-center">
          <div className="size-24 rounded-full bg-[#13ec5b] border-4 border-white shadow-lg flex items-center justify-center text-white text-3xl font-black">
            PK
          </div>
          <h2 className="text-[#0d1b12] text-xl font-black mt-4">Mrs. Phoebe Karanja</h2>
          <p className="text-[#4c9a66] text-xs font-bold uppercase tracking-widest">Class Teacher • Grade 4</p>
        </div>

        <div className="space-y-4">
          <ProfileLink label="Account Settings" icon={<GearIcon />} />
          <ProfileLink label="Subscription Plan" icon={<CardIcon />} />
          <ProfileLink label="Notification Preferences" icon={<BellIcon />} />
          <ProfileLink label="Privacy & Security" icon={<LockIcon />} />
        </div>

        <button className="w-full py-4 text-red-500 font-black border-2 border-red-100 rounded-2xl uppercase tracking-widest text-xs mt-12 active:bg-red-50">
          Sign Out
        </button>
      </div>
    </div>
  );
};

const ProfileLink = ({ label, icon }: { label: string, icon: React.ReactNode }) => (
  <div className="flex items-center justify-between p-5 bg-white border-2 border-[#cfe7d7] rounded-2xl shadow-sm active:scale-[0.98] transition-all cursor-pointer">
    <div className="flex items-center gap-4">
      <div className="text-[#4c9a66]">{icon}</div>
      <span className="text-[#0d1b12] font-black text-sm">{label}</span>
    </div>
    <svg width="18" height="18" fill="#cfe7d7" viewBox="0 0 256 256"><path d="M181.66,133.66l-80,80a8,8,0,0,1-11.32-11.32L164.69,128,90.34,53.66a8,8,0,0,1,11.32-11.32l80,80A8,8,0,0,1,181.66,133.66Z"></path></svg>
  </div>
);

const GearIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M128,80a48,48,0,1,0,48,48A48.05,48.05,0,0,0,128,80Zm0,80a32,32,0,1,1,32-32A32,32,0,0,1,128,160ZM232,128a104,104,0,1,1-104-104A104.11,104.11,0,0,1,232,128Z"></path></svg>;
const CardIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M224,48H32A16,16,0,0,0,16,64V192a16,16,0,0,0,16,16H224a16,16,0,0,0,16-16V64A16,16,0,0,0,224,48ZM224,64V88H32V64ZM224,192H32V112H224V192ZM160,152a8,8,0,0,1,8-8h32a8,8,0,0,1,0,16H168A8,8,0,0,1,160,152Z"></path></svg>;
const BellIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M221.8,175.94C216.25,166.38,208,139.33,208,104a80,80,0,1,0-160,0c0,35.34-8.26,62.38-13.81,71.94A16,16,0,0,0,48,200H208a16,16,0,0,0,13.8-24.06ZM128,216a24,24,0,0,1-22.62-16h45.24A24,24,0,0,1,128,216Z"></path></svg>;
const LockIcon = () => <svg width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,80H176V56a48,48,0,0,0-96,0V80H48A16,16,0,0,0,32,96V208a16,16,0,0,0,16,16H208a16,16,0,0,0,16-16V96A16,16,0,0,0,208,80ZM96,56a32,32,0,0,1,64,0V80H96ZM208,208H48V96H208V208Zm-80-56a12,12,0,1,1-12-12A12,12,0,0,1,128,152Z"></path></svg>;

export default UserProfileScreen;
