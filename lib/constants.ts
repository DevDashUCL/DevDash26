export interface TermLine {
  prompt?: string;
  cmd?: string;
  out?: string;
  delay: number;
}

export const TARGET_DATE = new Date("2026-09-19T00:00:00");
export const REGISTER_URL = "https://forms.gle/e7YfuG6DT2M2aaTNA";
export const FONT_SIZE = 14;
export const CHARS = "ucldevdash";

export const TERM_LINES: TermLine[] = [
  { prompt: "ucl@devdash:~$", cmd: " npm run build-the-future", delay: 600 },
  { out: "\u2713 DevDash 2026 is ready. Let's go.", delay: 1200 },
];

export interface ProgramDay {
  day: string;
  title: string;
  sessions: { name: string; duration: string }[];
}

export const PROGRAM: ProgramDay[] = [
  {
    day: "Day 1",
    title: "Orientation",
    sessions: [
      { name: "Introduction to Hackathons Session", duration: "1h" },
      { name: "Opening registration", duration: "" },
    ],
  },
  {
    day: "Day 2",
    title: "Technical",
    sessions: [{ name: "GitHub & Version Control Workshop", duration: "2h" }],
  },
  {
    day: "Day 3",
    title: "Technical",
    sessions: [
      {
        name: "AI-Powered Development & Modern AI Tools Workshop",
        duration: "3h",
      },
    ],
  },
  {
    day: "Day 4",
    title: "University Hackathon",
    sessions: [{ name: "Hackathon", duration: "8h" }],
  },
];

export const TEAM_CARDS = [
  {
    icon: "\ud83d\udccb",
    name: "Shehani Mukadange",
    desc: "Event Lead",
    email: "shehanikav@gmail.com",
    phone: "0742885971",
  },
  {
    icon: "\ud83d\udd04",
    name: "Mahdi Hannan",
    desc: "Program Coordinator",
    email: "hannanmahdi009@gmail.com",
    phone: "0773927351",
  },
];

export interface Prize {
  award: string;
  recipients: string;
}

export const PRIZES: Prize[] = [
  { award: "Cash prize", recipients: "TBD" },
  { award: "1st Place Certificate", recipients: "For the 1st place team" },
  { award: "2nd Place Certificate", recipients: "For the 2nd place team" },
  { award: "3rd Place Certificate", recipients: "For the 3rd place team" },
  {
    award: "Participation Certificate",
    recipients: "All participating students",
  },
];
