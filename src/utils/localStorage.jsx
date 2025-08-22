const Employees = [
  {
    id: 1,
    firstName: "Aarav",
    email: "employee1@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Design Homepage",
        description: "Create wireframe and mockup for homepage.",
        date: "2025-07-10",
        category: "Design",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Navbar Bug",
        description: "Resolve alignment issue in responsive view.",
        date: "2025-07-09",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Update Logo",
        description: "Replace with new brand logo.",
        date: "2025-07-08",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 2,
    firstName: "Priya",
    email: "employee2@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Backend API Integration",
        description: "Integrate user module with backend.",
        date: "2025-07-07",
        category: "Development",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Write Unit Tests",
        description: "Write tests for login flow.",
        date: "2025-07-06",
        category: "Testing",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Bug Report Documentation",
        description: "Prepare bug report summary.",
        date: "2025-07-05",
        category: "Documentation",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Dark Mode UI Fix",
        description: "Fix text visibility in dark mode.",
        date: "2025-07-04",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      }
    ]
  },
  {
    id: 3,
    firstName: "Rohan",
    email: "employee3@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Client Feedback Review",
        description: "Summarize feedback from last meeting.",
        date: "2025-07-03",
        category: "Management",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Deploy to Staging",
        description: "Push latest changes to staging server.",
        date: "2025-07-02",
        category: "DevOps",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Optimize Images",
        description: "Compress assets for faster load.",
        date: "2025-07-01",
        category: "Performance",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "404 Page Update",
        description: "Make error page more user-friendly.",
        date: "2025-06-30",
        category: "Design",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 4,
    firstName: "Neha",
    email: "employee4@example.com",
    password: "123",
    taskCounts: {
      active: 1,
      newTask: 1,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "Team Standup Notes",
        description: "Share daily updates summary.",
        date: "2025-06-29",
        category: "Communication",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "Fix Footer Layout",
        description: "Adjust footer for small screens.",
        date: "2025-06-28",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Security Patch",
        description: "Update packages to latest secure version.",
        date: "2025-06-27",
        category: "DevOps",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      }
    ]
  },
  {
    id: 5,
    firstName: "Ishaan",
    email: "employee5@example.com",
    password: "123",
    taskCounts: {
      active: 2,
      newTask: 2,
      completed: 1,
      failed: 1
    },
    tasks: [
      {
        title: "New Feature Planning",
        description: "Prepare plan for upcoming release.",
        date: "2025-06-26",
        category: "Management",
        active: true,
        newTask: true,
        completed: false,
        failed: false
      },
      {
        title: "CSS Cleanup",
        description: "Remove unused Tailwind classes.",
        date: "2025-06-25",
        category: "Design",
        active: true,
        newTask: false,
        completed: false,
        failed: false
      },
      {
        title: "Code Review",
        description: "Review merge request #92.",
        date: "2025-06-24",
        category: "Development",
        active: false,
        newTask: false,
        completed: true,
        failed: false
      },
      {
        title: "Email Campaign Test",
        description: "Run and verify marketing emails.",
        date: "2025-06-23",
        category: "Marketing",
        active: false,
        newTask: false,
        completed: false,
        failed: true
      },
      {
        title: "Page Speed Audit",
        description: "Analyze site speed using Lighthouse.",
        date: "2025-06-22",
        category: "Performance",
        active: false,
        newTask: true,
        completed: false,
        failed: false
      }
    ]
  }
];


const Admin=[
  {
    "id": 1,
    "email": "admin@example.com",
    "password": "123"
  }
]

export const setLocalStorage = ()=>{
  localStorage.setItem('Employees',JSON.stringify(Employees))
   localStorage.setItem('Admin',JSON.stringify(Admin))
}

export const getLocalStorage = ()=>{
    const employees = JSON.parse(localStorage.getItem('Employees'))
      const admin = JSON.parse(localStorage.getItem('Admin'))
      return{employees,admin}
}

