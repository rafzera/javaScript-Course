const defaultResult = 0;
let currentResult = defaultResult;

currentResult = (currentResult + 10) * 3 / 2 - 1;

//template literal
let calculationDescription = `( ${defaultResult}   + 10) 


* 3 / 2 - 1`;

outputResult(currentResult, calculationDescription);
