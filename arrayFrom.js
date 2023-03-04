function numberToPower(number, power){
  return Array(power).fill(number).reduce((res, n) => res * n, 1);
}