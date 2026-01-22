// Week 2: Loops & Arrays
console.log("=== 🔄 LOOPS & ARRAYS ===\n");

// 1. ARRAYS = Lists of items
const projects = ["Podcast App", "SaaS Tool", "Finance App", "Game", "Portfolio"];
const prices = [4.99, 19, 2.99, 9.99, 500];
const weeks = [10, 16, 8, 14, 6];

console.log("📋 My 5 Projects:", projects);
console.log("💰 Prices:", prices);
console.log("⏱️ Build time (weeks):", weeks);

// 2. FOR LOOP = Repeat code N times
console.log("\n=== FOR LOOP: Count 1-5 ===");
for (let i = 0; i < 5; i++) {
  console.log(`Week ${i + 1}: Learning...`);
}

// 3. LOOP THROUGH ARRAY
console.log("\n=== PROJECT LIST ===");
for (let i = 0; i < projects.length; i++) {
  console.log(`${i + 1}. ${projects[i]} - €${prices[i]} - ${weeks[i]} weeks`);
}

// 4. FOREACH = Modern loop for arrays
console.log("\n=== FOREACH METHOD ===");
projects.forEach((project, index) => {
  const revenue = index === 1 || index === 2 ? "Recurring" : "One-time";
  console.log(`${project}: ${revenue} revenue`);
});

// 5. MAP = Transform array (create new array)
console.log("\n=== MAP: Calculate potential revenue ===");
const unitsSold = [150, 25, 100, 50, 5]; // Estimated sales
const revenues = prices.map((price, index) => {
  return price * unitsSold[index];
});

console.log("Revenue projections:", revenues);
revenues.forEach((rev, i) => {
  console.log(`${projects[i]}: €${rev.toFixed(2)}`);
});

// 6. FILTER = Keep only items that match condition
console.log("\n=== FILTER: Quick builds (< 10 weeks) ===");
const quickProjects = projects.filter((project, index) => {
  return weeks[index] < 10;
});
console.log("Fast builds:", quickProjects);

// 7. REDUCE = Combine array into single value
console.log("\n=== REDUCE: Total revenue ===");
const totalRevenue = revenues.reduce((sum, revenue) => {
  return sum + revenue;
}, 0);

console.log(`💵 Total projected revenue: €${totalRevenue.toFixed(2)}`);

// 8. WHILE LOOP = Repeat until condition false
console.log("\n=== WHILE LOOP: Weeks until launch ===");
let weeksLeft = 60;
let currentWeek = 2;
while (currentWeek <= 6) {
  console.log(`Week ${currentWeek}/60: ${weeksLeft - currentWeek} weeks remaining`);
  currentWeek++;
}

// 9. ARRAY METHODS CHEAT SHEET
console.log("\n=== 📚 ARRAY METHODS SUMMARY ===");
const summary = {
  "forEach": "Loop through each item",
  "map": "Transform each item → new array",
  "filter": "Keep items that match condition",
  "reduce": "Combine all items → single value",
  "find": "Get first item that matches",
  "includes": "Check if item exists"
};

Object.keys(summary).forEach(method => {
  console.log(`${method}: ${summary[method]}`);
});

// 10. PRACTICAL EXAMPLE: Track learning hours
console.log("\n=== 📊 LEARNING HOURS TRACKER ===");
const weeklyHours = [16, 15, 15, 15, 15, 15]; // Week 1-6
const totalHours = weeklyHours.reduce((sum, hours) => sum + hours, 0);
const averageHours = totalHours / weeklyHours.length;

console.log("Weekly hours:", weeklyHours);
console.log("Total Phase 0 hours:", totalHours);
console.log("Average per week:", averageHours.toFixed(1));

// Check if on track (should be 15/week)
const onTrack = weeklyHours.every(hours => hours >= 10);
console.log("On track? (>10hrs/week):", onTrack ? "✅ YES" : "❌ NO");
