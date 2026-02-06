
import React from 'react';

interface ManageParentsScreenProps {
  onBack: () => void;
}

const ManageParentsScreen: React.FC<ManageParentsScreenProps> = ({ onBack }) => {
  return (
    <div className="bg-[#fcfdfa] min-h-screen">
      <header className="flex items-center p-4 bg-white border-b border-[#cfe7d7] sticky top-0 z-10">
        <button onClick={onBack} className="text-[#0d1b12] flex size-12 items-center">
          <svg width="24" height="24" fill="currentColor" viewBox="0 0 256 256"><path d="M224,128a8,8,0,0,1-8,8H59.31l58.35,58.34a8,8,0,0,1-11.32,11.32l-72-72a8,8,0,0,1,0-11.32l72-72a8,8,0,0,1,11.32,11.32L59.31,120H216A8,8,0,0,1,224,128Z"></path></svg>
        </button>
        <h2 className="text-[#0d1b12] text-lg font-black flex-1 text-center pr-12 uppercase">Grant Access</h2>
      </header>

      <div className="p-6 space-y-8">
        <div className="space-y-4">
          <div className="bg-[#f0f9f2] p-5 rounded-2xl border-2 border-dashed border-[#13ec5b] text-center">
            <h3 className="text-[#0d1b12] font-black text-sm uppercase">Link New Parent</h3>
            <p className="text-[10px] text-[#4c9a66] font-bold mt-1">Add a parent's phone to give them access.</p>
          </div>
          
          <div className="space-y-4">
            <input placeholder="Parent's Name" className="w-full h-14 bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4" />
            <input placeholder="Phone Number (M-PESA)" className="w-full h-14 bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4" />
            <select className="w-full h-14 bg-[#f8fcf9] border-2 border-[#cfe7d7] rounded-xl px-4">
              <option>Select Student</option>
              <option>John Mwangi</option>
              <option>Mary Kamau</option>
            </select>
            <button className="w-full bg-[#1380ec] text-white font-black py-4 rounded-xl shadow-md uppercase">Grant Private Access</button>
          </div>
        </div>

        <div className="space-y-4">
          <h3 className="text-[10px] font-black uppercase text-[#4c9a66] tracking-widest px-2">Current Access (Grade 4)</h3>
          <div className="space-y-2">
            <AccessItem parent="Peter Mwangi" student="John Mwangi" />
            <AccessItem parent="Grace Kamau" student="Mary Kamau" />
          </div>
        </div>
      </div>
    </div>
  );
};

const AccessItem = ({ parent, student }: { parent: string, student: string }) => (
  <div className="flex items-center justify-between p-4 bg-white border-2 border-[#cfe7d7] rounded-xl">
    <div>
      <p className="font-black text-[#0d1b12] text-sm">{parent}</p>
      <p className="text-[10px] font-bold text-[#4c9a66]">Linked to: {student}</p>
    </div>
    <button className="text-red-500 font-black text-[10px] uppercase border border-red-100 px-3 py-1 rounded-full">Revoke</button>
  </div>
);

export default ManageParentsScreen;
