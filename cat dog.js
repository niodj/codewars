var humanYearsCatYearsDogYears = function(humanYears) {
  if (humanYears === 1) {
    return [1, 15, 15];
  }
  return [humanYears, 24+(humanYears - 2)*4, 24+(humanYears - 2)*5];
}
