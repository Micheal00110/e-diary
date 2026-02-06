
export enum View {
  LANDING = 'landing',
  PRICING = 'pricing',
  DASHBOARD = 'dashboard',
  TEACHER_ACTIONS = 'teacher_actions',
  PARENT_VIEW = 'parent_view',
  DIARY_DETAIL = 'diary_detail',
  SETUP_WIZARD = 'setup_wizard',
  TEACHER_MESSAGES = 'teacher_messages',
  SCHOOL_CALENDAR = 'school_calendar',
  RESULTS_PROGRESS = 'results_progress',
  STUDENT_PROFILE = 'student_profile',
  WEEKLY_REVIEW = 'weekly_review',
  ADD_HOMEWORK = 'add_homework',
  SEND_MESSAGE = 'send_message',
  ENTER_RESULTS = 'enter_results',
  ADD_WEEKLY_REVIEW = 'add_weekly_review',
  MANAGE_PARENTS = 'manage_parents',
  UPDATES = 'updates',
  USER_PROFILE = 'user_profile',
  CBC_ASSISTANT = 'cbc_assistant',
  RESOURCE_LIBRARY = 'resource_library',
  REPORT_ABSENCE = 'report_absence',
  GALLERY = 'gallery'
}

export interface Student {
  id: string;
  name: string;
  className: string;
  activeToday: boolean;
  avatar: string;
}

export interface Homework {
  subject: string;
  task: string;
}

export interface PricingPlan {
  name: string;
  price: string;
  billing: string;
  features: string[];
  recommended?: boolean;
}
