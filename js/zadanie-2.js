// Zadanie 2. Obliczanie kalorii
function calcAverageCalories(days) {

    const caloriesPerDay = [];
    let totalCalories = 0;

    for (const singleDay of days) {
        caloriesPerDay.push(days.calories);
        totalCalories += days.calories;
    }
    const averageCalories = (totalCalories / caloriesPerDay.length).toFixed(1);

}