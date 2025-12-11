// SIDEBAR LINKS

export const sidebarLinks = [
  {
    section: "Dashboard",
    links: [
      { name: "Ecommerce", path: "/dashboard", icon: "shopping-bag" },
    ],
  },
  {
    section: "Pages",
    links: [
      { name: "Orders", path: "/orders", icon: "shopping-cart" },
      { name: "Employees", path: "/employees", icon: "users" },
      { name: "Customers", path: "/customers", icon: "user-check" },
    ],
  },
  {
    section: "Apps",
    links: [
      { name: "Calendar", path: "/apps/calendar", icon: "calendar" },
      { name: "Kanban", path: "/apps/kanban", icon: "kanban" },
      { name: "Editor", path: "/apps/editor", icon: "edit" },
      { name: "Color Picker", path: "/apps/color-picker", icon: "palette" },
    ],
  },
  {
    section: "Charts",
    links: [
      { name: "Line", path: "/charts/line", icon: "trending-up" },
      { name: "Area", path: "/charts/area", icon: "area-chart" },
      { name: "Bar", path: "/charts/bar", icon: "bar-chart" },
      { name: "Pie", path: "/charts/pie", icon: "pie-chart" },
      { name: "Financial", path: "/charts/financial", icon: "candlestick" },
      { name: "Color Mapping", path: "/charts/color-mapping", icon: "layers" },
      { name: "Pyramid", path: "/charts/pyramid", icon: "triangle" },
      { name: "Stacked", path: "/charts/stacked", icon: "stack" },
    ],
  },
];

// EARNINGS CARDS

export const earningCards = [
  {
    title: "Earnings",
    amount: "$63,448.78",
    icon: "dollar-sign",
    iconBg: "#E0F7FA",
    iconColor: "#00ACC1",
  },
  {
    title: "Customers",
    amount: "39,354",
    percentage: "-4%",
    icon: "users",
    iconBg: "#E8F5E9",
    iconColor: "#43A047",
  },
  {
    title: "Products",
    amount: "4,396",
    percentage: "+23%",
    icon: "box",
    iconBg: "#FFF8E1",
    iconColor: "#FDD835",
  },
  {
    title: "Sales",
    amount: "423,39",
    percentage: "+38%",
    icon: "bar-chart",
    iconBg: "#FFF3E0",
    iconColor: "#FB8C00",
  },
];

// REVENUE UPDATES

export const revenueData = {
  budget: "$93,438",
  expense: "$48,487",
  budgetChange: "+23%",
  expenseChange: "-12%",
};

export const revenueChartData = [
  { month: "Jan", budget: 200, expense: 120 },
  { month: "Feb", budget: 300, expense: 160 },
  { month: "Mar", budget: 350, expense: 180 },
  { month: "Apr", budget: 400, expense: 250 },
  { month: "May", budget: 450, expense: 300 },
  { month: "Jun", budget: 500, expense: 320 },
  { month: "Jul", budget: 600, expense: 400 },
];

// ------------------------------
// RECENT TRANSACTIONS
// ------------------------------

export const recentTransactions = [
  {
    title: "Paypal Transfer",
    amount: "+$350",
    status: "Added",
    icon: "wallet",
    iconColor: "#00ACC1",
    iconBg: "#E0F7FA",
  },
  {
    title: "Wallet Payment",
    amount: "-$560",
    status: "Bill",
    icon: "shield",
    iconColor: "#4CAF50",
    iconBg: "#E8F5E9",
  },
  {
    title: "Credit Card Refund",
    amount: "+$350",
    status: "Reversed",
    icon: "credit-card",
    iconColor: "#FDD835",
    iconBg: "#FFF8E1",
  },
  {
    title: "Bank Transfer",
    amount: "+$350",
    status: "Added",
    icon: "arrow-up-right",
    iconColor: "#E57373",
    iconBg: "#FFEBEE",
  },
];

// ------------------------------
// WEEKLY STATS
// ------------------------------

export const weeklyStats = [
  {
    title: "Top Sales",
    amount: "-$560",
    desc: "Johnathan Doe",
    icon: "shopping-cart",
    iconBg: "#FB9678",
  },
  {
    title: "Best Seller",
    amount: "+$230",
    desc: "MaterialPro Admin",
    icon: "star",
    iconBg: "#FDD835",
  },
  {
    title: "Most Commented",
    amount: "+$156",
    desc: "Ample Admin",
    icon: "message-circle",
    iconBg: "#00C292",
  },
];

// ------------------------------
// PRODUCTS PERFORMANCE
// ------------------------------

export const productPerformance = [
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    title: "Butterscotch Ice Cream",
    desc: "Ice-Cream, Milk, Powder",
    rating: "Good",
    date: "2021-06-17",
  },
  {
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    title: "Red Candy Deluxe",
    desc: "Candy, Sugar, Flavor",
    rating: "Awesome",
    date: "2021-07-15",
  },
];

// ------------------------------
// ORDERS DATA
// ------------------------------

export const ordersData = [
  {
    orderId: 10248,
    customer: "Vinet",
    total: 32.38,
    item: "Fresh Tomato",
    location: "USA",
    status: "Pending",
    statusColor: "#FB9678",
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
  {
    orderId: 345653,
    customer: "Carson Darrin",
    total: 56.34,
    item: "Butter Scotch",
    location: "Delhi",
    status: "Complete",
    statusColor: "#8BE78B",
    image:
      "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
  },
];

// ------------------------------
// EMPLOYEES DATA
// ------------------------------

export const employeesData = [
  {
    id: 1,
    name: "Michael Roberts",
    title: "Software Engineer",
    country: "USA",
    hireDate: "2021-02-13",
    reportsTo: "Sarah Thomas",
    avatar: "https://i.pravatar.cc/150?img=3",
  },
  {
    id: 2,
    name: "Sarah Thomas",
    title: "Team Lead",
    country: "UK",
    hireDate: "2020-03-12",
    reportsTo: "No one",
    avatar: "https://i.pravatar.cc/150?img=5",
  },
];

// ------------------------------
// CUSTOMERS DATA
// ------------------------------

export const customersData = [
  {
    id: 1,
    name: "Alex Johnson",
    project: "Ecommerce Redesign",
    status: "Active",
    weeks: 5,
    budget: "$32,000",
    location: "USA",
    avatar: "https://i.pravatar.cc/150?img=8",
  },
  {
    id: 2,
    name: "Riya Sharma",
    project: "CRM Dashboard",
    status: "Pending",
    weeks: 3,
    budget: "$18,000",
    location: "India",
    avatar: "https://i.pravatar.cc/150?img=12",
  },
];

// ------------------------------
// CALENDAR EVENTS
// ------------------------------

export const calendarEvents = [
  {
    id: 1,
    title: "Team Meeting",
    start: "2025-01-15T10:00:00",
    end: "2025-01-15T11:00:00",
  },
  {
    id: 2,
    title: "Design Review",
    start: "2025-01-17T14:00:00",
    end: "2025-01-17T15:00:00",
  },
];

// ------------------------------
// KANBAN BOARD
// ------------------------------

export const kanbanData = {
  todo: [
    { id: "t1", title: "Design login page" },
    { id: "t2", title: "Update dashboard widgets" },
  ],
  inProgress: [
    { id: "p1", title: "Build Kanban board UI" },
  ],
  testing: [
    { id: "test1", title: "Test user onboarding flow" },
  ],
  done: [
    { id: "d1", title: "Fix table pagination bug" },
  ],
};

// ------------------------------
// NOTIFICATIONS
// ------------------------------

export const notifications = [
  { id: 1, message: "New order received", time: "2m ago", unread: true },
  { id: 2, message: "Server backup completed", time: "1h ago", unread: false },
  { id: 3, message: "New customer registered", time: "5h ago", unread: false },
];

// ------------------------------
// THEME COLORS
// ------------------------------

export const themeColors = [
  "#1E88E5",
  "#8E24AA",
  "#D81B60",
  "#43A047",
  "#FB8C00",
  "#00ACC1",
];

// ------------------------------
// USER PROFILE (For Navbar Dropdown)
// ------------------------------
export const userProfileData = {
  name: "Michael Roberts",
  email: "michael@shoppy.com",
  role: "Administrator",
  avatar: "https://i.pravatar.cc/150?img=3", 
};

// ------------------------------
// CHAT DATA (For Navbar Dropdown)
// ------------------------------
export const chatData = [
  {
    image: "https://i.pravatar.cc/150?img=12",
    message: "Roman Joined the Team!",
    desc: "Congratulate him",
    time: "9:08 AM",
  },
  {
    image: "https://i.pravatar.cc/150?img=5",
    message: "New message received",
    desc: "Salma sent you new message",
    time: "11:56 AM",
  },
  {
    image: "https://i.pravatar.cc/150?img=3",
    message: "New Payment received",
    desc: "Check your earnings",
    time: "4:39 AM",
  },
];

// ------------------------------
// CART DATA (For Navbar Dropdown)
// ------------------------------
export const cartData = [
  {
    image: "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Butterscotch Ice Cream",
    category: "Milk Product",
    price: "$250",
  },
  {
    image: "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Supreme Fresh Tomato",
    category: "Vegetable Item",
    price: "$450",
  },
  {
    image: "https://cdn.shopclues.com/images1/thumbnails/104158/320/320/148648730-104158193-1592481791.jpg",
    name: "Red Color Candy",
    category: "Food Item",
    price: "$190",
  },
];

// ------------------------------
// SPARKLINE CHARTS (For Dashboard Cards)
// ------------------------------
export const sparklineAreaData = [
  { x: 1, yval: 2 },
  { x: 2, yval: 6 },
  { x: 3, yval: 8 },
  { x: 4, yval: 5 },
  { x: 5, yval: 10 },
];