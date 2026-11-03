// Logical OR (||)
// Returns TRUE if one of the operands is TRUE
let highIncome = false;
let goodCreditScore = false;
let eligibleForLoan = highIncome || goodCreditScore;
console. log('Eligible', eligibleForLoan);

// NOT (!)
let applicationRefused = !eligibleForLoan;
console. log('Application Refused', applicationRefused);