// Week 2 Day 2: JavaScript Objects
console.log("=== 📦 OBJECTS: Store Related Data ===\n");

// 1. OBJECT = Key-value pairs (like a dictionary)
const podcastApp = {
  name: "Podcast Workout App",
  price: 4.99,
  platform: "iOS",
  status: "planning",
  weeksToLaunch: 10,
  targetSales: 150
};

console.log("Project:", podcastApp);
console.log("Name:", podcastApp.name);
console.log("Price: €", podcastApp.price);

// 2. NESTED OBJECTS
const allProjects = {
  podcast: {
    name: "Podcast App",
    revenue: 4.99 * 150,
    type: "one-time",
    launched: false
  },
  saas: {
    name: "Freelancer SaaS",
    revenue: 19 * 25,
    type: "monthly",
    launched: false
  },
  finance: {
    name: "Finance Tracker",
    revenue: 2.99 * 100,
    type: "subscription",
    launched: false
  }
};

console.log("\n=== ALL PROJECTS ===");
console.log(allProjects);

// 3. ACCESS nested data
console.log("\n=== PROJECT REVENUES ===");
console.log("Podcast:", "€" + allProjects.podcast.revenue);
console.log("SaaS:", "€" + allProjects.saas.revenue + "/mo");
console.log("Finance:", "€" + allProjects.finance.revenue + "/mo");

// 4. METHODS = Functions inside objects
const developer = {
  name: "Evald",
  hoursPerWeek: 15,
  currentWeek: 2,

  // Method: calculate total hours
  getTotalHours: function () {
    return this.hoursPerWeek * this.currentWeek;
  },

  // Method: check if on track
  isOnTrack: function () {
    return this.hoursPerWeek >= 15;
  },

  // Arrow function method (modern)
  getStatus: () => "🔥 Building!"
};

console.log("\n=== DEVELOPER STATS ===");
console.log("Name:", developer.name);
console.log("Total hours:", developer.getTotalHours());
console.log("On track?", developer.isOnTrack() ? "✅" : "❌");
console.log("Status:", developer.getStatus());

// 5. ARRAY OF OBJECTS (most common in real apps)
const weeklyProgress = [
  { week: 1, hours: 16, completed: true, skills: ["git", "terminal", "npm"] },
  { week: 2, hours: 15, completed: false, skills: ["javascript", "loops", "arrays"] }
];

console.log("\n=== WEEKLY PROGRESS ===");
weeklyProgress.forEach(week => {
  const status = week.completed ? "✅" : "🔄";
  console.log(`Week ${week.week} ${status}: ${week.hours}hrs - ${week.skills.join(", ")}`);
});

// 6. OBJECT DESTRUCTURING (extract values easily)
const { name, price, weeksToLaunch } = podcastApp;
console.log(`\n${name} costs €${price}, launches in ${weeksToLaunch} weeks`);

// 7. COMBINE objects (spread operator)
const projectUpdate = { ...podcastApp, status: "in-progress", currentWeek: 2 };
console.log("\n=== UPDATED PROJECT ===");
console.log(projectUpdate);

// 8. REAL-WORLD EXAMPLE: Revenue tracker
const revenueTracker = {
  projects: [
    { name: "Podcast", revenue: 748.50, type: "one-time" },
    { name: "SaaS", revenue: 475, type: "monthly" },
    { name: "Finance", revenue: 299, type: "monthly" }
  ],

  getTotalOneTime() {
    return this.projects
      .filter(p => p.type === "one-time")
      .reduce((sum, p) => sum + p.revenue, 0);
  },

  getMonthlyRecurring() {
    return this.projects
      .filter(p => p.type === "monthly")
      .reduce((sum, p) => sum + p.revenue, 0);
  },

  getYearlyProjection() {
    return this.getTotalOneTime() + (this.getMonthlyRecurring() * 12);
  }
};

console.log("\n=== REVENUE TRACKER ===");
console.log("One-time: €" + revenueTracker.getTotalOneTime());
console.log("Monthly: €" + revenueTracker.getMonthlyRecurring() + "/mo");
console.log("Yearly projection: €" + revenueTracker.getYearlyProjection());
