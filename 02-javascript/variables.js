// Week 2: JavaScript Fundamentals - Variables & Functions
console.log("=== WEEK 2: JAVASCRIPT VARIABLES ===\n");

// 1. Variable Types
let age = 30;                           // Number (changeable)
const name = "Evald";                   // String (fixed)
const isLearning = true;                // Boolean
const revenueGoal = 1000;               // Target MRR

console.log("👤 Name:", name);
console.log("📅 Age:", age);
console.log("📚 Learning?", isLearning);
console.log("💰 Monthly goal: €", revenueGoal);

// 2. Math Operations
const weeklyHours = 15;
const weeksPerMonth = 4;
const monthlyHours = weeklyHours * weeksPerMonth;
console.log("\n⏰ Monthly hours:", monthlyHours);

// 3. Functions (Reusable Code)
function calculateRevenue(units, price) {
  return units * price;
}

function calculateMRR(subscribers, monthlyPrice) {
  return subscribers * monthlyPrice;
}

// 4. Use Functions
const podcastRevenue = calculateRevenue(100, 4.99);
const saasRevenue = calculateMRR(10, 19);

console.log("\n=== REVENUE PROJECTIONS ===");
console.log("📱 Podcast App (100 sales × €4.99):", "€" + podcastRevenue.toFixed(2));
console.log("💼 SaaS Tool (10 users × €19/mo):", "€" + saasRevenue.toFixed(2));
console.log("💵 Total:", "€" + (podcastRevenue + saasRevenue).toFixed(2));

// 5. Arrow Functions (Modern Syntax)
const addNumbers = (a, b) => a + b;
const totalHours = addNumbers(16, 15);  // Week 1 + Week 2
console.log("\n🎯 Total learning hours:", totalHours);

// 6. Conditionals
const currentMRR = 50;
if (currentMRR >= revenueGoal) {
  console.log("🎉 Goal reached!");
} else if (currentMRR > 100) {
  console.log("📈 Great progress!");
} else {
  console.log("🚀 Keep building! €" + (revenueGoal - currentMRR) + " to go");
}
