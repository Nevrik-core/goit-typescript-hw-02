/*
  Створіть функцію (isWeekend), яка приймає день тижня (з вашого enum)
  і повертає boolean значення, що вказує, чи це день робочий чи вихідний.
*/

enum WeekDay {
  Monday,
  Tuesday,
  Wednesday,
  Thursday,
  Friday,
  Saturday,
  Sunday,
}

function isWeekend(day: WeekDay): boolean {
  switch (day) {
    case WeekDay.Saturday:
    case WeekDay.Sunday:
      return true;
    default:
      return false;
  }
}

console.log(isWeekend(WeekDay.Monday));
console.log(isWeekend(WeekDay.Sunday));
