// Week 2 Mini-Project 2: Project Tracker System
console.log("=== 🎯 PROJECT TRACKER SYSTEM ===\n");

class Project {
  constructor(name, price, weeks, type) {
    this.name = name;
    this.price = price;
    this.weeks = weeks;
    this.type = type;
    this.status = "planning";
    this.currentWeek = 0;
    this.estimatedSales = 0;
  }

  start() {
    this.status = "in-progress";
    console.log(`✅ ${this.name} started!`);
  }

  updateProgress(week) {
    this.currentWeek = week;
    const progress = ((week / this.weeks) * 100).toFixed(1);
    console.log(`📊 ${this.name}: Week ${week}/${this.weeks} (${progress}% complete)`);
  }

  launch(sales) {
    this.status = "launched";
    this.estimatedSales = sales;
    const revenue = this.calculateRevenue();
    console.log(`🚀 ${this.name} LAUNCHED! Revenue: €${revenue.toFixed(2)}`);
  }

  calculateRevenue() {
    return this.price * this.estimatedSales;
  }

  getInfo() {
    return {
      name: this.name,
      status: this.status,
      progress: `${this.currentWeek}/${this.weeks} weeks`,
      revenue: this.calculateRevenue()
    };
  }
}

// Create all projects
const podcast = new Project("Podcast App", 4.99, 10, "one-time");
const saas = new Project("Freelancer SaaS", 19, 16, "monthly");
const finance = new Project("Finance App", 2.99, 8, "subscription");
const game = new Project("Unreal Game", 9.99, 14, "one-time");
const portfolio = new Project("Portfolio", 500, 6, "freelance");

const allProjects = [podcast, saas, finance, game, portfolio];

// Simulate progress
console.log("=== PROJECT LIFECYCLE ===\n");

// Week 7: Start podcast
podcast.start();
podcast.updateProgress(1);

// Week 10: Progress update
podcast.updateProgress(5);

// Week 16: Launch!
podcast.launch(150);

console.log("\n=== ALL PROJECTS STATUS ===");
allProjects.forEach((project, index) => {
  console.log(`${index + 1}. ${project.name} - ${project.status}`);
});

console.log("\n=== REVENUE SUMMARY ===");
const totalRevenue = allProjects.reduce((sum, p) => sum + p.calculateRevenue(), 0);
console.log(`Total projected: €${totalRevenue.toFixed(2)}`);
