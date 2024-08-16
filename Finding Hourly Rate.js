//creating functions. using built-in functions.

function getHourlyRate(annualSalary, numHoursPerWeek) {
    let salaryPerWeek = annualSalary / 52;
    let hourlyRate = salaryPerWeek / numHoursPerWeek;
    return hourlyRate;
}

let salary = 50000;
let workingWeekHours = 40;

let rate = getHourlyRate(salary, workingWeekHours);
let roundedRate = rate.toFixed(2);

console.log(roundedRate);
