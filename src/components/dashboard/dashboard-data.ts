export type DashboardNote = {
  id: string;
  title: string;
  scope: string;
  subject: string;
  rating: number;
  ratingCount: number;
  fileType: "PDF" | "Images";
};

export type DashboardRoom = {
  id: string;
  title: string;
  scope: string;
  participantCount: number;
};

export type RoadmapTask = {
  id: string;
  title: string;
  duration?: string;
};

export const dashboardNotes: DashboardNote[] = [
  {
    id: "operating-systems-unit-3",
    title: "Operating Systems — Unit 3",
    scope: "VIT Vellore",
    subject: "Computer Science",
    rating: 4.9,
    ratingCount: 38,
    fileType: "PDF",
  },
  {
    id: "dbms-exam-revision",
    title: "DBMS exam revision pack",
    scope: "Public community",
    subject: "Database Systems",
    rating: 4.8,
    ratingCount: 24,
    fileType: "PDF",
  },
  {
    id: "computer-networks-handwritten",
    title: "Computer Networks handwritten notes",
    scope: "VIT Vellore",
    subject: "Computer Networks",
    rating: 4.7,
    ratingCount: 19,
    fileType: "Images",
  },
];

export const dashboardRooms: DashboardRoom[] = [
  {
    id: "operating-systems-revision",
    title: "Operating Systems revision",
    scope: "Public room",
    participantCount: 3,
  },
  {
    id: "dbms-quick-review",
    title: "DBMS quick review",
    scope: "VIT Vellore",
    participantCount: 5,
  },
];

export const roadmapTasks: RoadmapTask[] = [
  { id: "process-states", title: "Review process states" },
  {
    id: "cpu-scheduling",
    title: "Compare CPU scheduling algorithms",
    duration: "42 min",
  },
  { id: "deadlocks", title: "Practice deadlock questions" },
];
