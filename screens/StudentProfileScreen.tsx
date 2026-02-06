
import React from 'react';

interface StudentProfileScreenProps {
  onBack: () => void;
}

const StudentProfileScreen: React.FC<StudentProfileScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
            <path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path>
          </svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase tracking-tighter">Student Profile</h2>
      </header>

      <div className="p-6">
        <div className="flex flex-col items-center mb-8">
          <div className="relative group">
            <img 
              src="https://i.pravatar.cc/300?u=john-mwangi" 
              className="size-32 rounded-3xl object-cover border-4 border-white shadow-xl" 
              alt="John" 
            />
            <button className="absolute -bottom-2 -right-2 bg-[#13ec5b] text-[#0d1b12] p-3 rounded-2xl shadow-lg hover:scale-110 active:scale-90 transition-all">
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="currentColor" viewBox="0 0 256 256"><path d="M208,56H180.28L166.65,35.56A8,8,0,0,0,160,32H96a8,8,0,0,0-6.65,3.56L75.72,56H48A24,24,0,0,0,24,80V192a24,24,0,0,0,24,24H208a24,24,0,0,0,24-24V80A24,24,0,0,0,208,56Zm8,136a8,8,0,0,1-8,8H48a8,8,0,0,1-8-8V80a8,8,0,0,1,8-8H80a8,8,0,0,0,6.65-3.56L100.28,48h55.44l13.63,20.44A8,8,0,0,0,176,72h32a8,8,0,0,1,8,8ZM128,88a44,44,0,1,0,44,44A44.05,44.05,0,0,0,128,88Zm0,72a28,28,0,1,1,28-28A28,28,0,0,1,128,160Z"></path></svg>
            </button>
          </div>
          <h1 className="text-2xl font-black text-[#0d1b12] mt-4">John Mwangi</h1>
          <p className="text-[#4c9a66] font-bold uppercase text-xs tracking-widest">Adm: #SJA-2024-042</p>
        </div>

        <div className="bg-white rounded-3xl border-2 border-[#cfe7d7] overflow-hidden shadow-sm">
          <div className="p-5 border-b border-[#cfe7d7] bg-[#f0f9f2]/30 flex justify-between items-center">
            <span className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest">Personal Details</span>
            <span className="bg-red-100 text-red-600 text-[9px] font-black px-2 py-0.5 rounded-full">PRIVATE</span>
          </div>
          
          <div className="divide-y divide-[#cfe7d7]">
            <DetailRow label="Date of Birth" value="14th May 2014" />
            <DetailRow label="Current Grade" value="Grade 4 West" />
            <DetailRow label="Class Teacher" value="Mrs. Okoth" />
            <DetailRow label="Parent Name" value="Peter Mwangi" />
            <DetailRow label="Emergency Contact" value="+254 712 345 678" />
            <DetailRow label="Blood Group" value="O+" />
          </div>
        </div>

        <button className="w-full bg-[#e7f3eb] text-[#0d1b12] font-black py-4 rounded-2xl mt-8 shadow-sm active:scale-95 transition-all">
          Update Records
        </button>
      </div>
    </div>
  );
};

const DetailRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center p-4">
    <span className="text-xs font-bold text-[#4c9a66] uppercase">{label}</span>
    <span className="text-sm font-black text-[#0d1b12]">{value}</span>
  </div>
);

export default StudentProfileScreen;
