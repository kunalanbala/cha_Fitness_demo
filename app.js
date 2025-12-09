// ==================== DATA MODELS ====================

// Food database with nutritional information per 100g
const FOOD_DATABASE = {
    'Chicken Breast': { calories: 165, protein: 31, carbs: 0, fats: 3.6, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 5, calcium: 1, magnesium: 7 },
    'Salmon': { calories: 208, protein: 20, carbs: 0, fats: 13, vitaminA: 2, vitaminC: 0, vitaminD: 100, iron: 4, calcium: 1, magnesium: 8 },
    'Eggs': { calories: 155, protein: 13, carbs: 1.1, fats: 11, vitaminA: 10, vitaminC: 0, vitaminD: 10, iron: 9, calcium: 5, magnesium: 3 },
    'Greek Yogurt': { calories: 59, protein: 10, carbs: 3.6, fats: 0.4, vitaminA: 0, vitaminC: 1, vitaminD: 0, iron: 0, calcium: 11, magnesium: 3 },
    'Tofu': { calories: 76, protein: 8, carbs: 1.9, fats: 4.8, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 30, calcium: 35, magnesium: 8 },
    'Brown Rice': { calories: 111, protein: 2.6, carbs: 23, fats: 0.9, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 2, calcium: 1, magnesium: 11 },
    'Oatmeal': { calories: 71, protein: 2.5, carbs: 12, fats: 1.4, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 10, calcium: 1, magnesium: 7 },
    'Whole Wheat Bread': { calories: 247, protein: 13, carbs: 41, fats: 3.4, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 16, calcium: 11, magnesium: 20 },
    'Sweet Potato': { calories: 86, protein: 1.6, carbs: 20, fats: 0.1, vitaminA: 283, vitaminC: 4, vitaminD: 0, iron: 4, calcium: 3, magnesium: 6 },
    'Quinoa': { calories: 120, protein: 4.4, carbs: 21, fats: 1.9, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 8, calcium: 2, magnesium: 16 },
    'Broccoli': { calories: 34, protein: 2.8, carbs: 7, fats: 0.4, vitaminA: 12, vitaminC: 149, vitaminD: 0, iron: 4, calcium: 5, magnesium: 5 },
    'Spinach': { calories: 23, protein: 2.9, carbs: 3.6, fats: 0.4, vitaminA: 188, vitaminC: 47, vitaminD: 0, iron: 15, calcium: 10, magnesium: 20 },
    'Carrots': { calories: 41, protein: 0.9, carbs: 10, fats: 0.2, vitaminA: 334, vitaminC: 10, vitaminD: 0, iron: 2, calcium: 3, magnesium: 3 },
    'Bell Peppers': { calories: 31, protein: 1, carbs: 6, fats: 0.3, vitaminA: 6, vitaminC: 213, vitaminD: 0, iron: 2, calcium: 1, magnesium: 3 },
    'Banana': { calories: 89, protein: 1.1, carbs: 23, fats: 0.3, vitaminA: 1, vitaminC: 15, vitaminD: 0, iron: 1, calcium: 1, magnesium: 7 },
    'Apple': { calories: 52, protein: 0.3, carbs: 14, fats: 0.2, vitaminA: 1, vitaminC: 8, vitaminD: 0, iron: 1, calcium: 1, magnesium: 1 },
    'Orange': { calories: 47, protein: 0.9, carbs: 12, fats: 0.1, vitaminA: 4, vitaminC: 89, vitaminD: 0, iron: 1, calcium: 4, magnesium: 3 },
    'Berries': { calories: 57, protein: 0.7, carbs: 14, fats: 0.3, vitaminA: 1, vitaminC: 53, vitaminD: 0, iron: 3, calcium: 2, magnesium: 2 },
    'Avocado': { calories: 160, protein: 2, carbs: 9, fats: 15, vitaminA: 3, vitaminC: 17, vitaminD: 0, iron: 3, calcium: 1, magnesium: 7 },
    'Almonds': { calories: 579, protein: 21, carbs: 22, fats: 50, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 21, calcium: 26, magnesium: 67 },
    'Olive Oil': { calories: 884, protein: 0, carbs: 0, fats: 100, vitaminA: 0, vitaminC: 0, vitaminD: 0, iron: 2, calcium: 0, magnesium: 0 }
};

// Exercise database with calories burned per minute (approximate)
const EXERCISE_DATABASE = {
    'Running': { caloriesPerMin: { low: 8, moderate: 10, high: 13 }, category: 'Cardio' },
    'Cycling': { caloriesPerMin: { low: 6, moderate: 8, high: 12 }, category: 'Cardio' },
    'Swimming': { caloriesPerMin: { low: 7, moderate: 9, high: 11 }, category: 'Cardio' },
    'Jump Rope': { caloriesPerMin: { low: 10, moderate: 12, high: 15 }, category: 'Cardio' },
    'Rowing': { caloriesPerMin: { low: 7, moderate: 9, high: 12 }, category: 'Cardio' },
    'Bench Press': { caloriesPerMin: { low: 3, moderate: 5, high: 7 }, category: 'Strength' },
    'Squats': { caloriesPerMin: { low: 4, moderate: 6, high: 8 }, category: 'Strength' },
    'Deadlifts': { caloriesPerMin: { low: 4, moderate: 6, high: 8 }, category: 'Strength' },
    'Pull-ups': { caloriesPerMin: { low: 5, moderate: 7, high: 9 }, category: 'Strength' },
    'Push-ups': { caloriesPerMin: { low: 4, moderate: 6, high: 8 }, category: 'Strength' },
    'Bicep Curls': { caloriesPerMin: { low: 3, moderate: 4, high: 6 }, category: 'Strength' },
    'Shoulder Press': { caloriesPerMin: { low: 3, moderate: 5, high: 7 }, category: 'Strength' },
    'Yoga': { caloriesPerMin: { low: 2, moderate: 3, high: 5 }, category: 'Flexibility' },
    'Stretching': { caloriesPerMin: { low: 2, moderate: 3, high: 4 }, category: 'Flexibility' },
    'Pilates': { caloriesPerMin: { low: 3, moderate: 4, high: 6 }, category: 'Flexibility' }
};

// Daily goals
const DAILY_GOALS = {
    calories: 2000,
    protein: 150,
    carbs: 250,
    fats: 70,
    vitaminA: 100,
    vitaminC: 100,
    vitaminD: 100,
    iron: 100,
    calcium: 100,
    magnesium: 100
};

// ==================== STATE MANAGEMENT ====================

let appState = {
    workouts: [],
    nutrition: [],
    profile: null,
    date: new Date().toDateString()
};

// Load state from localStorage
function loadState() {
    const saved = localStorage.getItem('fittrack_data');
    if (saved) {
        const parsed = JSON.parse(saved);
        // Check if data is from today
        if (parsed.date === new Date().toDateString()) {
            // Preserve Auth Data
            const currentUser = appState.currentUser || localStorage.getItem('fittrack_current_user');
            const currentEmail = appState.currentUserEmail || localStorage.getItem('fittrack_current_email');
            const currentPhone = appState.currentUserPhone || localStorage.getItem('fittrack_current_phone');

            // Preserve in-memory target if exists (safety fallback)
            const currentTarget = (appState.profile && appState.profile.target) ? appState.profile.target : null;

            appState = parsed;

            // Restore target if missing in parsed but existed in memory
            if (appState.profile && !appState.profile.target && currentTarget) {
                appState.profile.target = currentTarget;
            }

            // Restore Auth Data
            if (currentUser) appState.currentUser = currentUser;
            if (currentEmail) appState.currentUserEmail = currentEmail;
            if (currentPhone) appState.currentUserPhone = currentPhone;
        } else {
            // New day, reset daily data but PRESERVE PROFILE
            if (parsed.profile) {
                appState.profile = parsed.profile;
            }
            appState.workouts = [];
            appState.nutrition = [];
            appState.date = new Date().toDateString();
            saveState();
        }
    }
}

// Save state to localStorage
function saveState() {
    localStorage.setItem('fittrack_data', JSON.stringify(appState));
}

// ==================== NAVIGATION ====================

function initNavigation() {
    const navButtons = document.querySelectorAll('.nav-btn');
    const views = document.querySelectorAll('.view');

    navButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const viewName = btn.dataset.view;

            // Update active button
            navButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // Update active view
            views.forEach(v => v.classList.remove('active'));
            const viewElement = document.getElementById(viewName);
            if (viewElement) {
                viewElement.classList.add('active');
            } else {
                // Fallback if ID construction was intended (legacy check) or log error
                console.error(`View with ID ${viewName} not found`);
            }
        });
    });
}

// ==================== WORKOUT FUNCTIONS ====================

function addWorkout(exercise, duration, intensity, sets, reps) {
    const exerciseData = EXERCISE_DATABASE[exercise];
    const caloriesBurned = Math.round(exerciseData.caloriesPerMin[intensity] * duration);

    const workout = {
        id: Date.now(),
        exercise,
        duration,
        intensity,
        sets: sets || null,
        reps: reps || null,
        caloriesBurned,
        category: exerciseData.category,
        timestamp: new Date().toLocaleTimeString()
    };

    appState.workouts.push(workout);
    saveState();
    renderWorkouts();
    updateDashboard();
}

function deleteWorkout(id) {
    appState.workouts = appState.workouts.filter(w => w.id !== id);
    saveState();
    renderWorkouts();
    updateDashboard();
}

function renderWorkouts() {
    const list = document.getElementById('workout-list');

    if (appState.workouts.length === 0) {
        list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🏋️</div>
        <div class="empty-state-text">No workouts logged yet. Start tracking!</div>
      </div>
    `;
        return;
    }

    list.innerHTML = appState.workouts.map(workout => `
    <li class="item">
      <div class="item-content">
        <div class="item-title">${workout.exercise}</div>
        <div class="item-details">
          <span class="item-detail">⏱️ <strong>${workout.duration}</strong> min</span>
          <span class="item-detail">🔥 <strong>${workout.caloriesBurned}</strong> kcal</span>
          <span class="item-detail">💪 <strong>${workout.intensity}</strong></span>
          ${workout.sets ? `<span class="item-detail">📊 <strong>${workout.sets}</strong> sets</span>` : ''}
          ${workout.reps ? `<span class="item-detail">🔢 <strong>${workout.reps}</strong> reps</span>` : ''}
          <span class="item-detail">🕐 ${workout.timestamp}</span>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn-icon" onclick="deleteWorkout(${workout.id})" title="Delete">🗑️</button>
      </div>
    </li>
  `).join('');
}

// ==================== NUTRITION FUNCTIONS ====================

function addFood(foodName, portion, mealType) {
    const foodData = FOOD_DATABASE[foodName];
    const multiplier = portion / 100;

    const food = {
        id: Date.now(),
        name: foodName,
        portion,
        mealType,
        calories: Math.round(foodData.calories * multiplier),
        protein: Math.round(foodData.protein * multiplier * 10) / 10,
        carbs: Math.round(foodData.carbs * multiplier * 10) / 10,
        fats: Math.round(foodData.fats * multiplier * 10) / 10,
        vitaminA: Math.round(foodData.vitaminA * multiplier),
        vitaminC: Math.round(foodData.vitaminC * multiplier),
        vitaminD: Math.round(foodData.vitaminD * multiplier),
        iron: Math.round(foodData.iron * multiplier),
        calcium: Math.round(foodData.calcium * multiplier),
        magnesium: Math.round(foodData.magnesium * multiplier),
        timestamp: new Date().toLocaleTimeString()
    };

    appState.nutrition.push(food);
    saveState();
    renderNutrition();
    updateDashboard();
}

function deleteFood(id) {
    appState.nutrition = appState.nutrition.filter(f => f.id !== id);
    saveState();
    renderNutrition();
    updateDashboard();
}

function renderNutrition() {
    const list = document.getElementById('nutrition-list');

    if (appState.nutrition.length === 0) {
        list.innerHTML = `
      <div class="empty-state">
        <div class="empty-state-icon">🥗</div>
        <div class="empty-state-text">No meals logged yet. Start tracking!</div>
      </div>
    `;
        return;
    }

    list.innerHTML = appState.nutrition.map(food => `
    <li class="item">
      <div class="item-content">
        <div class="item-title">${food.name} <span class="badge badge-primary">${food.mealType}</span></div>
        <div class="item-details">
          <span class="item-detail">⚖️ <strong>${food.portion}</strong>g</span>
          <span class="item-detail">🔥 <strong>${food.calories}</strong> kcal</span>
          <span class="item-detail">🥩 <strong>${food.protein}</strong>g protein</span>
          <span class="item-detail">🍞 <strong>${food.carbs}</strong>g carbs</span>
          <span class="item-detail">🥑 <strong>${food.fats}</strong>g fats</span>
          <span class="item-detail">🕐 ${food.timestamp}</span>
        </div>
      </div>
      <div class="item-actions">
        <button class="btn-icon" onclick="deleteFood(${food.id})" title="Delete">🗑️</button>
      </div>
    </li>
  `).join('');
}

// ==================== DASHBOARD FUNCTIONS ====================

function updateDashboard() {
    // Calculate totals
    const totalCaloriesConsumed = appState.nutrition.reduce((sum, food) => sum + food.calories, 0);
    const totalCaloriesBurned = appState.workouts.reduce((sum, workout) => sum + workout.caloriesBurned, 0);
    const netCalories = totalCaloriesConsumed - totalCaloriesBurned;
    const totalWorkouts = appState.workouts.length;

    const totalProtein = appState.nutrition.reduce((sum, food) => sum + food.protein, 0);
    const totalCarbs = appState.nutrition.reduce((sum, food) => sum + food.carbs, 0);
    const totalFats = appState.nutrition.reduce((sum, food) => sum + food.fats, 0);

    const totalVitaminA = appState.nutrition.reduce((sum, food) => sum + food.vitaminA, 0);
    const totalVitaminC = appState.nutrition.reduce((sum, food) => sum + food.vitaminC, 0);
    const totalVitaminD = appState.nutrition.reduce((sum, food) => sum + food.vitaminD, 0);

    const totalIron = appState.nutrition.reduce((sum, food) => sum + food.iron, 0);
    const totalCalcium = appState.nutrition.reduce((sum, food) => sum + food.calcium, 0);
    const totalMagnesium = appState.nutrition.reduce((sum, food) => sum + food.magnesium, 0);

    // Update summary stats
    document.getElementById('total-calories-consumed').textContent = totalCaloriesConsumed;
    document.getElementById('total-calories-burned').textContent = totalCaloriesBurned;
    document.getElementById('net-calories').textContent = netCalories;
    document.getElementById('total-workouts').textContent = totalWorkouts;

    // Update macronutrients
    updateProgress('protein', totalProtein, DAILY_GOALS.protein);
    updateProgress('carbs', totalCarbs, DAILY_GOALS.carbs);
    updateProgress('fats', totalFats, DAILY_GOALS.fats);

    // Update vitamins
    updateProgress('vitamin-a', totalVitaminA, DAILY_GOALS.vitaminA);
    updateProgress('vitamin-c', totalVitaminC, DAILY_GOALS.vitaminC);
    updateProgress('vitamin-d', totalVitaminD, DAILY_GOALS.vitaminD);

    // Update minerals
    updateProgress('iron', totalIron, DAILY_GOALS.iron);
    updateProgress('calcium', totalCalcium, DAILY_GOALS.calcium);
    updateProgress('magnesium', totalMagnesium, DAILY_GOALS.magnesium);

    // Update recommendations
    updateRecommendations({
        totalCaloriesConsumed,
        totalCaloriesBurned,
        netCalories,
        totalProtein,
        totalCarbs,
        totalFats,
        totalVitaminA,
        totalVitaminC,
        totalVitaminD,
        totalIron,
        totalCalcium,
        totalMagnesium,
        totalWorkouts
    });
}

function updateProgress(id, current, goal) {
    const percentage = Math.min((current / goal) * 100, 100);
    const valueElement = document.getElementById(`${id}-value`);
    const progressElement = document.getElementById(`${id}-progress`);

    if (valueElement) {
        valueElement.textContent = Math.round(current);
    }

    if (progressElement) {
        progressElement.style.width = `${percentage}%`;
    }
}

function updateRecommendations(totals) {
    const recommendations = [];

    // Check if user has logged anything
    if (appState.workouts.length === 0 && appState.nutrition.length === 0) {
        recommendations.push({
            icon: '🎯',
            title: 'Start tracking your meals and workouts!',
            detail: 'Add your first workout or meal to get personalized recommendations.'
        });
    } else {
        // Protein recommendations
        if (totals.totalProtein < DAILY_GOALS.protein * 0.5) {
            recommendations.push({
                icon: '🥩',
                title: 'Increase protein intake',
                detail: `You've consumed ${Math.round(totals.totalProtein)}g of ${DAILY_GOALS.protein}g. Try adding chicken, fish, or eggs.`
            });
        }

        // Vitamin C recommendations
        if (totals.totalVitaminC < DAILY_GOALS.vitaminC * 0.5) {
            recommendations.push({
                icon: '🍊',
                title: 'Boost Vitamin C',
                detail: 'Add citrus fruits, bell peppers, or broccoli to your meals.'
            });
        }

        // Vitamin D recommendations
        if (totals.totalVitaminD < DAILY_GOALS.vitaminD * 0.3) {
            recommendations.push({
                icon: '☀️',
                title: 'Get more Vitamin D',
                detail: 'Include salmon, eggs, or fortified foods. Consider sunlight exposure.'
            });
        }

        // Iron recommendations
        if (totals.totalIron < DAILY_GOALS.iron * 0.5) {
            recommendations.push({
                icon: '💪',
                title: 'Increase iron intake',
                detail: 'Add spinach, tofu, or whole grains to boost iron levels.'
            });
        }

        // Workout recommendations
        if (totals.totalWorkouts === 0) {
            recommendations.push({
                icon: '🏃',
                title: 'Get moving!',
                detail: 'Log at least one workout today. Even 20 minutes makes a difference.'
            });
        } else if (totals.totalCaloriesBurned < 200) {
            recommendations.push({
                icon: '🔥',
                title: 'Increase workout intensity',
                detail: 'Try a higher intensity workout or extend your session duration.'
            });
        }

        // Calorie balance
        if (totals.netCalories > DAILY_GOALS.calories + 500) {
            recommendations.push({
                icon: '⚖️',
                title: 'High calorie surplus',
                detail: 'Consider adding more exercise or reducing portion sizes.'
            });
        } else if (totals.netCalories < 1200 && totals.totalCaloriesConsumed > 0) {
            recommendations.push({
                icon: '🍽️',
                title: 'Low calorie intake',
                detail: 'Make sure you\'re eating enough to fuel your activities.'
            });
        }

        // Hydration reminder
        recommendations.push({
            icon: '💧',
            title: 'Stay hydrated',
            detail: 'Drink at least 8 glasses of water throughout the day.'
        });

        // Positive reinforcement
        if (totals.totalWorkouts > 0 && totals.totalProtein >= DAILY_GOALS.protein * 0.7) {
            recommendations.push({
                icon: '🌟',
                title: 'Great job!',
                detail: 'You\'re on track with your fitness and nutrition goals today.'
            });
        }
    }

    const list = document.getElementById('recommendations-list');
    list.innerHTML = recommendations.map(rec => `
    <li class="item">
      <div class="item-content">
        <div class="item-title">${rec.icon} ${rec.title}</div>
        <div class="item-details">
          <span class="item-detail">${rec.detail}</span>
        </div>
      </div>
    </li>
  `).join('');
}

// ==================== PROFILE FUNCTIONS ====================

// Calculate BMR using Mifflin-St Jeor Equation
function calculateBMR(weight, height, age, gender) {
    if (gender === 'male') {
        return 10 * weight + 6.25 * height - 5 * age + 5;
    } else {
        return 10 * weight + 6.25 * height - 5 * age - 161;
    }
}

// Calculate TDEE (Total Daily Energy Expenditure)
function calculateTDEE(bmr, activityLevel) {
    return Math.round(bmr * parseFloat(activityLevel));
}

// Calculate BMI
function calculateBMI(weight, height) {
    const heightInMeters = height / 100;
    return (weight / (heightInMeters * heightInMeters)).toFixed(1);
}

// Save profile
function saveProfile(profileData) {
    const bmr = calculateBMR(profileData.weight, profileData.height, profileData.age, profileData.gender);
    const tdee = calculateTDEE(bmr, profileData.activityLevel);
    const bmi = calculateBMI(profileData.weight, profileData.height);

    appState.profile = {
        ...profileData,
        bmr: Math.round(bmr),
        tdee,
        bmi
    };

    // Update daily goals based on profile
    updateDailyGoalsFromProfile();

    saveState();
    renderProfile();
}

// Update daily goals based on user profile and goal
function updateDailyGoalsFromProfile() {
    if (!appState.profile) return;

    const { tdee, goal } = appState.profile;

    // Adjust calorie goal based on fitness goal
    switch (goal) {
        case 'weight-loss':
            DAILY_GOALS.calories = tdee - 500; // 500 calorie deficit
            DAILY_GOALS.protein = Math.round(appState.profile.weight * 2); // 2g per kg
            DAILY_GOALS.carbs = Math.round((DAILY_GOALS.calories * 0.35) / 4); // 35% of calories
            DAILY_GOALS.fats = Math.round((DAILY_GOALS.calories * 0.25) / 9); // 25% of calories
            break;
        case 'muscle-gain':
            DAILY_GOALS.calories = tdee + 300; // 300 calorie surplus
            DAILY_GOALS.protein = Math.round(appState.profile.weight * 2.2); // 2.2g per kg
            DAILY_GOALS.carbs = Math.round((DAILY_GOALS.calories * 0.45) / 4); // 45% of calories
            DAILY_GOALS.fats = Math.round((DAILY_GOALS.calories * 0.25) / 9); // 25% of calories
            break;
        case 'maintenance':
            DAILY_GOALS.calories = tdee;
            DAILY_GOALS.protein = Math.round(appState.profile.weight * 1.6); // 1.6g per kg
            DAILY_GOALS.carbs = Math.round((DAILY_GOALS.calories * 0.40) / 4); // 40% of calories
            DAILY_GOALS.fats = Math.round((DAILY_GOALS.calories * 0.30) / 9); // 30% of calories
            break;
        case 'athletic':
            DAILY_GOALS.calories = tdee + 200; // Slight surplus
            DAILY_GOALS.protein = Math.round(appState.profile.weight * 2); // 2g per kg
            DAILY_GOALS.carbs = Math.round((DAILY_GOALS.calories * 0.50) / 4); // 50% of calories
            DAILY_GOALS.fats = Math.round((DAILY_GOALS.calories * 0.20) / 9); // 20% of calories
            break;
    }
}

// Render profile view
function renderProfile() {
    if (!appState.profile) return;

    const { name, bmr, tdee, bmi, goal } = appState.profile;

    // Update stats safely
    const bmrEl = document.getElementById('bmr-value');
    if (bmrEl) bmrEl.textContent = bmr;

    const tdeeEl = document.getElementById('tdee-value');
    if (tdeeEl) tdeeEl.textContent = tdee;

    const bmiEl = document.getElementById('bmi-value');
    if (bmiEl) bmiEl.textContent = bmi;

    const goalNames = {
        'weight-loss': 'Weight Loss',
        'muscle-gain': 'Muscle Gain',
        'maintenance': 'Maintenance',
        'athletic': 'Athletic'
    };

    const goalEl = document.getElementById('goal-display');
    if (goalEl) goalEl.textContent = goalNames[goal];

    // Show stats, hide form safely
    const setupEl = document.getElementById('profile-setup');
    const statsEl = document.getElementById('profile-stats');

    if (setupEl) setupEl.classList.add('hidden');
    if (statsEl) statsEl.classList.remove('hidden');

    // Show target goal section safely
    const targetSection = document.getElementById('target-goal-section');
    if (targetSection) targetSection.classList.remove('hidden');

    // Generate and render strategies logic handled by renderStrategies
    if (typeof renderStrategies === 'function') {
        renderStrategies();
    }

    // Render target plan if it exists in profile
    if (appState.profile.target) {
        const { targetWeight, timeline, goalType } = appState.profile.target;
        const plan = calculateTargetPlan(targetWeight, timeline, goalType);

        // Render the plan
        renderTargetPlan(plan);
        document.getElementById('target-goal-results').classList.remove('hidden');

        // Render monthly goals with these settings
        if (typeof renderMonthlyGoals === 'function') {
            renderMonthlyGoals(targetWeight, timeline);
        }
    } else {
        // Fallback to default monthly goals if no target set
        if (typeof renderMonthlyGoals === 'function') {
            renderMonthlyGoals();
        }
    }
}

// Edit profile function
function editProfile() {
    if (!appState.profile) return;

    // Populate form with current values
    document.getElementById('user-name').value = appState.profile.name;
    document.getElementById('user-age').value = appState.profile.age;
    document.getElementById('user-gender').value = appState.profile.gender;
    document.getElementById('user-weight').value = appState.profile.weight;
    document.getElementById('user-height').value = appState.profile.height;
    document.getElementById('activity-level').value = appState.profile.activityLevel;
    document.getElementById('fitness-goal').value = appState.profile.goal;

    // Show form, hide stats and target section
    document.getElementById('profile-setup').classList.remove('hidden');
    document.getElementById('profile-stats').classList.add('hidden');
    document.getElementById('target-goal-section').classList.add('hidden');
    document.getElementById('target-goal-results').classList.add('hidden');
}

// Make editProfile globally accessible
window.editProfile = editProfile;

// Generate improvement strategies
function generateStrategies(months) {
    if (!appState.profile) return [];

    const { weight, goal, tdee } = appState.profile;
    const strategies = [];

    // Calculate target weight based on goal and timeline
    let targetWeight, weeklyChange, totalChange;

    switch (goal) {
        case 'weight-loss':
            weeklyChange = -0.5; // 0.5kg per week
            totalChange = weeklyChange * (months * 4.33); // weeks in months
            targetWeight = Math.max(weight + totalChange, weight * 0.85); // Max 15% loss

            strategies.push({
                title: '🎯 Target Weight',
                detail: `${Math.abs(totalChange).toFixed(1)}kg loss → ${targetWeight.toFixed(1)}kg`
            });

            strategies.push({
                title: '🍽️ Daily Calories',
                detail: `${DAILY_GOALS.calories} kcal (${tdee - DAILY_GOALS.calories} deficit)`
            });

            strategies.push({
                title: '🥩 Macros',
                detail: `Protein: ${DAILY_GOALS.protein}g | Carbs: ${DAILY_GOALS.carbs}g | Fats: ${DAILY_GOALS.fats}g`
            });

            if (months === 3) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '3-4 days/week: Mix cardio (30min) + strength training'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Track all meals, drink 2L water daily, sleep 7-8 hours'
                });
            } else if (months === 6) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '4-5 days/week: HIIT cardio (20min) + full-body strength'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Meal prep Sundays, add 10k steps daily, try intermittent fasting'
                });
            } else {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '5-6 days/week: Advanced split routine + cardio sessions'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Master nutrition habits, build sustainable lifestyle, maintain muscle mass'
                });
            }
            break;

        case 'muscle-gain':
            weeklyChange = 0.25; // 0.25kg per week
            totalChange = weeklyChange * (months * 4.33);
            targetWeight = Math.min(weight + totalChange, weight * 1.15); // Max 15% gain

            strategies.push({
                title: '🎯 Target Weight',
                detail: `${totalChange.toFixed(1)}kg gain → ${targetWeight.toFixed(1)}kg`
            });

            strategies.push({
                title: '🍽️ Daily Calories',
                detail: `${DAILY_GOALS.calories} kcal (${DAILY_GOALS.calories - tdee} surplus)`
            });

            strategies.push({
                title: '🥩 Macros',
                detail: `Protein: ${DAILY_GOALS.protein}g | Carbs: ${DAILY_GOALS.carbs}g | Fats: ${DAILY_GOALS.fats}g`
            });

            if (months === 3) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '4 days/week: Upper/Lower split, progressive overload'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Eat 5-6 meals daily, track lifts, focus on compound movements'
                });
            } else if (months === 6) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '5 days/week: Push/Pull/Legs split, increase volume'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Add creatine, prioritize sleep, deload every 4 weeks'
                });
            } else {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '6 days/week: Advanced PPL or body part split'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Periodize training, optimize recovery, consider supplements'
                });
            }
            break;

        case 'maintenance':
            targetWeight = weight;

            strategies.push({
                title: '🎯 Target Weight',
                detail: `Maintain ${weight.toFixed(1)}kg (±1kg)`
            });

            strategies.push({
                title: '🍽️ Daily Calories',
                detail: `${DAILY_GOALS.calories} kcal (maintenance)`
            });

            strategies.push({
                title: '🥩 Macros',
                detail: `Protein: ${DAILY_GOALS.protein}g | Carbs: ${DAILY_GOALS.carbs}g | Fats: ${DAILY_GOALS.fats}g`
            });

            strategies.push({
                title: '💪 Workout Plan',
                detail: `${months === 3 ? '3-4' : months === 6 ? '4-5' : '4-6'} days/week: Balanced routine`
            });

            strategies.push({
                title: '📋 Action Items',
                detail: 'Build sustainable habits, enjoy variety, focus on consistency'
            });
            break;

        case 'athletic':
            targetWeight = weight;

            strategies.push({
                title: '🎯 Performance Goals',
                detail: `Improve strength, speed, and endurance over ${months} months`
            });

            strategies.push({
                title: '🍽️ Daily Calories',
                detail: `${DAILY_GOALS.calories} kcal (fueling performance)`
            });

            strategies.push({
                title: '🥩 Macros',
                detail: `Protein: ${DAILY_GOALS.protein}g | Carbs: ${DAILY_GOALS.carbs}g | Fats: ${DAILY_GOALS.fats}g`
            });

            if (months === 3) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '5-6 days/week: Sport-specific training + conditioning'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Build aerobic base, improve mobility, master technique'
                });
            } else if (months === 6) {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '6 days/week: Periodized training with intensity phases'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Peak performance cycles, track metrics, optimize recovery'
                });
            } else {
                strategies.push({
                    title: '💪 Workout Plan',
                    detail: '6-7 days/week: Advanced periodization, competition prep'
                });
                strategies.push({
                    title: '📋 Action Items',
                    detail: 'Master your sport, prevent injuries, achieve peak performance'
                });
            }
            break;
    }

    // Add checkpoint
    strategies.push({
        title: '✅ Checkpoint',
        detail: `Review progress at ${months === 3 ? '6 weeks' : months === 6 ? '3 months' : '4 months'} and adjust as needed`
    });

    return strategies;
}

// Render strategies
function renderStrategies() {
    const strategies3 = generateStrategies(3);
    const strategies6 = generateStrategies(6);
    const strategies12 = generateStrategies(12);

    const renderStrategyList = (strategies) => {
        return strategies.map(s => `
            <div class="item" style="margin-bottom: 0.75rem;">
                <div class="item-content">
                    <div class="item-title" style="font-size: 0.9rem;">${s.title}</div>
                    <div class="item-details">
                        <span class="item-detail">${s.detail}</span>
                    </div>
                </div>
            </div>
        `).join('');
    };

    const s3Root = document.getElementById('strategy-3month');
    if (s3Root) s3Root.innerHTML = renderStrategyList(strategies3);

    const s6Root = document.getElementById('strategy-6month');
    if (s6Root) s6Root.innerHTML = renderStrategyList(strategies6);

    const s12Root = document.getElementById('strategy-12month');
    if (s12Root) s12Root.innerHTML = renderStrategyList(strategies12);

    // Also render monthly goals safe check - ONLY if not already rendered by renderProfile with target data
    // This avoids double rendering or overwriting custom target data with defaults
    if (typeof renderMonthlyGoals === 'function' && !appState.profile.target) {
        renderMonthlyGoals();
    }
}

// Generate monthly goals
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
        const monthName = new Date(2024, month - 1).toLocaleString('default', { month: 'long' });

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
            workoutDays: getWorkoutDaysForMonth(month, goal)
        };

        monthlyGoals.push(monthlyGoal);
    }


    return monthlyGoals;
}

// Get recommended workout days based on month and goal
function getWorkoutDaysForMonth(month, goal) {
    // Progressive increase in workout frequency
    if (goal === 'weight-loss') {
        if (month <= 3) return '3-4 days/week';
        if (month <= 6) return '4-5 days/week';
        return '5-6 days/week';
    } else if (goal === 'muscle-gain') {
        if (month <= 3) return '4 days/week';
        if (month <= 6) return '5 days/week';
        return '6 days/week';
    } else if (goal === 'athletic') {
        if (month <= 3) return '5-6 days/week';
        if (month <= 6) return '6 days/week';
        return '6-7 days/week';
    } else {
        return '3-5 days/week';
    }
}

// Render monthly goals
function renderMonthlyGoals(targetWeight = null, timelineMonths = 12) {
    if (!appState.profile) return; // Guard clause

    const monthlyGoals = generateMonthlyGoals(targetWeight, timelineMonths);
    const container = document.getElementById('monthly-goals-container');

    // Safety check
    if (!container) return;

    if (monthlyGoals.length === 0) {
        container.innerHTML = `
            <div class="empty-state">
                <div class="empty-state-text">Complete your profile to see monthly goals</div>
            </div>
        `;
        return;
    }

    const { goal } = appState.profile;
    const goalNames = {
        'weight-loss': 'Weight Loss',
        'muscle-gain': 'Muscle Gain',
        'maintenance': 'Maintenance',
        'athletic': 'Athletic Performance'
    };

    // Create quarters for better organization
    const quarters = [
        { name: 'Q1 (Months 1-3)', months: monthlyGoals.slice(0, 3) },
        { name: 'Q2 (Months 4-6)', months: monthlyGoals.slice(3, 6) },
        { name: 'Q3 (Months 7-9)', months: monthlyGoals.slice(6, 9) },
        { name: 'Q4 (Months 10-12)', months: monthlyGoals.slice(9, 12) }
    ];

    container.innerHTML = `
        <div style="padding: 1rem;">
            <div style="text-align: center; margin-bottom: 1.5rem;">
                <h4 style="color: var(--text-primary); margin-bottom: 0.5rem;">Your ${goalNames[goal]} Journey</h4>
                <p style="color: var(--text-secondary); font-size: 0.9rem;">Month-by-month targets for the next 12 months</p>
            </div>

            ${quarters.map((quarter, qIndex) => `
                <div style="margin-bottom: 2rem;">
                    <h5 style="color: var(--accent-purple); margin-bottom: 1rem; font-size: 1.1rem;">${quarter.name}</h5>
                    <div class="grid grid-3" style="gap: 1rem;">
                        ${quarter.months.map(m => `
                            <div class="card" style="padding: 1rem; background: var(--bg-tertiary);">
                                <div style="text-align: center; margin-bottom: 0.75rem;">
                                    <div style="font-size: 0.85rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Month ${m.month}</div>
                                    <div style="font-size: 1.1rem; font-weight: 600; color: var(--text-primary); margin-top: 0.25rem;">${m.monthName}</div>
                                </div>

                                <div style="border-top: 1px solid var(--border-color); padding-top: 0.75rem;">
                                    <div style="margin-bottom: 0.75rem;">
                                        <div style="font-size: 0.8rem; color: var(--text-muted);">Target Weight</div>
                                        <div style="font-size: 1.3rem; font-weight: 700; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text;">
                                            ${m.targetWeight} kg
                                        </div>
                                        <div style="font-size: 0.75rem; color: ${parseFloat(m.weightChange) < 0 ? '#4facfe' : parseFloat(m.weightChange) > 0 ? '#f093fb' : '#00f2fe'};">
                                            ${parseFloat(m.weightChange) > 0 ? '+' : ''}${m.weightChange} kg total
                                        </div>
                                    </div>


                                    <div style="margin-bottom: 0.5rem;">
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Daily Nutrition</div>
                                        <div style="font-size: 0.85rem; color: var(--text-primary); margin-top: 0.25rem;">
                                            🔥 ${m.dailyCalories} kcal<br>
                                            🥩 ${m.protein}g protein<br>
                                            🍞 ${m.carbs}g carbs<br>
                                            🥑 ${m.fats}g fats
                                        </div>
                                    </div>

                                    <div style="margin-top: 0.75rem; padding-top: 0.75rem; border-top: 1px solid var(--border-color);">
                                        <div style="font-size: 0.75rem; color: var(--text-muted);">Workouts</div>
                                        <div style="font-size: 0.85rem; color: var(--accent-blue); font-weight: 500; margin-top: 0.25rem;">
                                            💪 ${m.workoutDays}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}

            <div style="margin-top: 2rem; padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md); border-left: 4px solid var(--accent-purple);">
                <div style="font-size: 0.9rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">📌 Important Notes:</div>
                <ul style="font-size: 0.85rem; color: var(--text-secondary); margin-left: 1.5rem; line-height: 1.6;">
                    <li>These are target goals - adjust based on your actual progress</li>
                    <li>Track your weight weekly and update your profile monthly</li>
                    <li>Nutrition targets remain consistent for sustainable results</li>
                    <li>Workout frequency increases progressively for better adaptation</li>
                    ${goal === 'weight-loss' ? '<li>Aim for 0.5kg loss per week for healthy, sustainable weight loss</li>' : ''}
                    ${goal === 'muscle-gain' ? '<li>Aim for 0.25kg gain per week to minimize fat gain</li>' : ''}
                </ul>
            </div>
        </div>
    `;
}

// ==================== TARGET GOAL FUNCTIONS ====================

// Calculate plan to reach target weight
function calculateTargetPlan(targetWeight, timelineMonths, goalType = null) {
    if (!appState.profile) return null;

    // Validate inputs
    if (!targetWeight || isNaN(targetWeight) || targetWeight <= 0) return null;
    if (!timelineMonths || isNaN(timelineMonths) || timelineMonths <= 0) return null;

    const { weight, tdee, bmr, goal } = appState.profile;
    const weightDifference = targetWeight - weight;

    // Priority: User's explicitly selected Goal Type
    // If Goal Type conflicts with Weight Difference (Physics), we prioritize the Goal Type
    // and default to a standard healthy rate, ignoring the impossible specific target weight.

    let weeklyRate;
    let goalConflictWarning = null;
    let effectiveGoalType = goalType;

    // Default if no goal selected: infer from weight
    if (!effectiveGoalType) {
        if (weightDifference > 0) effectiveGoalType = 'muscle-gain';
        else if (weightDifference < 0) effectiveGoalType = 'weight-loss';
        else effectiveGoalType = 'maintain';
    }

    const isGaining = effectiveGoalType === 'muscle-gain';
    const isLosing = effectiveGoalType === 'weight-loss';

    // Calculate Rate & Calories
    const totalWeeks = timelineMonths * 4.33;
    let calculatedWeeklyRate = weightDifference / totalWeeks;

    if (isGaining && weightDifference < 0) {
        // CONFLICT: User wants Gain, but Target is lower.
        // Solution: Force standard gain rate (+0.5kg/week)
        weeklyRate = 0.5;
        goalConflictWarning = "Target weight is lower than current, but Muscle Gain selected. Showing standard gain plan (Target Weight ignored).";
    } else if (isLosing && weightDifference > 0) {
        // CONFLICT: User wants Loss, but Target is higher.
        // Solution: Force standard loss rate (-0.5kg/week)
        weeklyRate = -0.5;
        goalConflictWarning = "Target weight is higher than current, but Weight Loss selected. Showing standard loss plan (Target Weight ignored).";
    } else {
        // NO CONFLICT: Use the calculated rate required to hit target
        weeklyRate = calculatedWeeklyRate;
    }

    // Calculate Calories from the determined Weekly Rate
    // 1kg = 7700 calories
    // Daily Deficit/Surplus = (WeeklyRate * 7700) / 7 => WeeklyRate * 1100
    const dailyCalorieAdjustment = Math.round(weeklyRate * 1100);

    // Base TDEE
    let targetDailyCalories = tdee + dailyCalorieAdjustment;

    // Safety Floor: Never go below BMR (critical for health) or 1200 (absolute minimum)
    const MIN_CALORIES = Math.max(bmr, 1200);

    // Clamp for safety
    if (isLosing && targetDailyCalories < MIN_CALORIES) {
        targetDailyCalories = MIN_CALORIES;
    }
    // Additional safety for gaining: don't go too crazy high? (Optional, but less critical than negative)

    // Ensure it's never negative (redundant with MIN_CALORIES check but good for sanity)
    if (targetDailyCalories < 0) targetDailyCalories = MIN_CALORIES;


    // Calculate macros based on goal type
    let proteinGrams, carbsGrams, fatsGrams;

    if (isGaining) {
        // Muscle gain macros
        proteinGrams = Math.round(appState.profile.weight * 2.2); // 2.2g per kg
        const proteinCals = proteinGrams * 4;
        const fatCals = Math.round(targetDailyCalories * 0.25);
        fatsGrams = Math.round(fatCals / 9);
        const carbCals = Math.max(0, targetDailyCalories - proteinCals - fatCals); // Ensure non-negative
        carbsGrams = Math.round(carbCals / 4);
    } else if (isLosing) {
        // Weight loss macros
        proteinGrams = Math.round(appState.profile.weight * 2.0); // 2g per kg
        const proteinCals = proteinGrams * 4;
        const fatCals = Math.round(targetDailyCalories * 0.25);
        fatsGrams = Math.round(fatCals / 9);
        const carbCals = Math.max(0, targetDailyCalories - proteinCals - fatCals); // Ensure non-negative
        carbsGrams = Math.round(carbCals / 4);
    } else {
        // Maintenance
        proteinGrams = Math.round(appState.profile.weight * 1.6);
        const proteinCals = proteinGrams * 4;
        const fatCals = Math.round(targetDailyCalories * 0.30);
        fatsGrams = Math.round(fatCals / 9);
        const carbCals = Math.max(0, targetDailyCalories - proteinCals - fatCals); // Ensure non-negative
        carbsGrams = Math.round(carbCals / 4);
    }


    // Determine workout plan based on goal and timeline
    let workoutPlan;

    // Adjust intensity based on timeline
    const isShortTimeline = timelineMonths <= 3;
    const isMediumTimeline = timelineMonths > 3 && timelineMonths <= 6;
    const isLongTimeline = timelineMonths > 6;

    if (isGaining) {
        let frequency, details;

        if (isShortTimeline) {
            frequency = '5-6 days/week';
            details = [
                'Aggressive muscle building - high frequency',
                'Focus on progressive overload every session',
                'Compound movements (squats, deadlifts, bench press)',
                'Push/Pull/Legs split - 2 cycles per week',
                '8-12 reps per set for hypertrophy',
                'Minimal cardio (1-2 sessions/week)',
                'Eat in surplus daily - no cheat days'
            ];
        } else if (isMediumTimeline) {
            frequency = '4-5 days/week';
            details = [
                'Balanced muscle building approach',
                'Progressive overload with deload weeks',
                'Compound movements with accessory work',
                'Upper/Lower or Push/Pull/Legs split',
                '8-12 reps per set for hypertrophy',
                'Light cardio 2-3 sessions/week',
                'Consistent calorie surplus'
            ];
        } else {
            frequency = '4 days/week';
            details = [
                'Sustainable long-term muscle building',
                'Focus on form and progressive overload',
                'Full body or Upper/Lower split',
                '8-12 reps per set, emphasize mind-muscle connection',
                'Moderate cardio 2-3 sessions/week',
                'Flexible nutrition with 80/20 approach'
            ];
        }

        workoutPlan = {
            frequency: frequency,
            type: 'Strength Training Focus',
            details: details
        };
    } else if (isLosing) {
        let frequency, details;

        if (isShortTimeline) {
            frequency = '6-7 days/week';
            details = [
                'Aggressive fat loss - high activity',
                'Strength training 4 days/week to preserve muscle',
                'HIIT cardio 4-5 days/week (20-30 min)',
                'Higher rep ranges (12-15 reps) for muscle endurance',
                'Active recovery daily (walking, stretching)',
                'Strict calorie deficit - track everything',
                'Consider intermittent fasting'
            ];
        } else if (isMediumTimeline) {
            frequency = '5-6 days/week';
            details = [
                'Balanced fat loss approach',
                'Strength training 3-4 days/week',
                'Cardio 3-4 days/week (mix HIIT and steady state)',
                'Maintain muscle with compound lifts',
                'Rep ranges 10-15 for muscle retention',
                'Moderate calorie deficit',
                'One refeed day per week'
            ];
        } else {
            frequency = '4-5 days/week';
            details = [
                'Sustainable long-term fat loss',
                'Strength training 3 days/week',
                'Moderate cardio 2-3 days/week',
                'Focus on maintaining strength',
                'Varied rep ranges (8-15 reps)',
                'Small calorie deficit for gradual loss',
                'Flexible dieting approach'
            ];
        }

        workoutPlan = {
            frequency: frequency,
            type: 'Mixed Training',
            details: details
        };
    } else {
        workoutPlan = {
            frequency: '3-5 days/week',
            type: 'Balanced Training',
            details: [
                'Mix of strength and cardio',
                'Focus on consistency',
                'Variety in exercises',
                'Listen to your body'
            ]
        };
    }

    // Check if goal is realistic
    const maxHealthyWeeklyChange = isGaining ? 0.5 : -1.0; // kg per week
    const minHealthyWeeklyChange = isGaining ? 0.1 : -0.5;
    const isRealistic = Math.abs(weeklyRate) >= Math.abs(minHealthyWeeklyChange) &&
        Math.abs(weeklyRate) <= Math.abs(maxHealthyWeeklyChange);

    return {
        currentWeight: weight,
        targetWeight: targetWeight,
        weightDifference: weightDifference,
        timelineMonths: timelineMonths,
        weeklyRate: weeklyRate,
        goalType: effectiveGoalType,
        isGaining: isGaining,
        isLosing: isLosing,
        isRealistic: isRealistic,
        tdee: tdee,
        targetDailyCalories: targetDailyCalories,
        calorieAdjustment: dailyCalorieAdjustment,
        protein: proteinGrams,
        carbs: carbsGrams,
        fats: fatsGrams,
        workoutPlan: workoutPlan,
        warning: goalConflictWarning
    };
}

// Generate nutrition tips based on plan
function generateNutritionTips(plan) {
    const tips = [];

    if (plan.isGaining) {
        tips.push('Prioritize protein in every meal (25-30g)');
        tips.push('Eat carbohydrate-rich meals pre and post-workout');
        tips.push('Don\'t skip meals - nutrient timing matters');
        tips.push('Healthy fats (avocado, nuts) help hit calorie goals');
        tips.push('Consider a casein protein shake before bed');
    } else if (plan.isLosing) {
        tips.push('Focus on high-volume, low-calorie foods (vegetables)');
        tips.push('Drink water before meals to increase satiety');
        tips.push('Prioritize protein to preserve muscle mass');
        tips.push('Reduce liquid calories (soda, juice, alcohol)');
        tips.push('Eat slowly and mindfully to recognize fullness');
    } else {
        tips.push('Focus on whole, unprocessed foods');
        tips.push('Balance your plate: 1/2 veg, 1/4 protein, 1/4 carbs');
        tips.push('Listen to hunger and fullness cues');
        tips.push('Stay hydrated - thirst can mimic hunger');
        tips.push('Limit added sugars and refined carbs');
    }

    return tips;
}

// Render target plan
function renderTargetPlan(plan) {
    const container = document.getElementById('target-plan-content');

    if (!plan) {
        container.innerHTML = '<div class="empty-state"><div class="empty-state-text">Unable to calculate plan</div></div>';
        return;
    }

    const changeType = plan.isGaining ? 'gain' : plan.isLosing ? 'loss' : 'maintain';
    const changeColor = plan.isGaining ? '#f093fb' : plan.isLosing ? '#4facfe' : '#00f2fe';
    const goalTypeLabel = plan.goalType === 'muscle-gain' ? '💪 Muscle Gain' : plan.goalType === 'weight-loss' ? '🔥 Weight Loss' : '⚖️ Maintain Weight';

    const nutritionTips = generateNutritionTips(plan);

    // Warning Alert
    let warningHtml = '';
    if (plan.warning) {
        warningHtml = `
            <div style="background: rgba(255, 193, 7, 0.15); border: 1px solid rgba(255, 193, 7, 0.3); border-radius: var(--radius-md); padding: 0.75rem; margin-bottom: 1rem; display: flex; align-items: start; gap: 0.75rem;">
                <span style="font-size: 1.2rem;">⚠️</span>
                <div style="font-size: 0.9rem; color: #ffca2c;">
                    ${plan.warning}
                </div>
            </div>
        `;
    }

    container.innerHTML = `
        <div style="padding: 1.5rem;">
            ${warningHtml}
            <!-- Summary -->
            <div style="text-align: center; margin-bottom: 2rem; padding: 1.5rem; background: var(--bg-secondary); border-radius: var(--radius-lg); border: 2px solid ${changeColor};">
                <div style="font-size: 0.85rem; color: var(--text-muted); margin-bottom: 0.5rem;">Goal Type: ${goalTypeLabel}</div>
                <div style="font-size: 0.9rem; color: var(--text-muted); margin-bottom: 0.5rem;">Your Goal</div>
                <div style="font-size: 2rem; font-weight: 700; background: var(--primary-gradient); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; margin-bottom: 0.5rem;">
                    ${plan.currentWeight.toFixed(1)}kg → ${plan.targetWeight.toFixed(1)}kg
                </div>
                <div style="font-size: 1.2rem; color: ${changeColor}; font-weight: 600;">
                    ${plan.isGaining ? '+' : ''}${plan.weightDifference.toFixed(1)}kg in ${plan.timelineMonths} month${plan.timelineMonths > 1 ? 's' : ''}
                </div>
                
                <!-- Monthly Rate Highlight -->
                <div style="margin-top: 1rem; padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.25rem;">Monthly ${plan.weightDifference > 0 ? 'Gain' : plan.weightDifference < 0 ? 'Loss' : 'Change'} Rate</div>
                    <div style="font-size: 1.5rem; font-weight: 700; color: ${changeColor};">
                        ${(plan.weightDifference / plan.timelineMonths) >= 0 ? '+' : ''}${(plan.weightDifference / plan.timelineMonths).toFixed(2)} kg/month
                    </div>
                </div>
                
                ${!plan.isRealistic ? `
                    <div style="margin-top: 1rem; padding: 0.75rem; background: rgba(250, 112, 154, 0.1); border-left: 3px solid #fa709a; border-radius: var(--radius-sm);">
                        <div style="font-size: 0.85rem; color: #fa709a; font-weight: 600;">⚠️ Warning</div>
                        <div style="font-size: 0.8rem; color: var(--text-secondary); margin-top: 0.25rem;">
                            This rate may be too ${Math.abs(plan.weeklyRate) > (plan.isGaining ? 0.5 : 1.0) ? 'aggressive' : 'slow'}. 
                            Recommended: ${plan.isGaining ? '0.25-0.5kg' : '0.5-1.0kg'} per week.
                        </div>
                    </div>
                ` : ''}
            </div>
            
            
            <!-- Nutrition Plan -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--accent-purple); margin-bottom: 1rem; font-size: 1.2rem;">🍽️ Daily Nutrition Needs</h4>
                
                <div class="grid grid-2" style="gap: 1rem; margin-bottom: 1rem;">
                    <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md); border-left: 4px solid #667eea;">
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Target Calories</div>
                        <div style="font-size: 1.8rem; font-weight: 700; color: var(--text-primary);">${plan.targetDailyCalories} kcal</div>
                        <div style="font-size: 0.75rem; color: ${plan.calorieAdjustment > 0 ? '#f093fb' : '#4facfe'}; margin-top: 0.25rem;">
                            ${plan.calorieAdjustment > 0 ? '+' : ''}${plan.calorieAdjustment} from TDEE (${plan.tdee})
                        </div>
                    </div>
                    
                    <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md);">
                        <div style="font-size: 0.8rem; color: var(--text-muted); margin-bottom: 0.5rem;">Macronutrient Split</div>
                        <div style="font-size: 0.9rem; color: var(--text-primary); line-height: 1.8;">
                            🥩 <strong>${plan.protein}g</strong> protein <span style="font-size: 0.75rem; color: var(--text-secondary);">(${plan.protein * 4} kcal)</span><br>
                            🍞 <strong>${plan.carbs}g</strong> carbs <span style="font-size: 0.75rem; color: var(--text-secondary);">(${plan.carbs * 4} kcal)</span><br>
                            🥑 <strong>${plan.fats}g</strong> fats <span style="font-size: 0.75rem; color: var(--text-secondary);">(${plan.fats * 9} kcal)</span>
                        </div>
                        <div style="margin-top: 0.5rem; padding-top: 0.5rem; border-top: 1px solid var(--border-color); font-size: 0.75rem; color: var(--text-muted);">
                            Total: ${(plan.protein * 4) + (plan.carbs * 4) + (plan.fats * 9)} kcal
                        </div>
                    </div>
                </div>
                
                
                <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.75rem;">💡 Nutrition Tips:</div>
                    <ul style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 1.5rem; line-height: 1.8;">
                        ${nutritionTips.map(tip => `<li>${tip}</li>`).join('')}
                    </ul>
                </div>
            </div>

            <!-- Workout Plan Suggestions -->
            <div style="margin-bottom: 2rem;">
                <h4 style="color: var(--accent-purple); margin-bottom: 1rem; font-size: 1.2rem;">💪 Workout Plan Suggestions</h4>
                
                <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md); margin-bottom: 1rem;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                        <div>
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Frequency</div>
                            <div style="font-size: 1.2rem; font-weight: 600; color: var(--accent-blue);">${plan.workoutPlan.frequency}</div>
                        </div>
                        <div style="text-align: right;">
                            <div style="font-size: 0.8rem; color: var(--text-muted);">Focus</div>
                            <div style="font-size: 1rem; font-weight: 600; color: var(--text-primary);">${plan.workoutPlan.type}</div>
                        </div>
                    </div>
                    
                    <div style="border-top: 1px solid var(--border-color); padding-top: 1rem;">
                        <div style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.5rem;">Recommended Approach:</div>
                        <ul style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 1.5rem; line-height: 1.8;">
                            ${plan.workoutPlan.details.map(detail => `<li>${detail}</li>`).join('')}
                        </ul>
                    </div>
                </div>
                
                <div style="padding: 1rem; background: var(--bg-secondary); border-radius: var(--radius-md);">
                    <div style="font-size: 0.85rem; color: var(--text-primary); font-weight: 600; margin-bottom: 0.75rem;">📝 Additional Tips:</div>
                    <ul style="font-size: 0.8rem; color: var(--text-secondary); margin-left: 1.5rem; line-height: 1.8;">
                        <li>Track your workouts in the Workouts tab</li>
                        <li>Progressive overload is key - gradually increase weight/reps</li>
                        <li>Rest and recovery are crucial - get 7-9 hours of sleep</li>
                        <li>Listen to your body - take rest days when needed</li>
                        ${plan.isGaining ? '<li>Focus on getting stronger each week</li>' : ''}
                        ${plan.isLosing ? '<li>Maintain strength while in a calorie deficit</li>' : ''}
                    </ul>
                </div>
            </div>
            
            <!-- Timeline Breakdown -->
            <div>
                <h4 style="color: var(--accent-purple); margin-bottom: 1rem; font-size: 1.2rem;">📅 Timeline Breakdown</h4>
                
                <div class="grid grid-3" style="gap: 1rem;">
                    ${Array.from({ length: Math.min(plan.timelineMonths, 12) }, (_, i) => {
        const month = i + 1;
        // For the last month, use exact target weight to avoid rounding errors
        const monthWeight = (month === plan.timelineMonths)
            ? plan.targetWeight
            : plan.currentWeight + (plan.weightDifference * (month / plan.timelineMonths));
        return `
                            <div style="padding: 1rem; background: var(--bg-tertiary); border-radius: var(--radius-md); text-align: center;">
                                <div style="font-size: 0.75rem; color: var(--text-muted); text-transform: uppercase; letter-spacing: 0.5px;">Month ${month}</div>
                                <div style="font-size: 1.3rem; font-weight: 700; color: ${changeColor}; margin: 0.5rem 0;">
                                    ${monthWeight.toFixed(1)}kg
                                </div>
                                <div style="font-size: 0.7rem; color: var(--text-secondary);">
                                    ${plan.isGaining ? '+ ' : ''}${(monthWeight - plan.currentWeight).toFixed(1)}kg
                                </div>
                            </div>
                        `;
    }).join('')}
                </div>
            </div>
            
            <div style="margin-top: 2rem; padding: 1rem; background: var(--primary-gradient); border-radius: var(--radius-md); text-align: center;">
                <div style="font-size: 0.9rem; color: white; font-weight: 600;">🎯 Ready to start your journey?</div>
                <div style="font-size: 0.8rem; color: rgba(255,255,255,0.9); margin-top: 0.5rem;">
                    Start tracking your meals and workouts today to reach your goal!
                </div>
            </div>
        </div>
    `;
}

// ==================== FORM HANDLERS ====================

function initForms() {
    // Workout form
    const workoutForm = document.getElementById('workout-form');
    workoutForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const exercise = document.getElementById('exercise-name').value;
        const duration = parseInt(document.getElementById('duration').value);
        const intensity = document.getElementById('intensity').value;
        const sets = document.getElementById('sets').value ? parseInt(document.getElementById('sets').value) : null;
        const reps = document.getElementById('reps').value ? parseInt(document.getElementById('reps').value) : null;

        addWorkout(exercise, duration, intensity, sets, reps);
        workoutForm.reset();
    });

    // Nutrition form
    const nutritionForm = document.getElementById('nutrition-form');
    nutritionForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const foodName = document.getElementById('food-name').value;
        const portion = parseInt(document.getElementById('portion').value);
        const mealType = document.getElementById('meal-type').value;

        addFood(foodName, portion, mealType);
        nutritionForm.reset();
    });

    // Profile form
    const profileForm = document.getElementById('profile-form');
    profileForm.addEventListener('submit', (e) => {
        e.preventDefault();

        const profileData = {
            name: document.getElementById('user-name').value,
            age: parseInt(document.getElementById('user-age').value),
            gender: document.getElementById('user-gender').value,
            weight: parseFloat(document.getElementById('user-weight').value),
            height: parseInt(document.getElementById('user-height').value),
            activityLevel: document.getElementById('activity-level').value,
            goal: document.getElementById('fitness-goal').value
        };

        saveProfile(profileData);
    });

    // Target goal form
    const targetGoalForm = document.getElementById('target-goal-form');
    targetGoalForm.addEventListener('submit', (e) => {
        e.preventDefault();
        console.log("Target goal form submitted!");

        const goalType = document.getElementById('goal-type').value;
        const targetWeight = parseFloat(document.getElementById('target-weight').value);
        const timeline = parseInt(document.getElementById('target-timeline').value);

        console.log("Values:", { goalType, targetWeight, timeline });

        const plan = calculateTargetPlan(targetWeight, timeline, goalType);
        console.log("Calculated Plan:", plan);

        if (!plan) {
            // If plan calculation failed due to validation, stop here.
            return;
        }

        // Save target goal to profile
        if (appState.profile) {
            appState.profile.target = {
                targetWeight,
                timeline,
                goalType
            };
            saveState();
        }

        renderTargetPlan(plan);

        // Update monthly goals with target weight
        renderMonthlyGoals(targetWeight, timeline);

        // Show results
        document.getElementById('target-goal-results').classList.remove('hidden');

        // Scroll to results
        document.getElementById('target-goal-results').scrollIntoView({ behavior: 'smooth', block: 'start' });
    });
}

// ==================== AUTHENTICATION & ROUTING ====================

function checkAuth() {
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    // Auth Check
    const currentUser = localStorage.getItem('fittrack_current_user');

    if (page === 'login.html') {
        if (currentUser) {
            // Already logged in, check profile to determine where to go
            const profile = appState.profile;
            if (profile && profile.weight) {
                window.location.href = 'index.html';
            } else {
                window.location.href = 'profile_setup.html';
            }
        }
    } else if (page === 'profile_setup.html') {
        if (!currentUser) {
            window.location.href = 'login.html';
        }
        // If profile already exists, maybe redirect to index? 
        // Optional: strict check
        if (appState.profile && appState.profile.weight) {
            window.location.href = 'index.html';
        }
    } else {
        // Main App (index.html)
        if (!currentUser) {
            window.location.href = 'login.html';
        } else if (!appState.profile || !appState.profile.weight) {
            // Logged in but no profile
            window.location.href = 'profile_setup.html';
        }
    }
}

function login(username, email, phone) {
    if (!username || !email || !phone) {
        alert("Please fill in all fields (Name, Email, Phone) to continue.");
        return;
    }

    // Save to Storage
    localStorage.setItem('fittrack_current_user', username);
    localStorage.setItem('fittrack_current_email', email);
    localStorage.setItem('fittrack_current_phone', phone);

    // Update State
    appState.currentUser = username;
    appState.currentUserEmail = email;
    appState.currentUserPhone = phone;

    // Load state to check profile
    loadState();

    // Ensure appState has the user (in case loadState wiped it)
    appState.currentUser = username;
    appState.currentUserEmail = email;
    appState.currentUserPhone = phone;

    // Redirect based on profile status
    if (appState.profile && appState.profile.weight) {
        window.location.href = 'index.html';
    } else {
        window.location.href = 'profile_setup.html';
    }
}

function logout() {
    appState.currentUser = null;
    localStorage.removeItem('fittrack_current_user');
    localStorage.removeItem('fittrack_current_email');
    localStorage.removeItem('fittrack_current_phone');
    window.location.href = 'login.html';
}

// ==================== INITIALIZATION ====================

document.addEventListener('DOMContentLoaded', () => {
    // 1. Load State & Check Auth
    const savedUser = localStorage.getItem('fittrack_current_user');
    if (savedUser) {
        appState.currentUser = savedUser;
        loadState();
    }

    checkAuth();

    // 2. Page Specific Init
    const path = window.location.pathname;
    const page = path.split('/').pop() || 'index.html';

    if (page === 'login.html') {
        // Init Login Form
        const loginForm = document.getElementById('login-form');
        if (loginForm) {
            loginForm.addEventListener('submit', (e) => {
                e.preventDefault();
                const username = document.getElementById('login-username').value.trim();
                const email = document.getElementById('login-email').value.trim();
                const phone = document.getElementById('login-phone').value.trim();

                if (username && email && phone) {
                    login(username, email, phone);
                }
            });
        }
    }
    else if (page === 'profile_setup.html') {
        // Init Profile Form (Setup Mode)
        const profileForm = document.getElementById('profile-form');
        if (profileForm) {
            profileForm.addEventListener('submit', (e) => {
                e.preventDefault();

                const profileData = {
                    name: document.getElementById('user-name').value,
                    age: parseInt(document.getElementById('user-age').value),
                    gender: document.getElementById('user-gender').value,
                    weight: parseFloat(document.getElementById('user-weight').value),
                    height: parseInt(document.getElementById('user-height').value),
                    activityLevel: document.getElementById('activity-level').value,
                    goal: document.getElementById('fitness-goal').value
                };

                saveProfile(profileData);
                // Redirect after save
                window.location.href = 'index.html';
            });
        }

        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }
    }
    else {
        // Main App (index.html)
        initNavigation();
        initForms(); // This handles inner forms like Add Workout, Add Food, Edit Profile (if exposed)

        renderWorkouts();
        renderNutrition();
        updateDashboard();

        // Initialize logout button for index.html
        const logoutBtn = document.getElementById('logout-btn');
        if (logoutBtn) {
            logoutBtn.addEventListener('click', logout);
        }

        // Render profile if exists
        if (appState.profile) {
            renderProfile();
        }

    }
});
