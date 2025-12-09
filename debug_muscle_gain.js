
// Mock data
const DAILY_GOALS = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fats: 70
};

let appState = {
    profile: {
        weight: 70,
        height: 175,
        age: 25,
        gender: 'male',
        activityLevel: '1.55',
        goal: 'muscle-gain',
        tdee: 2500,
        bmr: 1700
    }
};

// Paste relevant functions
function generateMonthlyGoals(targetWeight = null, timelineMonths = 12) {
    if (!appState.profile) return [];

    const { weight, goal, tdee } = appState.profile;
    const monthlyGoals = [];

    // Calculate monthly weight change
    let monthlyWeightChange = 0;

    if (targetWeight !== null) {
        // Use target weight to calculate monthly change
        const totalChange = targetWeight - weight;
        monthlyWeightChange = totalChange / timelineMonths;
    } else {
        // Use default based on goal
        switch (goal) {
            case 'weight-loss':
                monthlyWeightChange = -2.0; // ~2kg per month (0.5kg/week)
                break;
            case 'muscle-gain':
                monthlyWeightChange = 1.0; // ~1kg per month (0.25kg/week)
                break;
            case 'maintenance':
            case 'athletic':
                monthlyWeightChange = 0; // Maintain weight
                break;
        }
    }

    // Generate monthly goals up to the timeline
    const totalMonths = targetWeight !== null ? timelineMonths : 12;
    for (let month = 1; month <= totalMonths; month++) {
        const currentTargetWeight = weight + (monthlyWeightChange * month);
        const monthName = `Month ${month}`;

        // Calculate nutrition targets (these stay consistent based on goal)
        const monthlyGoal = {
            month: month,
            monthName: monthName,
            targetWeight: currentTargetWeight.toFixed(1),
            weightChange: (monthlyWeightChange * month).toFixed(1),
            dailyCalories: DAILY_GOALS.calories,
            protein: DAILY_GOALS.protein,
            carbs: DAILY_GOALS.carbs,
            fats: DAILY_GOALS.fats,
            workoutDays: '4-5 days/week'
        };

        monthlyGoals.push(monthlyGoal);
    }


    return monthlyGoals;
}

// Test Scenarios
console.log("--- Default Muscle Gain (No Target) ---");
const defaultGoals = generateMonthlyGoals();
console.log("Month 1 Weight Change:", defaultGoals[0].weightChange);
console.log("Month 1 Target Weight:", defaultGoals[0].targetWeight);

console.log("\n--- Explicit Target Muscle Gain (70 -> 75 in 3 months) ---");
const targetGoals = generateMonthlyGoals(75, 3);
console.log("Month 1 Weight Change:", targetGoals[0].weightChange);
console.log("Month 1 Target Weight:", targetGoals[0].targetWeight);
console.log("Month 3 Weight Change:", targetGoals[2].weightChange);
console.log("Month 3 Target Weight:", targetGoals[2].targetWeight);

console.log("\n--- Checking Logic ---");
if (parseFloat(defaultGoals[0].weightChange) < 0) {
    console.error("FAIL: Default muscle gain showing negative change!");
} else {
    console.log("PASS: Default muscle gain is positive.");
}

if (parseFloat(targetGoals[0].weightChange) < 0) {
    console.error("FAIL: Targeted muscle gain showing negative change!");
} else {
    console.log("PASS: Targeted muscle gain is positive.");
}
