
import React from 'react';
import { Student } from '../types';

interface DashboardScreenProps {
  onProfileClick: () => void;
}

const STUDENTS: Student[] = [
  { id: '1', name: 'Ethan Harper', className: 'Class 9A', activeToday: true, avatar: 'https://i.pravatar.cc/150?u=ethan' },
  { id: '2', name: 'Olivia Bennett', className: 'Class 10B', activeToday: false, avatar: 'https://i.pravatar.cc/150?u=olivia' },
  { id: '3', name: 'Noah Carter', className: 'Class 11C', activeToday: true, avatar: 'https://i.pravatar.cc/150?u=noah' },
  { id: '4', name: 'Ava Mitchell', className: 'Class 9A', activeToday: false, avatar: 'https://i.pravatar.cc/150?u=ava' },
  { id: '5', name: 'Liam Foster', className: 'Class 10B', activeToday: true, avatar: 'https://i.pravatar.cc/150?u=liam' },
  { id: '6', name: 'Isabella Reed', className: 'Class 11C', activeToday: false, avatar: 'https://i.pravatar.cc/150?u=isabella' },
];

const DashboardScreen: React.FC<DashboardScreenProps> = ({ onProfileClick }) => {
  return (
    <div className="bg-[#f8fcf9] min-h-screen relative">
      {/* Subtle Background Overlay */}
      <div 
        className="fixed inset-0 pointer-events-none opacity-[0.03] bg-center bg-cover"
        style={{ backgroundImage: "url('https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&fit=crop&w=1200&q=80')" }}
      />

      <header className="relative p-6 h-56 flex flex-col justify-end overflow-hidden rounded-b-[48px] shadow-lg border-b-4 border-white/20">
        <img 
          src="https://images.unsplash.com/photo-1517673132405-a56a62b18caf?auto=format&fit=crop&w=1200&q=80" 
          className="absolute inset-0 w-full h-full object-cover brightness-75 scale-105"
          alt="Dashboard Banner"
        />
        <div className="absolute top-6 left-6 right-6 flex items-center justify-between z-20">
          <div className="text-white flex size-12 items-center justify-center bg-white/20 backdrop-blur-md rounded-2xl">
            <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
              <path d="M224,128a8,8,0,0,1-8,8H40a8,8,0,0,1,0-16H216A8,8,0,0,1,224,128ZM40,72H216a8,8,0,0,0,0-16H40a8,8,0,0,0,0,16ZM216,184H40a8,8,0,0,0,0,16H216a8,8,0,0,0,0-16Z"></path>
            </svg>
          </div>
          <div 
            onClick={onProfileClick}
            className="size-12 rounded-2xl bg-[#13ec5b] text-[#0d1b12] font-black flex items-center justify-center cursor-pointer active:scale-95 shadow-xl border-2 border-white ring-4 ring-[#13ec5b]/30"
          >
            PK
          </div>
        </div>
        <div className="relative z-10">
          <h2 className="text-white text-3xl font-black tracking-tighter drop-shadow-md">Hello, Phoebe</h2>
          <p className="text-white/80 text-[10px] font-black uppercase tracking-[0.2em] mt-1">Grade 4 • Academic Overview</p>
        </div>
      </header>

      <div className="p-4 space-y-8 relative z-10">
        <div className="flex overflow-x-auto gap-4 pb-2 snap-x hide-scrollbar">
          <StatCard label="Live Diaries" value="12" snap />
          <StatCard label="Missed Task" value="5" snap danger />
          <StatCard label="Notifications" value="3" snap />
        </div>

        <section>
          <div className="flex items-center justify-between px-2 mb-4">
            <h2 className="text-[#0d1b12] text-xl font-black uppercase tracking-tighter">Diary Stream</h2>
            <span className="text-[10px] font-black text-[#1380ec] uppercase bg-blue-50 px-2 py-1 rounded">Real-time</span>
          </div>
          
          <div className="bg-white/70 backdrop-blur-sm rounded-[32px] border-2 border-[#cfe7d7] overflow-hidden shadow-sm">
            {STUDENTS.map((student, i) => (
              <div key={student.id} className={`flex items-center gap-4 px-5 py-4 hover:bg-[#f0f9f2] transition-colors ${i !== STUDENTS.length - 1 ? 'border-b border-[#cfe7d7]/40' : ''}`}>
                <div className="relative">
                  <img src={student.avatar} className="size-14 rounded-2xl object-cover border-2 border-white shadow-sm" alt={student.name} />
                  {student.activeToday && <div className="absolute -top-1 -right-1 size-3 bg-[#13ec5b] rounded-full border-2 border-white"></div>}
                </div>
                <div className="flex-1">
                  <p className="text-[#0d1b12] font-black text-sm">{student.name}</p>
                  <p className="text-[#4c9a66] text-[10px] uppercase font-bold">{student.className}</p>
                </div>
                <div className={`shrink-0 ${student.activeToday ? 'text-[#13ec5b]' : 'text-red-300'}`}>
                  {student.activeToday ? <CheckIcon /> : <XIcon />}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
      <div className="h-12"></div>
    </div>
  );
};

const StatCard = ({ label, value, snap, danger }: { label: string, value: string, snap?: boolean, danger?: boolean }) => (
  <div className={`flex min-w-[150px] flex-1 flex-col gap-2 rounded-3xl p-6 border-2 shadow-md snap-center ${danger ? 'bg-red-50 border-red-100' : 'bg-white border-[#cfe7d7]'}`}>
    <p className={`text-[10px] font-black uppercase tracking-widest opacity-60 ${danger ? 'text-red-600' : 'text-[#0d1b12]'}`}>{label}</p>
    <p className={`text-4xl font-black leading-none ${danger ? 'text-red-500' : 'text-[#0d1b12]'}`}>{value}</p>
  </div>
);

const CheckIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M229.66,77.66l-128,128a8,8,0,0,1-11.32,0l-56-56a8,8,0,0,1,11.32-11.32L96,188.69,218.34,66.34a8,8,0,0,1,11.32,11.32Z"></path>
  </svg>
);

const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24px" height="24px" fill="currentColor" viewBox="0 0 256 256">
    <path d="M205.66,194.34a8,8,0,0,1-11.32,11.32L128,139.31,61.66,205.66a8,8,0,0,1-11.32-11.32L116.69,128,50.34,61.66A8,8,0,0,1,61.66,50.34L128,116.69l66.34-66.35a8,8,0,0,1,11.32,11.32L139.31,128Z"></path>
  </svg>
);

export default DashboardScreen;
