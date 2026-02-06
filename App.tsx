
import React, { useState } from 'react';
import { View } from './types';
import LandingScreen from './screens/LandingScreen';
import PricingScreen from './screens/PricingScreen';
import DashboardScreen from './screens/DashboardScreen';
import TeacherActionsScreen from './screens/TeacherActionsScreen';
import ParentViewScreen from './screens/ParentViewScreen';
import DiaryDetailScreen from './screens/DiaryDetailScreen';
import SetupWizardScreen from './screens/SetupWizardScreen';
import TeacherMessagesScreen from './screens/TeacherMessagesScreen';
import SchoolCalendarScreen from './screens/SchoolCalendarScreen';
import ResultsProgressScreen from './screens/ResultsProgressScreen';
import StudentProfileScreen from './screens/StudentProfileScreen';
import WeeklyReviewScreen from './screens/WeeklyReviewScreen';
import AddHomeworkScreen from './screens/AddHomeworkScreen';
import SendMessageScreen from './screens/SendMessageScreen';
import EnterResultsScreen from './screens/EnterResultsScreen';
import AddWeeklyReviewScreen from './screens/AddWeeklyReviewScreen';
import ManageParentsScreen from './screens/ManageParentsScreen';
import UpdatesScreen from './screens/UpdatesScreen';
import UserProfileScreen from './screens/UserProfileScreen';
import CbcAssistantScreen from './screens/CbcAssistantScreen';
import ResourceLibraryScreen from './screens/ResourceLibraryScreen';
import ReportAbsenceScreen from './screens/ReportAbsenceScreen';
import SchoolGalleryScreen from './screens/SchoolGalleryScreen';
import BottomNav from './components/BottomNav';

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<View>(View.LANDING);

  const renderView = () => {
    switch (currentView) {
      case View.LANDING:
        return <LandingScreen onStart={() => setCurrentView(View.PRICING)} />;
      case View.PRICING:
        return <PricingScreen onBack={() => setCurrentView(View.LANDING)} onProceed={() => setCurrentView(View.SETUP_WIZARD)} />;
      case View.DASHBOARD:
        return <DashboardScreen onProfileClick={() => setCurrentView(View.USER_PROFILE)} />;
      case View.TEACHER_ACTIONS:
        return (
          <TeacherActionsScreen 
            onAddHomework={() => setCurrentView(View.ADD_HOMEWORK)}
            onSendMessage={() => setCurrentView(View.SEND_MESSAGE)}
            onEnterResults={() => setCurrentView(View.ENTER_RESULTS)}
            onAddReview={() => setCurrentView(View.ADD_WEEKLY_REVIEW)}
            onManageParents={() => setCurrentView(View.MANAGE_PARENTS)}
          />
        );
      case View.PARENT_VIEW:
        return (
          <ParentViewScreen 
            onDiaryClick={() => setCurrentView(View.DIARY_DETAIL)} 
            onMessagesClick={() => setCurrentView(View.TEACHER_MESSAGES)}
            onCalendarClick={() => setCurrentView(View.SCHOOL_CALENDAR)}
            onResultsClick={() => setCurrentView(View.RESULTS_PROGRESS)}
            onProfileClick={() => setCurrentView(View.STUDENT_PROFILE)}
            onWeeklyReviewClick={() => setCurrentView(View.WEEKLY_REVIEW)}
            onCbcAssistantClick={() => setCurrentView(View.CBC_ASSISTANT)}
            onLibraryClick={() => setCurrentView(View.RESOURCE_LIBRARY)}
            onAbsenceClick={() => setCurrentView(View.REPORT_ABSENCE)}
            onGalleryClick={() => setCurrentView(View.GALLERY)}
          />
        );
      case View.DIARY_DETAIL:
        return <DiaryDetailScreen onBack={() => setCurrentView(View.PARENT_VIEW)} onProfileClick={() => setCurrentView(View.STUDENT_PROFILE)} />;
      case View.TEACHER_MESSAGES:
        return <TeacherMessagesScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.SCHOOL_CALENDAR:
        return <SchoolCalendarScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.RESULTS_PROGRESS:
        return <ResultsProgressScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.STUDENT_PROFILE:
        return <StudentProfileScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.WEEKLY_REVIEW:
        return <WeeklyReviewScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.ADD_HOMEWORK:
        return <AddHomeworkScreen onBack={() => setCurrentView(View.TEACHER_ACTIONS)} />;
      case View.SEND_MESSAGE:
        return <SendMessageScreen onBack={() => setCurrentView(View.TEACHER_ACTIONS)} />;
      case View.ENTER_RESULTS:
        return <EnterResultsScreen onBack={() => setCurrentView(View.TEACHER_ACTIONS)} />;
      case View.ADD_WEEKLY_REVIEW:
        return <AddWeeklyReviewScreen onBack={() => setCurrentView(View.TEACHER_ACTIONS)} />;
      case View.MANAGE_PARENTS:
        return <ManageParentsScreen onBack={() => setCurrentView(View.TEACHER_ACTIONS)} />;
      case View.UPDATES:
        return <UpdatesScreen />;
      case View.USER_PROFILE:
        return <UserProfileScreen onBack={() => setCurrentView(View.DASHBOARD)} />;
      case View.CBC_ASSISTANT:
        return <CbcAssistantScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.RESOURCE_LIBRARY:
        return <ResourceLibraryScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.REPORT_ABSENCE:
        return <ReportAbsenceScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.GALLERY:
        return <SchoolGalleryScreen onBack={() => setCurrentView(View.PARENT_VIEW)} />;
      case View.SETUP_WIZARD:
        return <SetupWizardScreen onComplete={() => setCurrentView(View.DASHBOARD)} onBack={() => setCurrentView(View.PRICING)} />;
      default:
        return <LandingScreen onStart={() => setCurrentView(View.PRICING)} />;
    }
  };

  return (
    <div className="flex flex-col min-h-screen max-w-[480px] mx-auto bg-[#f8fcf9] shadow-xl relative overflow-x-hidden font-['Lexend']">
      <main className="flex-1 pb-24">
        {renderView()}
      </main>
      <BottomNav currentView={currentView} setView={setCurrentView} />
    </div>
  );
};

export default App;
