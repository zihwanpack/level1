function solution(a, b) {
  const dayOfWeek = ["FRI", "SAT", "SUN", "MON", "TUE", "WED", "THU"];
  const leapYearDays = [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
  let day = b - 1;

  for (let i = 0; i < a - 1; i++) {
    day += leapYearDays[i];
  }

  return dayOfWeek[day % 7];
}
