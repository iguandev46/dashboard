// app/dashboard/scrum/data.ts
export const initialColumns = {
  todo: {
    title: "To Do",
    color: "bg-gray-400",
    items: [
      {
        id: "1",
        title: "Design new landing page",
        desc: "Create wireframes and mockups",
        priority: "high",
        date: "Nov 25",
      },
      {
        id: "2",
        title: "Write user documentation",
        desc: "Document all new features",
        priority: "medium",
        date: "Nov 28",
      },
    ],
  },
  progress: {
    title: "In Progress",
    color: "bg-blue-500",
    items: [
      {
        id: "3",
        title: "Implement authentication",
        desc: "Add JWT-based auth",
        priority: "high",
        date: "Nov 22",
      },
      {
        id: "4",
        title: "Fix responsive issues",
        desc: "Mobile layout problems",
        priority: "medium",
        date: "Nov 23",
      },
    ],
  },
  review: {
    title: "Review",
    color: "bg-yellow-400",
    items: [
      {
        id: "5",
        title: "Update dependencies",
        desc: "Upgrade all npm packages",
        priority: "low",
        date: "Nov 30",
      },
      {
        id: "6",
        title: "Deploy to production",
        desc: "Final release v2.0",
        priority: "high",
        date: "Nov 24",
      },
    ],
  },
  done: {
    title: "Done",
    color: "bg-green-500",
    items: [
      {
        id: "7",
        title: "Performance optimization",
        desc: "Reduce bundle size",
        priority: "medium",
        date: "Nov 26",
      },
    ],
  },
};
