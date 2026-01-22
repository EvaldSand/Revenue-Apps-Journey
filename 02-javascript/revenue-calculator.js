// Week 2 Mini-Project 1: Revenue Calculator for All Projects
console.log("=== 💰 REVENUE CALCULATOR - 12 Month Projection ===\n");

// Project Revenue Function
function calculateProject(name, unitsSold, price, type) {
  const revenue = unitsSold * price;
  const emoji = type === "one-time" ? "📱" : "💼";
  
  return {
    name: name,
    units: unitsSold,
    price: price,
    revenue: revenue,
    type: type,
    emoji: emoji
  };
}

// Calculate All 5 Projects (12-month projections)
const projects = [
  calculateProject("Podcast App", 150, 4.99, "one-time"),
  calculateProject("SaaS Tool", 25, 19, "monthly"),
  calculateProject("Finance App", 100, 2.99, "subscription"),
  calculateProject("Unreal Game", 50, 9.99, "one-time"),
  calculateProject("Portfolio Leads", 5, 500, "freelance")
];

// Display Each Project
console.log("📊 PROJECT BREAKDOWN:\n");
projects.forEach((project, index) => {
  console.log(`${index + 1}. ${project.emoji} ${project.name}`);
  console.log(`   Units: ${project.units} | Price: €${project.price}`);
  console.log(`   Revenue: €${project.revenue.toFixed(2)}`);
  console.log(`   Type: ${project.type}\n`);
});

// Calculate Totals
let totalRevenue = 0;
for (let i = 0; i < projects.length; i++) {
  totalRevenue += projects[i].revenue;
}

const monthlyRecurring = projects[1].revenue + projects[2].revenue; // SaaS + Finance
const oneTimeRevenue = totalRevenue - monthlyRecurring;

// Summary
console.log("=== 💵 REVENUE SUMMARY ===");
console.log(`One-time revenue: €${oneTimeRevenue.toFixed(2)}`);
console.log(`Monthly recurring: €${monthlyRecurring.toFixed(2)}/mo`);
console.log(`12-month MRR: €${(monthlyRecurring * 12).toFixed(2)}`);
console.log(`\n🎯 TOTAL 12-MONTH: €${(oneTimeRevenue + (monthlyRecurring * 12)).toFixed(2)}`);

// Goal Check
const goal = 6000; // €500/mo × 12 months
const projection = oneTimeRevenue + (monthlyRecurring * 12);

if (projection >= goal) {
  console.log(`\n🎉 GOAL EXCEEDED! +€${(projection - goal).toFixed(2)} above target!`);
} else {
  console.log(`\n📈 ${((projection / goal) * 100).toFixed(1)}% of goal. €${(goal - projection).toFixed(2)} to go.`);
}
